import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import FeasibilitySection from "@/components/FeasibilitySection";
import PrototypesSection from "@/components/PrototypesSection";
import AICOE_BU_InteractionSection from "@/components/AICOE_BU_InteractionSection";
import GallerySection from "@/components/GallerySection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <PrototypesSection />
      <FeasibilitySection />
      <AICOE_BU_InteractionSection />
      <GallerySection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
