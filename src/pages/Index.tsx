import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MetricsSection from "@/components/MetricsSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import SubbrandsSection from "@/components/SubbrandsSection";
import BusinessSegmentsSection from "@/components/BusinessSegmentsSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        {/* Separator */}
        <div className="relative">
          <div className="h-10 w-full bg-gradient-to-b from-transparent via-primary/5 to-transparent rounded-full blur" />
        </div>
        <MetricsSection />
        <div className="relative">
          <div className="h-10 w-full bg-gradient-to-b from-transparent via-primary/5 to-transparent rounded-full blur" />
        </div>
        <ProductsSection />
        <div className="relative">
          <div className="h-10 w-full bg-gradient-to-b from-transparent via-primary/5 to-transparent rounded-full blur" />
        </div>
        <AboutSection />
        <div className="relative">
          <div className="h-10 w-full bg-gradient-to-b from-transparent via-primary/5 to-transparent rounded-full blur" />
        </div>
        <SubbrandsSection />
        <div className="relative">
          <div className="h-10 w-full bg-gradient-to-b from-transparent via-primary/5 to-transparent rounded-full blur" />
        </div>
        <BusinessSegmentsSection />
        <div className="relative">
          <div className="h-10 w-full bg-gradient-to-b from-transparent via-primary/5 to-transparent rounded-full blur" />
        </div>
        <ClientsSection />
        <div className="relative">
          <div className="h-10 w-full bg-gradient-to-b from-transparent via-primary/5 to-transparent rounded-full blur" />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
