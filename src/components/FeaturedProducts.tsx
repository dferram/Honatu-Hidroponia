import Link from "next/link";
import { assetPath } from "@/lib/utils";

const products = [
  {
    id: 1,
    category: 'AEROPONICS',
    name: 'Torre Stratos',
    description: 'Sistema vertical aeropónico de 36 niveles.',
    price: '$299.00',
    spec: 'N-P-K: 5-3-4',
    image: '/hero-tower.png'
  },
  {
    id: 2,
    category: 'TECHNOLOGY',
    name: 'Lumina Pro',
    description: 'Iluminación LED de espectro completo para interiores.',
    price: '$129.00',
    spec: '300W FULL SPECTRUM',
    image: '/led-spectrum.png'
  },
  {
    id: 3,
    category: 'NUTRIENTS',
    name: 'Nutrientes Flora B',
    description: 'Solución balanceada N-P-K para etapa de floración.',
    price: '$35.00',
    spec: 'ORGANIC CERTIFIED',
    image: '/nutrientes.png'
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-display-lg font-bold tracking-tight text-on-surface leading-tight">
              Diseño Orgánico. <br />
              <span className="text-primary-container">Precisión Técnica.</span>
            </h2>
          </div>
          <Link href="/tienda" className="text-label-caps text-primary hover:text-primary-container transition-all group flex items-center gap-2">
            VER CATÁLOGO COMPLETO
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-y-16 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <div className="mb-4">
                <span className="text-label-caps text-outline font-bold tracking-widest">{product.category}</span>
              </div>
              <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-surface-container-low relative shadow-sm hover:shadow-xl transition-all duration-500 mb-6">
                <img
                  src={assetPath(product.image)}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-title-sm font-bold text-on-surface">
                    <Link href={`/producto/${product.id}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-title-sm font-semibold text-primary">{product.price}</p>
                </div>
                <p className="text-body-md text-on-surface-variant mb-4 leading-relaxed line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-auto pt-4 border-t border-outline-variant/20">
                  <span className="text-label-caps text-outline-variant font-bold">{product.spec}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
