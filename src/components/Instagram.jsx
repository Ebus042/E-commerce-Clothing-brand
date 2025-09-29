import { instagramImages } from "../../data";

const Instagram = () => {
  return (
    <section>
      <div className="relative grid grid-cols-2 gap-y-8 lg:grid-cols-6">
        {instagramImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt="" />
          </div>
        ))}
        <div className="">
          <button
            className="absolute font-jost text-lg bg-gray-950 transition-all duration-500 ease-in-out
                text-white py-2 px-10 hover:bg-gray-600 left-16 lg:left-[30rem] bottom-2"
          >
            Follow us on Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
