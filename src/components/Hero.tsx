import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-surface-container-lowest pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary-container/10 border border-primary-container/20 mb-10 animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></div>
          <span className="text-label-caps text-primary-container font-bold tracking-widest">SYSTEM STATUS: OPTIMAL CIRCULATION</span>
        </div>
        
        <h1 className="mx-auto max-w-5xl text-display-lg font-bold tracking-tight text-on-surface sm:text-7xl leading-[1.1]">
          Experimenta el crecimiento con <br />
          <span className="text-primary-container">precisión tecnológica.</span>
        </h1>
        
        <p className="mx-auto mt-8 max-w-2xl text-body-md text-on-surface-variant leading-relaxed">
          Cultiva productos densos en nutrientes en cualquier espacio interior con nuestros sistemas hidropónicos meticulosamente diseñados. La intersección perfecta entre vitalidad biológica y ciencia.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/tienda"
            className="w-full sm:w-auto rounded-DEFAULT bg-primary px-10 py-4 text-sm font-bold text-on-primary shadow-lg hover:bg-primary-container hover:scale-105 transition-all duration-300"
          >
            EXPLORAR SISTEMAS
          </Link>
          <Link href="/aprende" className="text-label-caps font-bold text-on-surface hover:text-primary transition-all flex items-center gap-2 group">
            VER CÓMO FUNCIONA 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
      
      {/* Refined Background decoration */}
      <div className="absolute inset-x-0 -bottom-24 -z-10 transform-gpu overflow-hidden blur-3xl pointer-events-none" aria-hidden="true">
        <div className="relative left-[50%] aspect-[1155/678] w-[80rem] -translate-x-1/2 bg-gradient-to-tr from-primary-container/20 to-secondary-container/10 opacity-30"></div>
      </div>
    </div>
  );
}
