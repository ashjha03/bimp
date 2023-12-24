import HowWeWork from "@/components/HowWeWork";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";

const Creator = () => {
  return (
    <div>
      <Head>
        <title>BIMP | Join as Creator</title>
      </Head>
      <Navbar />
      <div className="py-10 px-12">
        <h1 className="text-5xl font-bold text-center pb-3">Join as Creator</h1>
        <p className="text-xl text-gray-500 text-center">
          Have good followers, make money through more brand deals
        </p>

        <form
          action=""
          className="max-w-5xl border-2 rounded-xl shadow-lg grid gap-5 mx-auto mt-10 px-12 py-12"
        >
          <div className="input flex items-center justify-between">
            <label className="text-xl pr-4" htmlFor="">
              Full Name :{" "}
            </label>
            <input type="text" className="p-3 rounded-lg border-2 w-2/3" />
          </div>
          <div className="input flex items-center justify-between">
            <label className="text-xl pr-4" htmlFor="">
              Instagram followers :{" "}
            </label>
            <input type="text" className="p-3 rounded-lg border-2 w-2/3" />
          </div>
          <div className="input flex items-center justify-between">
            <label className="text-xl pr-4" htmlFor="">
              Youtube Subscribers :{" "}
            </label>
            <input type="text" className="p-3 rounded-lg border-2 w-2/3" />
          </div>
          <div className="input flex items-center justify-between">
            <label className="text-xl pr-4" htmlFor="">
              User Name :{" "}
            </label>
            <input type="text" className="p-3 rounded-lg border-2 w-2/3" />
          </div>
          <div className="input flex items-center justify-between">
            <label className="text-xl pr-4" htmlFor="">
              State and Country :{" "}
            </label>
            <input type="text" className="p-3 rounded-lg border-2 w-2/3" />
          </div>
          <div className="input flex items-center justify-between">
            <label className="text-xl pr-4" htmlFor="">
              Tagline :{" "}
            </label>
            <input type="text" className="p-3 rounded-lg border-2 w-2/3" />
          </div>
          <div className="input flex items-center justify-between">
            <label className="text-xl pr-4" htmlFor="">
              Price per Reel :{" "}
            </label>
            <input type="text" className="p-3 rounded-lg border-2 w-2/3" />
          </div>
          <div className="btn text-center px-16">
            <button className="bg-gray-700 hover:bg-gray-900 hover:underline text-white py-3 rounded-lg w-2/3">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="">
        <HowWeWork />
      </div>
    </div>
  );
};

export default Creator;
