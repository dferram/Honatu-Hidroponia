export default function DashboardPreview() {
  return (
    <section className="py-24 bg-on-surface text-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-container rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative glass-dark rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="/dashboard.png" 
                  alt="Honatu Intelligence Dashboard" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Floating Status Cards */}
              <div className="absolute -top-6 -right-6 glass p-6 rounded-2xl border border-white/20 shadow-xl hidden sm:block animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-primary tracking-widest uppercase">Photosynthesis</p>
                    <p className="text-xl font-bold text-on-surface">98.2%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl border border-white/20 shadow-xl hidden sm:block animate-float [animation-delay:2s]">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary-container/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-secondary-container"></div>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-secondary-container tracking-widest uppercase">Water Level</p>
                    <p className="text-xl font-bold text-on-surface">Optimal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-label-caps text-primary-container font-bold tracking-[0.2em] mb-6 block">INTELLIGENT SYSTEMS</span>
            <h2 className="text-display-lg font-bold text-white mb-8 leading-tight">
              Control total en la <br />
              <span className="text-primary-container italic">palma de tu mano.</span>
            </h2>
            <p className="text-body-md text-white/60 mb-12 max-w-xl leading-relaxed">
              Nuestra aplicación propietaria se conecta directamente con los sensores de tus sistemas Honatu, proporcionando datos en tiempo real sobre el pH, la conductividad eléctrica y los ciclos de luz.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">01</span>
                </div>
                <div>
                  <h4 className="text-title-sm font-bold text-white mb-2">Diagnóstico en Vivo</h4>
                  <p className="text-body-sm text-white/40">Monitoreo constante de la salud radicular y absorción de nutrientes.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">02</span>
                </div>
                <div>
                  <h4 className="text-title-sm font-bold text-white mb-2">Alertas Preventivas</h4>
                  <p className="text-body-sm text-white/40">Notificaciones inteligentes antes de que las plantas muestren estrés.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
