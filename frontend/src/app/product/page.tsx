import React from "react";
import HeroSection from "./HeroSection";
import TopBenefits from "./TopBenefits";
import AboutSection from "./AboutSection";
import OrderSection from "./OrderSection";

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
    </main>
  );
};

export default Product;
