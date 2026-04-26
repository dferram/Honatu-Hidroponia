import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-20">
          <div className="md:col-span-5">
            <Link href="/" className="text-2xl font-bold text-primary tracking-tighter mb-6 block">
              HONATU
            </Link>
            <p className="text-body-md text-on-surface-variant max-w-sm leading-relaxed mb-8">
              Organic Precision. La autoridad integral en horticultura para entornos domésticos y comerciales. Diseño minimalista para el futuro de la alimentación.
            </p>
            <div className="flex gap-4">
              <Link href="/newsletter" className="text-label-caps text-primary font-bold hover:underline">SUSCRÍBETE A NUESTRO BOLETÍN</Link>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-label-caps font-bold text-on-surface mb-8 tracking-widest">TIENDA</h3>
            <ul className="space-y-4">
              <li><Link href="/kits" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">Kits de Hidroponía</Link></li>
              <li><Link href="/nutrientes" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">Nutrientes Especializados</Link></li>
              <li><Link href="/tecnologia" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">Tecnología de Cultivo</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-label-caps font-bold text-on-surface mb-8 tracking-widest">APRENDE</h3>
            <ul className="space-y-4">
              <li><Link href="/blog" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/guias" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">Guías de Cultivo</Link></li>
              <li><Link href="/comunidad" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">Comunidad</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-label-caps font-bold text-on-surface mb-8 tracking-widest">COMPAÑÍA</h3>
            <ul className="space-y-4">
              <li><Link href="/sobre-nosotros" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/contacto" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">Contacto</Link></li>
              <li><Link href="/privacidad" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">Privacidad & Términos</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-label-caps text-outline-variant font-bold">
            &copy; {new Date().getFullYear()} HONATU HYDROCHRONICS. PRECISION GROWTH TECHNOLOGY.
          </p>
          <div className="flex space-x-8">
            <Link href="https://instagram.com" className="text-label-caps text-on-surface-variant hover:text-primary font-bold transition-all">INSTAGRAM</Link>
            <Link href="https://twitter.com" className="text-label-caps text-on-surface-variant hover:text-primary font-bold transition-all">TWITTER</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
