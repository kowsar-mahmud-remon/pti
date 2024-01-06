import React from "react";
import Banner from "../Banner/Banner";
import ProductsPage from "../Products/Products";
import RecommendedProductPage from "../RecommendedProduct/RecommendedProduct";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <ProductsPage></ProductsPage>
      <RecommendedProductPage></RecommendedProductPage>
    </div>
  );
};

export default HomePage;
