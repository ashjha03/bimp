import Featured from "@/components/Featured";
import HowWeWork from "@/components/HowWeWork";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";

const Brand = () => {
  return (
    <div>
      <Head>
        <title>BIMP | Join as Brand</title>
      </Head>
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
      <form
        action=""
        className="max-w-5xl border-2 rounded-xl shadow-lg grid gap-8 mx-auto mt-10 px-12 py-16"
      >
        <div className="input flex items-center justify-between">
          <label className="text-xl pr-4" htmlFor="">
            Brand Name :{" "}
          </label>
          <input type="text" className="p-3 rounded-lg border-2 w-2/3" />
        </div>
        <div className="input flex items-center justify-between">
          <label className="text-xl pr-4" htmlFor="">
            Minimum Instagram Followers required?{" "}
          </label>
          <input type="text" className="p-3 rounded-lg border-2 w-2/3" />
        </div>
        <div className="input flex items-center justify-between">
          <label className="text-xl pr-4" htmlFor="">
            Minimum Youtube Subscribers Required?{" "}
          </label>
          <input type="text" className="p-3 rounded-lg border-2 w-2/3" />
        </div>
        <div className="input flex items-center justify-between">
          <label className="text-xl pr-4" htmlFor="">
            Company Size :{" "}
          </label>
          <input type="text" className="p-3 rounded-lg border-2 w-2/3" />
        </div>
        <div className="btn text-center px-16">
          <button className="bg-gray-700 hover:bg-gray-900 hover:underline text-white py-3 rounded-lg w-2/3">
            Submit
          </button>
        </div>
      </form>
      <div className="hire">
        <h1 className="text-4xl px-16 pt-16 font-bold">
          Find and hire Best influencer for your brand
        </h1>
        <Featured />
      </div>
      <HowWeWork />
    </div>
  );
};

export default Brand;
