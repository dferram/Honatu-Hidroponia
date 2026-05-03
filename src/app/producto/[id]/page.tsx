import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

// Genera las rutas estáticas en tiempo de build
export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ];
}

export default function ProductPage({ params }: { params: { id: string } }) {
  // En un caso real, buscaríamos el producto por ID
  const product = {
    id: params.id,
    name: "Torre Stratos",
    price: "$299.00",
    category: "AEROPONICS",
    description: "La Torre Stratos es la cúspide de la ingeniería de cultivo vertical. Diseñada para maximizar el espacio y la eficiencia nutritiva, permite cultivar hasta 36 plantas simultáneamente en un entorno controlado y limpio.",
    specs: [
      { label: "Capacidad", value: "36 Niveles" },
      { label: "Sistema", value: "Aeroponía de recirculación" },
      { label: "Material", value: "Polímero de grado alimenticio" },
      { label: "Dimensiones", value: "180cm x 60cm" }
    ],
    image: "/hero-tower.png"
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/tienda" className="text-label-caps text-outline-variant hover:text-primary transition-colors mb-12 block font-bold tracking-widest">
            ← VOLVER A LA TIENDA
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="aspect-square rounded-3xl overflow-hidden bg-surface-container-low reveal">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>

            <div className="reveal [animation-delay:200ms]">
              <span className="text-label-caps text-primary font-bold tracking-widest mb-4 block">{product.category}</span>
              <h1 className="text-display-md font-bold text-on-surface mb-4 leading-tight">{product.name}</h1>
              <p className="text-3xl font-light text-primary mb-8">{product.price}</p>
              
              <div className="prose prose-sm text-on-surface-variant mb-12 leading-relaxed">
                <p>{product.description}</p>
              </div>

              <div className="space-y-6 mb-12">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between py-4 border-b border-outline-variant/10">
                    <span className="text-label-caps text-on-surface-variant font-bold text-[10px]">{spec.label}</span>
                    <span className="text-body-sm text-on-surface font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-grow py-5 bg-primary text-on-primary text-xs font-bold tracking-[0.2em] rounded-xl hover:bg-on-surface transition-all duration-300 shadow-xl">
                  AÑADIR AL CARRITO
                </button>
                <button className="px-10 py-5 border border-outline text-on-surface text-xs font-bold tracking-[0.2em] rounded-xl hover:bg-surface-container-low transition-all duration-300">
                  GUARDAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
