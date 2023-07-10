import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col items-center justify-center">
        <p className="text-[#00df9a] font-bold p-2 uppercase">
          Growing with digital analytics
        </p>
        <h1 className="font-bold sm:text-5xl md:text-5xl text-4xl md:py-6">
          Grow With Data
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl sm:text-3xl text-lg font-bold">
            Fast, flexible finace for
          </p>
          <Typed
            className="md:text-3xl sm:text-3xl text-lg font-bold pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={120}
            loop
          ></Typed>
        </div>
        <p className="md:text-xl text-lg font-bold text-gray-500 px-4 py-2">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] my-6 py-3 mx-auto rounded text-black font-medium">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
