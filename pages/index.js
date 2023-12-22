import Featured from "@/components/Featured";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="">
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
}
