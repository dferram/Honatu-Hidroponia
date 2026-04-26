import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Features from "@/components/Features";
import DashboardPreview from "@/components/DashboardPreview";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Descriptive Section from Design */}
        <section className="py-24 bg-surface border-y border-outline-variant/10 reveal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-display-lg text-on-surface font-light leading-snug tracking-tight max-w-5xl mx-auto italic">
              "Experience precision growth technology. Cultivate nutrient-dense produce in any indoor space with our meticulously engineered hydroponic systems."
            </p>
          </div>
        </section>

        <div className="reveal">
          <FeaturedProducts />
        </div>

        <div className="reveal [animation-delay:200ms]">
          <DashboardPreview />
        </div>

        <div className="reveal [animation-delay:400ms]">
          <Features />
        </div>

        <div className="reveal [animation-delay:600ms]">
          <Community />
        </div>
      </main>
      <Footer />
    </>
  );
}
