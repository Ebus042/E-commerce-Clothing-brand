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
import Footer1 from "./components/Footer1";
import CustomersReview from "./components/CustomersReview";
import Footer2 from "./components/Footer2";
import { useState } from "react";

function App() {
  const [addToCart, setAddToCart] = useState(0);
  const [addWishList, setAddWishList] = useState(0);

  function handleCart() {
    setAddToCart(addToCart + 1);
  }
  function handleWishList() {
    setAddWishList(addWishList + 1);
  }

  return (
    <>
      <header className="bg-[#f1f1f0]">
        <Header addToCart={addToCart} addWishList={addWishList} />
        <Hero />
      </header>
      <main className="pt-10">
        <Features />
        <Cart />
        <Collections handleCart={handleCart} handleWishList={handleWishList} />
        <BestSales handleCart={handleCart} handleWishList={handleWishList} />
        <AlsoLike handleCart={handleCart} handleWishList={handleWishList} />
        <ShopCollection />
        <ImageVid />
        <CustomersReview />
        <BlogPost />
        <BrandLogo />
        <NewsLetter />
        <Instagram />
      </main>
      <footer>
        <Footer1 />
        <Footer2 />
      </footer>
    </>
  );
}

export default App;
