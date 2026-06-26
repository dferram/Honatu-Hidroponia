import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, 'src');
const pagesDir = path.join(srcDir, 'pages');

if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

const htmlFiles = [
  'tienda.html',
  'nosotros.html',
  'educacion.html',
  'acciones.html',
  'involucrate.html',
  'producto.html',
  'carrito.html',
  'checkout.html',
  'favoritos.html',
  'gracias.html'
];

htmlFiles.forEach(file => {
  const filePath = path.join(srcDir, file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf-8');

  // Replace CSS
  content = content.replace(/<link rel="stylesheet" href="css\/common\.css">/g, '<link rel="stylesheet" href="../css/main.css">');
  content = content.replace(/<link rel="stylesheet" href="css\/home\.css">/g, ''); // Removed, rely on main.css + page specific
  
  if (['tienda.html', 'producto.html', 'carrito.html', 'checkout.html', 'favoritos.html'].includes(file)) {
    content = content.replace(/<link rel="stylesheet" href="css\/ecommerce\.css">/g, '<link rel="stylesheet" href="../css/pages/ecommerce.css">');
  } else if (['nosotros.html', 'educacion.html', 'acciones.html', 'involucrate.html'].includes(file)) {
    content = content.replace(/<link rel="stylesheet" href="css\/[a-z]+\.css">/g, '<link rel="stylesheet" href="../css/pages/subpage.css">');
    // Also inject subpage.css if it doesn't exist
    if (!content.includes('../css/pages/subpage.css')) {
       content = content.replace(/<link rel="stylesheet" href="\.\.\/css\/main\.css">/g, '<link rel="stylesheet" href="../css/main.css">\n  <link rel="stylesheet" href="../css/pages/subpage.css">');
    }
  }
  
  // Replace JS
  content = content.replace(/<script src="js\/main\.js" defer><\/script>/g, '<script type="module" src="../js/app.js"></script>');

  // Replace assets
  content = content.replace(/href="assets\//g, 'href="../assets/');
  content = content.replace(/src="assets\//g, 'src="../assets/');
  content = content.replace(/url\(['"]?assets\//g, 'url(\'../assets/');

  // Replace index.html link
  content = content.replace(/href="index\.html/g, 'href="../index.html');

  // other HTML files are now peers, so href="tienda.html" remains "tienda.html"

  const newFilePath = path.join(pagesDir, file);
  fs.writeFileSync(newFilePath, content, 'utf-8');
  console.log(`Migrated ${file}`);
  
  // optionally remove the old file from src
  // fs.unlinkSync(filePath);
});
