import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary tracking-tighter">
              HONATU
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/tienda" className="text-on-surface hover:text-primary font-medium transition-colors">
              Tienda
            </Link>
            <Link href="/kits" className="text-on-surface hover:text-primary font-medium transition-colors">
              Kits
            </Link>
            <Link href="/nutrientes" className="text-on-surface hover:text-primary font-medium transition-colors">
              Nutrientes
            </Link>
            <Link href="/aprende" className="text-on-surface hover:text-primary font-medium transition-colors">
              Aprende
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-on-surface hover:text-primary transition-colors p-2" aria-label="Carrito de compras">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
            </button>
            <Link href="/login" className="hidden md:inline-flex items-center justify-center px-4 py-2 border border-outline text-sm font-medium rounded-DEFAULT text-primary bg-transparent hover:bg-surface-container-high transition-colors">
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
