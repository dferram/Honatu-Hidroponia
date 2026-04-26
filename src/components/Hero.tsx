import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-sans text-5xl font-bold tracking-tight text-on-surface sm:text-7xl">
          Llevamos la producción de <span className="text-primary">hidroponía</span> a tu hogar.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-on-surface-variant">
          Descubre la intersección perfecta entre vitalidad biológica y precisión tecnológica. Sistemas limpios, eficientes y listos para cultivar.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/tienda"
            className="rounded-DEFAULT bg-primary px-6 py-3 text-sm font-semibold text-on-primary shadow-sm hover:bg-primary-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
          >
            Explorar Tienda
          </Link>
          <Link href="/aprende" className="text-sm font-semibold leading-6 text-on-surface hover:text-primary transition-colors flex items-center gap-2">
            Ver cómo funciona <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-container to-secondary-container opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
      </div>
    </div>
  );
}
