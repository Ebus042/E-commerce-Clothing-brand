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

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wishlist from "./components/Wishlist";

function App() {
  const [addToCart, setAddToCart] = useState([]);
  const [addWishList, setAddWishList] = useState([]);

  function handleWishList(item) {
    setAddWishList((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) {
        return prev.filter((p) => p.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  }
  function handleCart(item) {
    setAddToCart((prev) => [...prev, item]);
  }

  return (
    <>
      <header className="bg-[#f1f1f0]">
        <Header addToCart={addToCart.length} addWishList={addWishList.length} />
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <main className="pt-10">
                <Features />
                <Cart />
                <Collections
                  handleCart={handleCart}
                  handleWishList={handleWishList}
                  addWishList={addWishList}
                />
                <BestSales
                  handleCart={handleCart}
                  handleWishList={handleWishList}
                  addWishList={addWishList}
                />
                <AlsoLike
                  handleCart={handleCart}
                  handleWishList={handleWishList}
                  addWishList={addWishList}
                />
                <ShopCollection />
                <ImageVid />
                <CustomersReview />
                <BlogPost />
                <BrandLogo />
                <NewsLetter />
                <Instagram />
              </main>
            </>
          }
        />

        <Route
          path="/wishlist"
          element={
            <Wishlist
              addWishList={addWishList}
              handleWishList={handleWishList}
              handleCart={handleCart}
            />
          }
        />
      </Routes>
      <footer className="bg-[#f1f1f0]">
        <Footer1 />
        <Footer2 />
      </footer>
    </>
  );
}

export default App;
