import React from "react";

const HowWeWork = () => {
  return (
    <div>
      <div className="work py-12 px-20">
        <h1 className="text-4xl font-extralight text-pink-600">How we work?</h1>
        <p className="text-xl p-2">
          Everything you need to run your influencer campaigns and more
        </p>
        <div className="boxes pt-4 grid grid-cols-3 gap-6 px-8">
          <div className="box px-6 py-12 shadow-lg rounded-xl bg-gray-800 text-white">
            <h1 className="text-2xl font-bold">Search Influencers</h1>
            <p className="text-md pt-2">
              Search through thousands of vetted Instagram and YouTube
              influencers.
            </p>
          </div>
          <div className="box px-6 py-12 shadow-lg rounded-xl bg-gray-800 text-white">
            <h1 className="text-2xl font-bold">Purchase Securely</h1>
            <p className="text-md pt-2">
              Safely purchase through Collabstr. We hold your payment until the
              work is completed.
            </p>
          </div>
          <div className="box px-6 py-12 shadow-lg rounded-xl bg-gray-800 text-white">
            <h1 className="text-2xl font-bold">Recieve Quality Content</h1>
            <p className="text-md pt-2">
              Receive your high quality content from influencers directly
              through the platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
