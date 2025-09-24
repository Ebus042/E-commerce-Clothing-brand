import { Heart, Menu, Search, ShoppingCart } from "lucide-react";
import { navbar } from "../../data";

const Header = () => {
  return (
    <div className="bg-[#f1f1f0] h-screen">
      <div className="shadow py-10">
        <nav
          className="flex justify-between items-center 
        font-jost  mx-5 lg:mx-10"
        >
          <div>
            <h2 className="font-bold text-3xl">NEA-DEV</h2>
          </div>
          <div className="lg:hidden bg-gray-200 py-1 px-2">
            <Menu />
          </div>
          {/* <div className="hidden lg:flex items-center gap-5">
            {navbar.map((item) => (
              <ul key={item.id}>
                <li>
                  <a href={item.href}></a>
                  {item.label}
                </li>
              </ul>
            ))}
          </div> */}
          <div className="flex items-center text-lg font-semibold lg:hidden gap-3">
            <Heart className="cursor-pointer" />
            <ShoppingCart className="cursor-pointer" />
            <button>
              {" "}
              <Search />
            </button>
          </div>
          <div
            className="hidden lg:flex uppercase text-[#545454] lg:text-xl  
          justify-center items-center gap-20"
          >
            {navbar.map((item) => (
              <ul key={item.id}>
                <li className="cursor-pointer font-jost hover:scale-125 transition-all duration-500 ease-in-out">
                  <a href={item.href}></a>
                  {item.label}
                </li>
              </ul>
            ))}
          </div>
          <div className="hidden uppercase text-[#545454] lg:text-xl lg:flex gap-8">
            <p className="cursor-pointer">WishList(0)</p>
            <span className="cursor-pointer">Cart(0)</span>
            <button>
              <Search />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
