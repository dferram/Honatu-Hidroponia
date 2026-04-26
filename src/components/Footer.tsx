import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-primary tracking-tighter">
              HONATU
            </Link>
            <p className="mt-4 text-sm text-on-surface-variant">
              Organic Precision. La autoridad integral en horticultura para entornos domésticos y comerciales.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-on-surface uppercase tracking-wider">Tienda</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/kits" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Kits de Hidroponía</Link></li>
              <li><Link href="/nutrientes" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Nutrientes Especializados</Link></li>
              <li><Link href="/tecnologia" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Tecnología de Cultivo</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-on-surface uppercase tracking-wider">Aprende</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/blog" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/guias" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Guías de Cultivo</Link></li>
              <li><Link href="/comunidad" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Comunidad</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-on-surface uppercase tracking-wider">Compañía</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/sobre-nosotros" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/contacto" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Contacto</Link></li>
              <li><Link href="/privacidad" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Privacidad & Términos</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-on-surface-variant">
            &copy; {new Date().getFullYear()} Honatu. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Social Icons placeholder */}
            <span className="text-on-surface-variant hover:text-primary cursor-pointer">Instagram</span>
            <span className="text-on-surface-variant hover:text-primary cursor-pointer">Twitter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
