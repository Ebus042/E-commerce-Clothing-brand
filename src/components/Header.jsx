import { Heart, Menu, Search, ShoppingCart, X } from "lucide-react";
import { navbar } from "../../data";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ addToCart }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <header className="shadow py-5 font-jost fixed w-full z-20 top-0 left-0 bg-[#f1f1f0]">
      <nav className="flex justify-between items-center mx-5 lg:ml-10 lg:mr-20 xl:mx-5">
        {/* Logo */}
        <h2 className="font-bold text-3xl">NEA-DEV</h2>

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
              className="cursor-pointer hover:scale-110 transition duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Icons */}
        <div className="hidden xl:flex items-center z-50 gap-6 text-[#545454]">
          <p className="cursor-pointer">Wishlist()</p>
          <span className="cursor-pointer">Cart({addToCart})</span>
          <button>
            <Search />
          </button>
        </div>

        {/* Mobile Icons */}
        <div className="flex xl:hidden items-center gap-4 text-lg font-semibold">
          <Heart className="cursor-pointer"></Heart>
          <ShoppingCart className="cursor-pointer" />
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
            <div className="flex flex-col space-y-6 mt-10">
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
