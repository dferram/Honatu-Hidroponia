export default function Features() {
  return (
    <section className="py-24 bg-surface-container-low/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-label-caps text-primary font-bold tracking-widest mb-6 block">ENGINEERING PRECISION</span>
            <h2 className="text-display-lg font-bold text-on-surface mb-8 leading-tight">
              Eliminamos la incertidumbre de la <span className="text-primary-container">horticultura tradicional.</span>
            </h2>
            <p className="text-body-md text-on-surface-variant mb-12 max-w-xl leading-relaxed">
              Los sistemas Honatu integran ingeniería de precisión con un diseño minimalista, garantizando un entorno de cultivo óptimo para el máximo rendimiento botánico en cualquier espacio interior.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 bg-surface rounded-2xl shadow-sm border border-outline-variant/10">
                <h4 className="text-title-sm font-bold text-on-surface mb-3">Eficiencia Nutritiva</h4>
                <p className="text-body-md text-on-surface-variant">
                  Distribución equilibrada de pH y nutrientes diseñada para acelerar el ciclo de crecimiento de forma natural.
                </p>
              </div>
              <div className="p-8 bg-surface rounded-2xl shadow-sm border border-outline-variant/10">
                <h4 className="text-title-sm font-bold text-on-surface mb-3">90% Menos de Agua</h4>
                <p className="text-body-md text-on-surface-variant">
                  Sistemas de recirculación de circuito cerrado que optimizan el uso del recurso hídrico al máximo.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-container/20 to-secondary-container/20 rounded-full absolute -top-10 -right-10 w-64 h-64 blur-3xl"></div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/20">
              <img 
                src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=1200&h=800" 
                alt="Honatu Engineering" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
                <div className="flex gap-4">
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                    <span className="text-xs font-bold text-white tracking-widest">PRECISION ENGINEERING</span>
                  </div>
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                    <span className="text-xs font-bold text-white tracking-widest">OPTIMAL EFFICIENCY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
