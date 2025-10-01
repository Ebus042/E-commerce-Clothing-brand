import { Heart, Menu, Search, ShoppingCart, X } from "lucide-react";
import { navbar } from "../../data";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ addToCart, addWishList }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <header className="shadow py-5 font-jost fixed w-full z-20 top-0 left-0 bg-[#f1f1f0]">
      <nav className="flex justify-between items-center mx-5 lg:ml-10 lg:mr-20 xl:mx-5">
        {/* Logo */}

        <div>
          <a href="home" className="font-bold text-3xl cursor-pointer">
            NEA-DEV
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setClicked(!clicked)}
          className="xl:hidden bg-gray-200 p-2 z-20 rounded-md"
        >
          {clicked ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-8 uppercase text-[#545454] lg:text-lg">
          {navbar.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="cursor-pointer hover:scale-110 hover:text-red-500 transition duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Icons */}
        <div className="hidden xl:flex items-center z-50 gap-10 text-[#545454]">
          <div className="relative">
            <p
              className="cursor-pointer text-xl hover:scale-125
               hover:text-red-500
            transition-all duration-500 ease-in-out"
            >
              Wishlist
              {addWishList > 0 && (
                <span
                  className="absolute -top-3 -right-4
              text-[13px] px-1 py-0.2 rounded-full bg-red-500 text-white"
                >
                  {addWishList}
                </span>
              )}
            </p>
          </div>
          <div className="relative">
            <p
              className="cursor-pointer text-xl hover:scale-125
               hover:text-red-500
            transition-all duration-500 ease-in-out"
            >
              Cart
              {addToCart > 0 && (
                <span
                  className="absolute -top-3 -right-4
              text-[13px] px-1 py-0.5 rounded-full bg-red-500 text-white"
                >
                  {addToCart}
                </span>
              )}
            </p>
          </div>
          <button>
            <Search />
          </button>
        </div>

        {/* Mobile Icons */}
        <div className="flex xl:hidden items-center gap-4 text-lg font-semibold">
          <div className="relative">
            <Heart className="cursor-pointer w-8 h-8" />
            {addWishList > 0 && (
              <span
                className="absolute -top-2 -right-2 text-[14px] px-1.5 
              py-0.5 bg-red-500 text-white rounded-full"
              >
                {addWishList}
              </span>
            )}
          </div>
          <div className="relative">
            <ShoppingCart className="cursor-pointer w-8 h-8" />
            {addToCart > 0 && (
              <span
                className="absolute -top-2 -right-2 text-[14px] px-1.5 
              py-0.5 bg-red-500 text-white rounded-full"
              >
                {addToCart}
              </span>
            )}
          </div>
          <button>
            <Search />
          </button>
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {clicked && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "50%" }} // stops halfway (50% viewport width shown)
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed top-0 right-0 w-80 h-full bg-gray-100 shadow-lg p-6 uppercase text-[#545454] text-lg z-40"
          >
            <div
              onClick={() => setClicked(!clicked)}
              className="flex flex-col space-y-6 mt-10"
            >
              {navbar.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="block cursor-pointer hover:pl-2 transition-all"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
