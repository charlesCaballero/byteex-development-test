import React from "react";
import HeroSection from "./HeroSection";
import TopBenefits from "./TopBenefits";
import AboutSection from "./AboutSection";
import OrderSection from "./OrderSection";
import ReviewsSection from "./ReviewsSection";

const Product = () => {
  return (
    <main className="inline-block">
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
    </main>
  );
};

export default Product;
