import React from "react";
import MainLayout from "../../layout/MainLayout";
import Hero from "./container/Hero";
import Article from "./container/Article";
import CTA from "./container/CTA";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Article />
      <CTA />
    </MainLayout>
  );
};

export default HomePage;
