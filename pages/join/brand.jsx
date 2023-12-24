import Navbar from "@/components/Navbar";
import React from "react";

const Brand = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <h1 className="text-4xl text-center pb-4 font-bold leading-snug">
          The easy way to get <br /> Your Brand Global
        </h1>
        <p className="text-xl text-center text-gray-500">
          Find influencers, run campaigns, and get unique content for your brand
          in seconds
        </p>
      </div>
    </div>
  );
};

export default Brand;
