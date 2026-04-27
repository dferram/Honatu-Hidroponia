const fs = require('fs');
const path = require('path');

const sourceDir = 'C:\\Users\\dferr\\.gemini\\antigravity\\brain\\5faf84ab-fbee-4a88-b855-b289f12a8074';
const targetDir = path.join(__dirname, 'public');

const files = [
  { src: 'honatu_tower_hero_1777174333198.png', dest: 'hero-tower.png' },
  { src: 'honatu_led_spectrum_1777174352174.png', dest: 'led-spectrum.png' },
  { src: 'honatu_nutrients_lab_1777174371378.png', dest: 'nutrientes.png' },
  { src: 'honatu_dashboard_preview_1777174391301.png', dest: 'dashboard.png' },
  { src: 'honatu_nutrient_a_bottle_1777222633427.png', dest: 'nutrientes-a.png' },
  { src: 'honatu_substrate_bag_1777222653080.png', dest: 'sustrato.png' }
];

files.forEach(file => {
  const srcPath = path.join(sourceDir, file.src);
  const destPath = path.join(targetDir, file.dest);
  
  try {
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Successfully copied ${file.src} to ${file.dest}`);
    } else {
      console.error(`Source file not found: ${srcPath}`);
    }
  } catch (err) {
    console.error(`Error copying ${file.src}:`, err);
  }
});
