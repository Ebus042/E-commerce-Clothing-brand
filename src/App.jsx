// import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Cart from "./components/Cart";
import Collections from "./components/Collections";
import BestSales from "./components/BestSales";
import AlsoLike from "./components/AlsoLike";
import ShopCollection from "./components/ShopCollection";
import BlogPost from "./components/BlogPost";
import ImageVid from "./components/ImageVid";
import BrandLogo from "./components/BrandLogo";
import NewsLetter from "./components/NewsLetter";
import Instagram from "./components/Instagram";

function App() {
  return (
    <>
      <header className="bg-[#f1f1f0]">
        <Header />
        <Hero />
      </header>
      <main className="pt-10">
        <Features />
        <Cart />
        <Collections />
        <BestSales />
        <AlsoLike />
        <ShopCollection />
        <ImageVid />
        <BlogPost />
        <BrandLogo />
        <NewsLetter />
        <Instagram />
      </main>
    </>
  );
}

export default App;
