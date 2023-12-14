import React from "react";
import HeroSection from "./HeroSection";
import TopBenefits from "./TopBenefits";
import AboutSection from "./AboutSection";
import OrderSection from "./OrderSection";
import ReviewsSection from "./ReviewsSection";
import FAQSection from "./FAQSection";
import InfoBannerSection from "./InfoBannerSection";
import FinalCTASection from "./FinalCTASection";

const Product = () => {
  return (
    <main className="w-full inline-block">
      {/* Hero Section */}
      <HeroSection />
      {/* Top Benefits Section*/}
      <TopBenefits />
      {/* About Section */}
      <AboutSection />
      {/* Order Section */}
      <OrderSection />
      {/* Review Section */}
      <ReviewsSection />
      {/* FAQ Section */}
      <FAQSection />
      {/* Info Banner Section */}
      <InfoBannerSection />
      {/* Final CTA section */}
      <FinalCTASection />
    </main>
  );
};

export default Product;
