# Honatu Hidroponia - Tienda Online

Este es un proyecto de [Next.js](https://nextjs.org) para la tienda online de Honatu Hidroponia, especializada en sistemas de cultivo aeropónico y vertical.

## 🚀 Deploy en GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages mediante GitHub Actions.

### Configuración Inicial

1. Ve a la configuración de tu repositorio en GitHub
2. Navega a **Settings** > **Pages**
3. En **Source**, selecciona **GitHub Actions**
4. El workflow se ejecutará automáticamente en cada push a la rama `main`

### URL del Sitio

Una vez desplegado, tu sitio estará disponible en:
```
https://dferram.github.io/Honatu-Hidroponia/
```

### Cambios Realizados para GitHub Pages

- ✅ Configurado `output: 'export'` para generación estática
- ✅ Agregado `basePath` y `assetPrefix` para subdirectorio de GitHub Pages
- ✅ Configurado `generateStaticParams()` para rutas dinámicas
- ✅ Deshabilitada optimización de imágenes (no compatible con export estático)
- ✅ Agregado archivo `.nojekyll` para evitar procesamiento de Jekyll

## 🛠️ Desarrollo Local

Primero, instala las dependencias:

```bash
npm install
```

Luego, ejecuta el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## 📦 Build Local

Para generar el build estático localmente:

```bash
npm run build
```

Los archivos estáticos se generarán en la carpeta `out/`.

## 🐳 Docker (Opcional)

También puedes ejecutar el proyecto con Docker:

```bash
docker compose up
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── page.tsx              # Página principal
│   ├── tienda/
│   │   └── page.tsx          # Catálogo de productos
│   └── producto/[id]/
│       └── page.tsx          # Página de detalle de producto
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── Features.tsx
    ├── FeaturedProducts.tsx
    ├── DashboardPreview.tsx
    ├── Community.tsx
    └── Footer.tsx
```

## 🎨 Tecnologías

- **Next.js 16.2.4** - Framework React con App Router
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Framework de estilos
- **GitHub Actions** - CI/CD para deployment automático

## 📝 Notas

- Las imágenes deben estar en la carpeta `public/`
- Los productos están hardcodeados en `src/app/tienda/page.tsx`
- Para agregar más productos, actualiza el array `products` y agrega los IDs correspondientes en `generateStaticParams()`

## 🔗 Enlaces Útiles

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de GitHub Pages](https://docs.github.com/en/pages)
- [Tailwind CSS](https://tailwindcss.com/docs)
