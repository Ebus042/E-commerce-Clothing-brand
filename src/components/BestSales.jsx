import React, { useState } from "react";
import { Pagination, Navigation } from "swiper/modules";
import { bestSellingSection } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const BestSales = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="font-jost mx-3 md:mx-12 uppercase my-36 py-10">
      <div>
        {/* Header */}
        <div className="flex flex-col flex-start md:flex-row justify-between md:items-center my-5">
          <h4 className="text-3xl uppercase">Best Selling Items</h4>
          <p
            className="uppercase tracking-wide relative after:absolute after:w-[10.2rem] lg:after:w-40 
              after:bg-gray-400 after:bottom-0 cursor-pointer after:left-0 after:h-[1px]"
          >
            View All Products
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          className="mySwiper"
          style={{ paddingBottom: "2rem" }}
          breakpoints={{
            0: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {bestSellingSection.map((item, index) => (
            <SwiperSlide
              key={item.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group overflow-hidden"
            >
              {/* Image wrapper */}
              <div className="relative overflow-hidden transition-transform duration-500 ease-in-out group-hover:scale-105">
                <motion.img
                  initial={{ scale: 0.4, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                  src={item.image}
                  loading="lazy"
                  alt="Collections"
                  className="md:w-96 object-contain hover:transition-transform hover:duration-500 group-hover:scale-125"
                />

                {/* Heart icon */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 right-3 lg:top-3 lg:right-5 bg-white p-2  mt-5 shadow-md"
                >
                  <Heart className="w-5 h-5 text-gray-700 hover:text-red-500" />
                </motion.button>
              </div>

              {/* Label */}
              <p className="text-xl mt-6">{item.label}</p>

              {/* Price ↔ Add to Cart */}
              <div className="h-8 flex items-center">
                <AnimatePresence mode="wait">
                  {hoveredIndex !== index ? (
                    <motion.p
                      key="price"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.price}
                    </motion.p>
                  ) : (
                    <motion.button
                      key="button"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-2 py-1 uppercase text-sm"
                    >
                      Add To Cart
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BestSales;
