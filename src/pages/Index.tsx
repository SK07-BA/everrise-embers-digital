import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import CustomCakeSection from "@/components/CustomCakeSection";
import StorySection from "@/components/StorySection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  useEffect(() => {
    // Enable smooth scrolling globally
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <CustomCakeSection />
      <StorySection />
      <FooterSection />
    </div>
  );
};

export default Index;
