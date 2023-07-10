const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4" id="newsletter">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-3">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">
            Want tips & tricks to optimize your flow
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="py-4">
          <div className="flex flex-col sm:flex-row w-full items-center justify-between gap-4">
            <input
              className="p-3 w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="text-black bg-[#00df9a] w-[200px] my-6 py-3 mx-auto md:mx-0 rounded font-medium">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of tour data. Read our{" "}
            <span className="text-[#00df9a]">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
