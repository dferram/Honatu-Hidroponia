/* ==============================================================================
   HONATU – Cloudinary Connection & Image Optimization Service
   ==============================================================================
   Provides direct integration with Cloudinary CDN for:
   - Dynamic URL generation with on-the-fly transformations (f_auto, q_auto, responsive resizing)
   - Responsive srcset generation for ultra-fast load times
   - Direct unsigned client-side uploads
   - DOM auto-loader for data-cloudinary attributes
   ============================================================================== */

/**
 * Cloudinary configuration loaded from Vite environment variables (import.meta.env)
 */
export const cloudinaryConfig = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || '',
  apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY || '',
  uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || '',
  folder: import.meta.env.VITE_CLOUDINARY_FOLDER || 'honatu',
  
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
 * Builds an optimized Cloudinary delivery URL with transformation parameters
 * 
 * @param {string} publicId - Cloudinary Public ID or relative path (e.g. 'honatu/hero', 'products/solucion-a-b')
 * @param {Object} [options] - Transformation options
 * @param {number} [options.width] - Desired width in pixels
 * @param {number} [options.height] - Desired height in pixels
 * @param {string} [options.crop='limit'] - Crop mode ('fill', 'scale', 'fit', 'thumb', 'limit', 'pad')
 * @param {string} [options.gravity] - Focus gravity ('auto', 'center', 'face', etc.)
 * @param {string|number} [options.quality='auto'] - Image quality (e.g., 'auto', 'auto:good', 'auto:eco', 80)
 * @param {string} [options.format='auto'] - Image format ('auto', 'webp', 'avif', 'png', 'jpg')
 * @param {string|number} [options.dpr='auto'] - Device Pixel Ratio ('auto', 1.0, 2.0)
 * @param {string} [options.effect] - Visual effect (e.g., 'sharpen', 'blur:100')
 * @param {boolean} [options.includeFolder=false] - Whether to prepend default folder if not present
 * @returns {string} Fully qualified Cloudinary CDN URL or original path if not configured
 */
export function getCloudinaryUrl(publicId, options = {}) {
  if (!publicId) return '';

  // If already a full http/https URL that is not a raw public ID, return as is
  if (publicId.startsWith('http://') || publicId.startsWith('https://')) {
    return publicId;
  }

  // If Cloudinary is not configured yet, fallback gracefully to public ID / local path
  if (!cloudinaryConfig.isConfigured()) {
    console.warn('[Cloudinary] VITE_CLOUDINARY_CLOUD_NAME is not set. Using local/fallback path:', publicId);
    return publicId.startsWith('/') || publicId.startsWith('.') ? publicId : `/${publicId}`;
  }

  // Clean public ID
  let cleanId = publicId.replace(/^\/+/, ''); // remove leading slash
  if (options.includeFolder && cloudinaryConfig.folder && !cleanId.startsWith(cloudinaryConfig.folder + '/')) {
    cleanId = `${cloudinaryConfig.folder}/${cleanId}`;
  }

  // Default transformations for optimal performance and modern formats (WebP/AVIF)
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
 * @returns {string} HTML srcset value (e.g. "url 320w, url 640w, ...")
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
 * @param {string} [options.uploadPreset] - Cloudinary Unsigned Upload Preset (defaults to env)
 * @param {string} [options.folder] - Target folder inside Cloudinary
 * @param {string} [options.publicId] - Desired public_id
 * @param {string[]} [options.tags] - Array of tags for categorization
 * @returns {Promise<Object>} Cloudinary API response JSON
 */
export async function uploadImageToCloudinary(file, options = {}) {
  if (!cloudinaryConfig.isConfigured()) {
    throw new Error('[Cloudinary] Cannot upload: VITE_CLOUDINARY_CLOUD_NAME is not configured.');
  }

  const preset = options.uploadPreset || cloudinaryConfig.uploadPreset;
  if (!preset || preset === 'tu_upload_preset_aqui') {
    throw new Error('[Cloudinary] An unsigned upload preset is required for client-side uploads. Configure VITE_CLOUDINARY_UPLOAD_PRESET in .env');
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
 * Auto-initializes HTML elements with Cloudinary attributes.
 * Looks for:
 *  - <img data-cloudinary="public_id" data-cloudinary-width="600" ... />
 *  - <div data-cloudinary-bg="public_id" ... />
 * 
 * @param {HTMLElement|Document} [root=document] - Root container to search inside
 */
export function initCloudinaryImages(root = document) {
  if (!cloudinaryConfig.isConfigured()) return;

  // Process <img> tags
  const images = root.querySelectorAll('img[data-cloudinary]');
  images.forEach(img => {
    const publicId = img.getAttribute('data-cloudinary');
    if (!publicId) return;

    const width = img.getAttribute('data-cloudinary-width');
    const height = img.getAttribute('data-cloudinary-height');
    const crop = img.getAttribute('data-cloudinary-crop') || 'limit';

    const url = getCloudinaryUrl(publicId, {
      width: width ? parseInt(width, 10) : undefined,
      height: height ? parseInt(height, 10) : undefined,
      crop
    });

    img.src = url;

    // Generate responsive srcset if responsive attribute is present
    if (img.hasAttribute('data-cloudinary-responsive')) {
      img.srcset = getCloudinarySrcSet(publicId);
      if (!img.getAttribute('sizes')) {
        img.sizes = '(max-width: 768px) 100vw, 50vw';
      }
    }
  });

  // Process background images
  const bgElements = root.querySelectorAll('[data-cloudinary-bg]');
  bgElements.forEach(el => {
    const publicId = el.getAttribute('data-cloudinary-bg');
    if (!publicId) return;

    const url = getCloudinaryUrl(publicId, { quality: 'auto', format: 'auto' });
    el.style.backgroundImage = `url('${url}')`;
  });
}

export default {
  config: cloudinaryConfig,
  getUrl: getCloudinaryUrl,
  getSrcSet: getCloudinarySrcSet,
  upload: uploadImageToCloudinary,
  initImages: initCloudinaryImages
};
