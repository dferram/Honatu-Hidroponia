import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-surface-container-lowest pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="py-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary-container/10 border border-primary-container/20 mb-10">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-label-caps text-primary font-bold tracking-widest text-[10px]">SYSTEM STATUS: OPTIMAL CIRCULATION</span>
            </div>
            
            <h1 className="text-display-lg font-bold tracking-tight text-on-surface sm:text-7xl leading-[1.05] mb-8">
              Crecimiento <br />
              <span className="text-primary italic">redefinido</span> por la <br />
              precisión técnica.
            </h1>
            
            <p className="text-body-md text-on-surface-variant leading-relaxed max-w-lg mb-12">
              Cultiva productos densos en nutrientes en cualquier espacio interior con nuestros sistemas hidropónicos meticulosamente diseñados. La intersección perfecta entre vitalidad biológica y ciencia.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link
                href="/tienda"
                className="w-full sm:w-auto rounded-DEFAULT bg-primary px-10 py-4 text-sm font-bold text-on-primary shadow-2xl hover:bg-on-surface transition-all duration-300 text-center"
              >
                EXPLORAR SISTEMAS
              </Link>
              <Link href="/aprende" className="text-label-caps font-bold text-on-surface hover:text-primary transition-all flex items-center gap-2 group">
                VER CÓMO FUNCIONA 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute -inset-10 bg-primary-container/10 rounded-full blur-3xl"></div>
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(20,66,45,0.2)]">
              <img 
                src="/hero-tower.png" 
                alt="Torre Stratos" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
