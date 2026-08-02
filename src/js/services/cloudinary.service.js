/* ==============================================================================
   HONATU – Cloudinary Connection & Image Optimization Service
   ==============================================================================
   Provides direct integration with Cloudinary CDN for:
   - Dynamic URL generation with on-the-fly transformations (f_auto, q_auto, responsive resizing)
   - Responsive srcset generation for ultra-fast load times
   - Direct unsigned client-side uploads
   - Automatic local asset to Cloudinary URL translation
   - Zero-broken-image fallback system (gorgeous SVG placeholders on any error/404)
   ============================================================================== */

/**
 * Cloudinary configuration loaded from Vite environment variables (import.meta.env)
 */
export const cloudinaryConfig = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || '',
  apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY || '',
  uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || '',
  folder: import.meta.env.VITE_CLOUDINARY_FOLDER || 'Honatu',
  
  // Base delivery URL
  get baseUrl() {
    return `https://res.cloudinary.com/${this.cloudName}/image/upload`;
  },

  // Base upload endpoint
  get uploadUrl() {
    return `https://api.cloudinary.com/v1_1/${this.cloudName}/image/upload`;
  },

  /**
   * Check if Cloudinary is properly configured in the environment
   * @returns {boolean}
   */
  isConfigured() {
    return Boolean(this.cloudName && this.cloudName !== 'tu_cloud_name_aqui');
  }
};

/**
 * Generates an ultra-lightweight, aesthetic SVG placeholder Data URI
 * styled with Honatu brand colors (Forest green, emerald, and clean typography).
 * 
 * @param {string} [label='Honatu Hidroponía'] - Text to display inside the placeholder
 * @param {number} [width=600] - Canvas width
 * @param {number} [height=400] - Canvas height
 * @returns {string} SVG Data URI
 */
export function createFallbackSvg(label = 'Honatu Insumos', width = 600, height = 400) {
  const safeLabel = String(label)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .slice(0, 32);

  const svgString = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0E1C15" />
      <stop offset="50%" stop-color="#1B4332" />
      <stop offset="100%" stop-color="#2D6A4F" />
    </linearGradient>
    <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#74C69D" />
      <stop offset="100%" stop-color="#52B788" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGrad)"/>
  <circle cx="${width / 2}" cy="${height / 2 - 25}" r="45" fill="rgba(82, 183, 136, 0.12)" />
  <g transform="translate(${width / 2 - 20}, ${height / 2 - 45}) scale(1.6)" fill="url(#leafGrad)">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
  </g>
  <text x="50%" y="${height / 2 + 40}" text-anchor="middle" fill="#D8F3DC" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" letter-spacing="0.5">${safeLabel}</text>
  <text x="50%" y="${height / 2 + 65}" text-anchor="middle" fill="#95D5B2" font-family="system-ui, -apple-system, sans-serif" font-size="12" opacity="0.8">HONATU HIDROPONÍA</text>
</svg>`.trim().replace(/\n/g, '');

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`;
}

/**
 * Builds an optimized Cloudinary delivery URL with transformation parameters
 * 
 * @param {string} publicId - Cloudinary Public ID or relative path (e.g. 'home/img_1.jpg', 'nosotros/img_1.jpg')
 * @param {Object} [options] - Transformation options
 * @param {number} [options.width] - Desired width in pixels
 * @param {number} [options.height] - Desired height in pixels
 * @param {string} [options.crop] - Crop mode ('fill', 'scale', 'fit', 'thumb', 'limit', 'pad')
 * @param {string} [options.gravity] - Focus gravity ('auto', 'center', 'face', etc.)
 * @param {string|number} [options.quality='auto'] - Image quality ('auto', 'auto:good', 'auto:eco', 80)
 * @param {string} [options.format='auto'] - Image format ('auto', 'webp', 'avif', 'png', 'jpg')
 * @param {string|number} [options.dpr='auto'] - Device Pixel Ratio ('auto', 1.0, 2.0)
 * @param {string} [options.effect] - Visual effect (e.g., 'sharpen', 'blur:100')
 * @param {boolean} [options.includeFolder=true] - Whether to prepend default folder if not present
 * @returns {string} Fully qualified Cloudinary CDN URL or SVG Fallback
 */
export function getCloudinaryUrl(publicId, options = {}) {
  if (!publicId) return createFallbackSvg();

  // If already a data URI, return as is
  if (publicId.startsWith('data:')) {
    return publicId;
  }

  // If already a full http/https URL that is not a raw public ID
  if (publicId.startsWith('http://') || publicId.startsWith('https://')) {
    return publicId;
  }

  // Clean public ID from local relative prefixes (e.g., '../assets/images/', './assets/images/', 'assets/images/')
  let cleanId = publicId
    .replace(/^(\.\.\/|\.\/|\/)?assets\/images\//, '')
    .replace(/^\/+/, '');

  if (!cloudinaryConfig.isConfigured()) {
    console.warn('[Cloudinary] VITE_CLOUDINARY_CLOUD_NAME is not set. Generating brand placeholder for:', publicId);
    return createFallbackSvg(cleanId);
  }

  const includeFolder = options.includeFolder !== false;
  if (includeFolder && cloudinaryConfig.folder && !cleanId.startsWith(cloudinaryConfig.folder + '/')) {
    cleanId = `${cloudinaryConfig.folder}/${cleanId}`;
  }

  const {
    width,
    height,
    crop = width || height ? 'limit' : undefined,
    gravity,
    quality = 'auto',
    format = 'auto',
    dpr = 'auto',
    effect,
    rawTransformations = []
  } = options;

  const transforms = [];

  // Format & Quality optimizations
  if (format) transforms.push(`f_${format}`);
  if (quality) transforms.push(`q_${quality}`);
  if (dpr) transforms.push(`dpr_${dpr}`);

  // Sizing & Crop
  if (crop) transforms.push(`c_${crop}`);
  if (width) transforms.push(`w_${Math.round(width)}`);
  if (height) transforms.push(`h_${Math.round(height)}`);
  if (gravity) transforms.push(`g_${gravity}`);

  // Effects
  if (effect) transforms.push(`e_${effect}`);

  // Custom raw transformations
  if (Array.isArray(rawTransformations) && rawTransformations.length > 0) {
    transforms.push(...rawTransformations);
  }

  const transformString = transforms.length > 0 ? transforms.join(',') + '/' : '';
  return `${cloudinaryConfig.baseUrl}/${transformString}${cleanId}`;
}

/**
 * Generates a responsive srcset string for <img> or <source> tags
 * 
 * @param {string} publicId - Cloudinary Public ID
 * @param {number[]} [widths=[320, 640, 960, 1200, 1600]] - Array of target widths
 * @param {Object} [options] - Additional transformation options
 * @returns {string} HTML srcset value
 */
export function getCloudinarySrcSet(publicId, widths = [320, 640, 960, 1200, 1600], options = {}) {
  if (!publicId || !cloudinaryConfig.isConfigured()) return '';

  return widths
    .map(w => `${getCloudinaryUrl(publicId, { ...options, width: w })} ${w}w`)
    .join(', ');
}

/**
 * Uploads an image or file directly from the client to Cloudinary using an unsigned upload preset
 * 
 * @param {File|Blob|string} file - File object, Blob, or base64 data URL to upload
 * @param {Object} [options] - Upload options
 * @returns {Promise<Object>} Cloudinary API response JSON
 */
export async function uploadImageToCloudinary(file, options = {}) {
  if (!cloudinaryConfig.isConfigured()) {
    throw new Error('[Cloudinary] Cannot upload: VITE_CLOUDINARY_CLOUD_NAME is not configured.');
  }

  const preset = options.uploadPreset || cloudinaryConfig.uploadPreset;
  if (!preset || preset === 'honatu_preset' || preset === 'tu_upload_preset_aqui') {
    throw new Error('[Cloudinary] An unsigned upload preset is required for client-side uploads.');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', preset);

  const targetFolder = options.folder || cloudinaryConfig.folder;
  if (targetFolder) {
    formData.append('folder', targetFolder);
  }

  if (options.publicId) {
    formData.append('public_id', options.publicId);
  }

  if (Array.isArray(options.tags) && options.tags.length > 0) {
    formData.append('tags', options.tags.join(','));
  }

  const response = await fetch(cloudinaryConfig.uploadUrl, {
    method: 'POST',
    body: formData
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error?.message || `Cloudinary upload failed with status ${response.status}`);
  }

  return response.json();
}

/**
 * Global image error interceptor.
 * Captures any image failure (404, network error, missing file) and gracefully
 * replaces it with a stylish brand placeholder, completely preventing broken image icons.
 */
export function setupGlobalImageErrorHandler() {
  if (window._honatuImageErrorHandlerAttached) return;
  window._honatuImageErrorHandlerAttached = true;

  window.addEventListener(
    'error',
    (event) => {
      const target = event.target;
      if (target && target.tagName === 'IMG') {
        const currentSrc = target.getAttribute('src') || '';
        
        // Prevent infinite loop if placeholder fails
        if (currentSrc.startsWith('data:image/svg+xml')) {
          return;
        }

        // If it failed on a local assets/images path, try Cloudinary first
        if (currentSrc.includes('assets/images/') && !currentSrc.includes('cloudinary.com')) {
          const cloudinaryUrl = getCloudinaryUrl(currentSrc);
          target.src = cloudinaryUrl;
          return;
        }

        // If Cloudinary or local path failed, apply SVG placeholder
        const label = target.alt || target.getAttribute('data-name') || 'Honatu Insumos';
        target.src = createFallbackSvg(label);
        target.classList.add('img-fallback');
      }
    },
    true // Capturing phase to intercept image loading errors before bubbling
  );
}

/**
 * Scans the DOM and seamlessly migrates all images & product card data attributes
 * from local asset paths to Cloudinary CDN URLs.
 * 
 * @param {HTMLElement|Document} [root=document] - Root container
 */
export function initCloudinaryImages(root = document) {
  // Ensure error interceptor is always active
  setupGlobalImageErrorHandler();

  // 1. Process <img> tags with local assets/images/
  const images = root.querySelectorAll('img');
  images.forEach(img => {
    // Check if explicitly configured with data-cloudinary
    const customCloudinaryId = img.getAttribute('data-cloudinary');
    if (customCloudinaryId) {
      const width = img.getAttribute('data-cloudinary-width');
      const height = img.getAttribute('data-cloudinary-height');
      const crop = img.getAttribute('data-cloudinary-crop') || 'limit';

      img.src = getCloudinaryUrl(customCloudinaryId, {
        width: width ? parseInt(width, 10) : undefined,
        height: height ? parseInt(height, 10) : undefined,
        crop
      });

      if (img.hasAttribute('data-cloudinary-responsive')) {
        img.srcset = getCloudinarySrcSet(customCloudinaryId);
        if (!img.getAttribute('sizes')) {
          img.sizes = '(max-width: 768px) 100vw, 50vw';
        }
      }
      return;
    }

    // Check if pointing to local assets/images/ (e.g. "../assets/images/home/img_1.jpg")
    const src = img.getAttribute('src');
    if (src && src.includes('assets/images/')) {
      img.src = getCloudinaryUrl(src);
    }
  });

  // 2. Process [data-img] attributes on products/buttons (used by Cart & Favorites)
  const elementsWithDataImg = root.querySelectorAll('[data-img]');
  elementsWithDataImg.forEach(el => {
    const dataImg = el.getAttribute('data-img');
    if (dataImg && dataImg.includes('assets/images/')) {
      el.setAttribute('data-img', getCloudinaryUrl(dataImg));
    }
  });

  // 3. Process background images with data-cloudinary-bg
  const bgElements = root.querySelectorAll('[data-cloudinary-bg]');
  bgElements.forEach(el => {
    const publicId = el.getAttribute('data-cloudinary-bg');
    if (!publicId) return;

    const url = getCloudinaryUrl(publicId, { quality: 'auto', format: 'auto' });
    el.style.backgroundImage = `url('${url}')`;
  });
}

// Auto-activate error handler immediately when the module is imported
setupGlobalImageErrorHandler();

export default {
  config: cloudinaryConfig,
  getUrl: getCloudinaryUrl,
  getSrcSet: getCloudinarySrcSet,
  upload: uploadImageToCloudinary,
  createFallbackSvg,
  setupErrorHandler: setupGlobalImageErrorHandler,
  initImages: initCloudinaryImages
};
