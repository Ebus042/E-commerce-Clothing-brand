import newsLetterImg from "../Images/pattern-bg.png";

const NewsLetter = () => {
  return (
    <section className="relative w-full mt-20 h-[400px] flex items-center justify-center">
      <div className=" mx-3 md:mx-12">
        <img
          src={newsLetterImg}
          alt="NewsLetter image"
          className="absolute inset-0 object-fill"
        />
        <div className="absolute inset-0 bg-[#f1f1f0]/50"></div>

        <div className="relative text-center px-4 uppercase">
          <h4 className="my-10 text-4xl font-marcellus lg:text-5xl">
            Sign Up for our newsletter
          </h4>
          <input
            type="email"
            placeholder="Your Email Address"
            className="border-2 rounded-md text-xl w-full outline-none p-6 mb-5 font-jost py-4 px-2"
          />
          <div
            className="text-3xl mb-4 bg-gray-950 transition-all duration-500 ease-in-out
               md:py-2 md:px-2 text-white py-4 px-2 hover:bg-gray-600"
          >
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
