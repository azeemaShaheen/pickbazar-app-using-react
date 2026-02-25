import React from "react";
import Herobg from "../../assets/herobg.webp";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden pt-20">
      {/* Background */}
      <img
        src={Herobg}
        alt="Hero Background"
        className="absolute inset-0 h-full w-full object-cover object-center z-0"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-5xl flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-800">
          Groceries Delivered in 90 Minute
        </h1>

        <p className="mt-4 text-gray-600">
          Get your healthy foods & snacks delivered at your doorsteps all day everyday
        </p>

        {/* Search */}
        <div className="mt-10 flex w-full justify-center">
          <div className="flex w-full max-w-3xl">
            <input
              type="text"
              placeholder="Search your products from here"
              className="flex-1 px-5 py-4 border border-gray-200 rounded-l-md focus:outline-none bg-white"
            />
            <button className="bg-[#0B9376] text-white px-10 py-4 rounded-r-md font-medium">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;