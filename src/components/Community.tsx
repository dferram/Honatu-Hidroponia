export default function Community() {
  const categories = [
    {
      title: "Guías de Inicio",
      description: "Aprende los fundamentos de la aeroponía y cómo configurar tu primer sistema.",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800",
      link: "/aprende/guias"
    },
    {
      title: "Comunidad Honatu",
      description: "Conéctate con otros cultivadores urbanos y comparte tus resultados.",
      image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=800",
      link: "/comunidad"
    },
    {
      title: "Ciencia Botánica",
      description: "Artículos profundos sobre la biología de las plantas y optimización de nutrientes.",
      image: "/led-spectrum.png",
      link: "/aprende/ciencia"
    }
  ];

  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-label-caps text-primary font-bold tracking-widest mb-6 block">KNOWLEDGE CENTER</span>
            <h2 className="text-display-lg font-bold text-on-surface leading-tight">
              Más allá del equipo, <br />
              <span className="text-primary italic">cultivamos conocimiento.</span>
            </h2>
          </div>
          <button className="px-8 py-4 border border-outline text-label-caps font-bold text-on-surface hover:bg-on-surface hover:text-surface transition-all duration-300">
            VER TODO EL CONTENIDO
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-8">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-title-lg font-bold text-white mb-2">{cat.title}</h3>
                  <div className="w-12 h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
