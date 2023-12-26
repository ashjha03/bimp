import HowWeWork from "@/components/HowWeWork";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const Creators = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: e.target.name.value,
      instagramFollowers: e.target.instagramFollowers.value,
      youtubeSubscribers: e.target.youtubeSubscribers.value,
      username: e.target.username.value,
      address: e.target.address.value,
      tagline: e.target.tagline.value,
      reelPrice: e.target.reelPrice.value,
      profileImg: e.target.profileImg.value,
      coverImg: e.target.coverImg.value,
      addImg1: e.target.addImg1.value,
      addImg2: e.target.addImg2.value,
    };

    fetch("/api/addCreator", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };
  return (
    <div>
      <Head>
        <title>BIMP || Join as Creator</title>
      </Head>
      <Navbar />
      <div className="py-10 px-12">
        <h1 className="text-5xl font-bold text-center pb-3">Join as Creator</h1>
        <p className="text-xl text-gray-500 text-center">
          Have good followers, make money through more brand deals
        </p>

        <form
          name="creatorForm"
          onSubmit={handleSubmit}
          className="max-w-5xl border-2 rounded-xl shadow-lg grid gap-5 mx-auto mt-10 px-12 py-12"
        >
          <div className="input flex items-center justify-between">
            <label className="text-xl pr-4" htmlFor="">
              Full Name :{" "}
            </label>
            <input
              type="text"
              name="name"
              className="p-3 rounded-lg border-2 w-2/3"
            />
          </div>
          <div className="input flex items-center justify-between">
            <label className="text-xl pr-4" htmlFor="">
              Instagram followers :{" "}
            </label>
            <input
              type="text"
              name="instagramFollowers"
              className="p-3 rounded-lg border-2 w-2/3"
            />
          </div>
          <div className="input flex items-center justify-between">
            <label className="text-xl pr-4" htmlFor="">
              Youtube Subscribers :{" "}
            </label>
            <input
              type="text"
              name="youtubeSubscribers"
              className="p-3 rounded-lg border-2 w-2/3"
            />
          </div>
          <div className="input flex items-center justify-between">
            <label className="text-xl pr-4" htmlFor="">
              User Name :{" "}
            </label>
            <input
              type="text"
              name="username"
              className="p-3 rounded-lg border-2 w-2/3"
            />
          </div>
          <div className="input flex items-center justify-between">
            <label className="text-xl pr-4" htmlFor="">
              State and Country :{" "}
            </label>
            <input
              type="text"
              name="address"
              className="p-3 rounded-lg border-2 w-2/3"
            />
          </div>
          <div className="input flex items-center justify-between">
            <label className="text-xl pr-4" htmlFor="">
              Tagline :{" "}
            </label>
            <input
              type="text"
              name="tagline"
              className="p-3 rounded-lg border-2 w-2/3"
            />
          </div>
          <div className="input flex items-center justify-between">
            <label className="text-xl pr-4" htmlFor="">
              Price per Reel :{" "}
            </label>
            <input
              type="text"
              name="reelPrice"
              className="p-3 rounded-lg border-2 w-2/3"
            />
          </div>
          <div className="input flex items-center justify-between">
            <label className="text-xl pr-4" htmlFor="">
              Profile Image :
            </label>
            <input
              type="text"
              name="profileImg"
              className="p-3 rounded-lg border-2 w-2/3"
            />
          </div>
          <div className="input flex items-center justify-between">
            <label className="text-xl pr-4" htmlFor="">
              Cover Image :
            </label>
            <input
              type="text"
              name="coverImg"
              className="p-3 rounded-lg border-2 w-2/3"
            />
          </div>
          <div className="input flex items-center justify-between">
            <label className="text-xl pr-4" htmlFor="">
              Additional Image :
            </label>
            <div className="w-2/3 grid gap-2">
              <input
                type="text"
                name="addImg1"
                className="p-3 rounded-lg border-2"
              />
              <input
                type="text"
                name="addImg2"
                className="p-3 rounded-lg border-2"
              />
            </div>
          </div>
          <div className="btn text-center px-16">
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-900 hover:underline text-white py-3 rounded-lg w-2/3"
            >
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

export default Creators;
