import { useNavigate } from "react-router-dom";
import { Swiper } from "swiper/react";

const Wishlist = ({ addWishList, handleWishList, handleCart }) => {
  const navigate = useNavigate();
  return (
    <section className="font-jost my-32 mx-10">
      <div>
        <div className="bg-red-500 w-36 py-2 px-1 my-5 mx-3 text-white">
          <button onClick={() => navigate("/")}>Back to Homepage</button>
        </div>
        <div>
          {addWishList.length === 0 ? (
            <p>No item on wishlist yet!</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {addWishList.map((item) => (
                <div key={item.id}>
                  <img src={item.image} alt={item.label} />
                  <h4>{item.label}</h4>
                  <p>{item.price}</p>

                  <div
                    className="flex gap-5 items-center"
                    onClick={() => {
                      handleWishList(item);
                      handleCart(item);
                    }}
                  >
                    <button>Add to Cart</button>

                    <button
                      onClick={() => handleWishList(item)}
                      className="bg-red-500 px-2 rounded-sm hover:bg-red-600 text-white"
                    >
                      remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
