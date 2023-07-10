import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="bg-white w-full py-16 px-4" id="analytics">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="Laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl py-2 font-bold">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
            odio vitae exercitationem harum enim libero soluta eveniet
            voluptatem officiis sequi, ad, culpa odit veritatis quam.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] my-6 py-3 mx-auto md:mx-0 rounded font-medium">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
