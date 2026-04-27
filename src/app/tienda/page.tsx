import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const products = [
  {
    id: 1,
    category: 'AEROPONICS',
    name: 'Torre Stratos',
    description: 'Sistema vertical aeropónico de 36 niveles para máxima producción.',
    price: '$299.00',
    spec: '36 NIVELES - AEROPONÍA',
    image: '/hero-tower.png'
  },
  {
    id: 2,
    category: 'TECHNOLOGY',
    name: 'Lumina Pro',
    description: 'Iluminación LED de espectro completo diseñada para crecimiento vegetal acelerado.',
    price: '$129.00',
    spec: '300W FULL SPECTRUM',
    image: '/led-spectrum.png'
  },
  {
    id: 3,
    category: 'NUTRIENTS',
    name: 'Nutrientes Flora A',
    description: 'Solución concentrada para la fase de crecimiento vegetativo.',
    price: '$35.00',
    spec: 'GROWTH FORMULA - 1L',
    image: '/nutrientes-a.png'
  },
  {
    id: 4,
    category: 'NUTRIENTS',
    name: 'Nutrientes Flora B',
    description: 'Solución balanceada para la etapa de floración y fructificación.',
    price: '$35.00',
    spec: 'BLOOM FORMULA - 1L',
    image: '/nutrientes.png'
  },
  {
    id: 5,
    category: 'ACCESSORIES',
    name: 'Sustrato Premium',
    description: 'Mezcla optimizada de perlita y coco para oxigenación radicular superior.',
    price: '$15.00',
    spec: 'COCO + PERLITA - 10L',
    image: '/sustrato.png'
  },
  {
    id: 6,
    category: 'AEROPONICS',
    name: 'Torre Compacta',
    description: 'Versión reducida para espacios limitados o principiantes.',
    price: '$189.00',
    spec: '12 NIVELES - COMPACTA',
    image: '/hero-tower.png'
  }
];

export default function TiendaPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 reveal">
            <span className="text-label-caps text-primary font-bold tracking-widest mb-4 block">CATÁLOGO COMPLETO</span>
            <h1 className="text-display-lg font-bold text-on-surface leading-tight mb-6">
              Sistemas y Nutrientes de <br />
              <span className="text-primary-container italic">Grado Comercial.</span>
            </h1>
            <div className="flex flex-wrap gap-4 mt-8">
              {['TODOS', 'AEROPONICS', 'TECHNOLOGY', 'NUTRIENTS', 'ACCESSORIES'].map((filter) => (
                <button 
                  key={filter}
                  className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest border transition-all ${
                    filter === 'TODOS' 
                      ? 'bg-on-surface text-surface border-on-surface' 
                      : 'border-outline text-on-surface-variant hover:border-on-surface hover:text-on-surface'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-y-16 gap-x-10 sm:grid-cols-2 lg:grid-cols-3 reveal">
            {products.map((product) => (
              <div key={product.id} className="group flex flex-col">
                <div className="mb-4">
                  <span className="text-label-caps text-outline font-bold tracking-widest">{product.category}</span>
                </div>
                <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-surface-container-low relative shadow-sm hover:shadow-xl transition-all duration-500 mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                  <button className="absolute bottom-6 left-6 right-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-primary hover:border-primary">
                    AÑADIR AL CARRITO
                  </button>
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
                  <div className="mt-auto pt-4 border-t border-outline-variant/20 flex justify-between items-center">
                    <span className="text-label-caps text-outline-variant font-bold text-[10px]">{product.spec}</span>
                    <Link href={`/producto/${product.id}`} className="text-[10px] font-bold text-primary tracking-widest hover:underline">
                      DETALLES →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
