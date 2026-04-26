import Link from "next/link";

const products = [
  {
    id: 1,
    name: 'Torre Stratos',
    description: 'Sistema vertical aeropónico de 36 niveles.',
    price: '$299',
    image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=600&h=800',
    tags: ['Kits', 'Premium']
  },
  {
    id: 2,
    name: 'Lumina Pro',
    description: 'Iluminación LED de espectro completo para interiores.',
    price: '$129',
    image: 'https://images.unsplash.com/photo-1585250064619-7ebfbd655761?auto=format&fit=crop&q=80&w=600&h=800',
    tags: ['Tecnología']
  },
  {
    id: 3,
    name: 'Nutrientes Flora B',
    description: 'Solución balanceada N-P-K para etapa de floración.',
    price: '$35',
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&q=80&w=600&h=800',
    tags: ['Nutrientes', 'Esencial']
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-on-surface sm:text-4xl">Nuestros Favoritos</h2>
            <p className="mt-4 text-lg text-on-surface-variant max-w-2xl">
              Diseño minimalista y precisión técnica. Encuentra todo lo que necesitas para tu ecosistema.
            </p>
          </div>
          <Link href="/tienda" className="hidden sm:block text-sm font-semibold text-primary hover:text-primary-container transition-colors">
            Ver catálogo completo →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-surface-container-lowest rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-outline-variant/30">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-md bg-surface-container-low lg:aspect-[4/5] relative">
                {/* Fallback color/image if external unplash fails */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 flex gap-2">
                  {product.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-full bg-tertiary-container px-2 py-1 text-xs font-medium text-on-secondary-container">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-on-surface">
                    <Link href={`/producto/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-on-surface-variant line-clamp-2">{product.description}</p>
                </div>
                <p className="text-lg font-medium text-primary">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 sm:hidden">
            <Link href="/tienda" className="text-sm font-semibold text-primary hover:text-primary-container transition-colors">
                Ver catálogo completo →
            </Link>
        </div>
      </div>
    </section>
  );
}
