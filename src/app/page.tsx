import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        {/* Aquí irían las secciones adicionales como Nutrientes y Tecnología de Cultivo */}
      </main>
      <Footer />
    </>
  );
}
