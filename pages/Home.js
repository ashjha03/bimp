import Featured from "@/components/Featured";
import HowWeWork from "@/components/HowWeWork";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>BIMP | BRAND INFLUENCER MARKETPLACE</title>
      </Head>
      <Navbar />
      <main className="py-24 bg-gradient-to-r from-white to-pink-100">
        <h1 className="text-5xl text-center font-bold text-pink-500">
          Influencer Marketing Made Easy
        </h1>
        <p className="text-xl text-center pt-4 max-w-2xl mx-auto text-gray-500">
          Discover influential personalities, execute marketing campaigns, and
          generate distinctive content for your brand effortlessly
        </p>
      </main>
      <Featured
        title="Featured Profiles"
        description="Hire top influencers across all platforms"
      />
      <Featured
        title="Instagram"
        description="Hire top influencers from Instagram"
      />
      <Featured
        title="Youtube"
        description="Hire top influencers from Youtube"
      />
      <hr />
      <HowWeWork />
    </div>
  );
};

export default Home;
