import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";

const page = () => {
  const Router = useRouter();
  const user = Router.query.slug;
  return (
    <div>
      <Navbar />
      <div className="user-profile p-12 gap-2 max-w-screen-xl mx-auto">
        <div className="userimg pb-10">
          <Image
            src="/img/profile.png"
            alt="Creator"
            className="w-[53vw] mx-auto rounded-lg"
            height={500}
            width={500}
          />
        </div>
        <div className="profile-box flex items-center gap-4">
          <Image
            src="/img/profile.png"
            alt="Creator"
            className="h-[100px] w-[100px]"
            style={{
              borderRadius: "100%",
              objectFit: "cover",
            }}
            height={480}
            width={480}
          />
          <span className="">
            <h1 className="text-4xl">{user}</h1>
            <h3 className="text-2xl pl-2">@{user}</h3>
          </span>
        </div>
        <p className="text-gray-500 pt-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam omnis
          laborum debitis vel quod cupiditate odit obcaecati praesentium,
          pariatur accusamus facilis quos, dolores quaerat recusandae expedita
          eos! Impedit et fugit quas id architecto ad velit animi sed
          exercitationem? Neque, veniam, quo officia maxime, dignissimos qui ea
          asperiores iste quibusdam inventore provident magnam ipsa. Sequi
          dolorem labore maiores iste incidunt nesciunt dicta quibusdam ab?
          Facere delectus tenetur aspernatur iure tempore quidem, ad veritatis
          corporis eum! Excepturi tempore similique mollitia voluptatum
          consequuntur magni amet eveniet officiis eius ipsam ipsa eos natus,
          non quas pariatur commodi rerum sequi, doloremque nihil, vitae nemo
          culpa.
        </p>

        <div className="user-packages py-6">
          <h1 className="text-4xl font-bold">Packages</h1>
          <div className="grid pt-4 grid-cols-2 gap-4">
            <div className="box border-2 rounded-lg border-pink-700 p-3">
              <div className="flex justify-between">
                <h1 className="text-xl">1 Instagram Post Feed Photo</h1>
                <h3 className="text-xl">₹ 7,500</h3>
              </div>
            </div>
            <div className="box border-2 rounded-lg border-pink-700 p-3">
              <div className="flex justify-between">
                <h1 className="text-xl">1 Instagram Reel</h1>
                <h3 className="text-xl">₹ 10,000</h3>
              </div>
            </div>
          </div>

          <div className="chat-btn py-4 flex items-center">
            <p className="text-lg font-bold pr-5">
              Want to offer something else?
            </p>
            <button className="btn bg-pink-700 hover:bg-pink-500 text-white p-4 rounded-lg font-bold">
              Chat with {user}
            </button>
          </div>
        </div>

        <div className="portfolio pb-6">
          <h1 className="text-4xl font-bold pb-5">Portfolio</h1>
          <div className="grid grid-cols-4 gap-4">
            <Image
              src="/img/profile.png"
              alt="Creator"
              className="w-[53vw] mx-auto rounded-xl"
              height={500}
              width={500}
            />
            <Image
              src="/img/profile.png"
              alt="Creator"
              className="w-[53vw] mx-auto rounded-xl"
              height={500}
              width={500}
            />
            <Image
              src="/img/profile.png"
              alt="Creator"
              className="w-[53vw] mx-auto rounded-xl"
              height={500}
              width={500}
            />
            <Image
              src="/img/profile.png"
              alt="Creator"
              className="w-[53vw] mx-auto rounded-xl"
              height={500}
              width={500}
            />
            <Image
              src="/img/profile.png"
              alt="Creator"
              className="w-[53vw] mx-auto rounded-xl"
              height={500}
              width={500}
            />
            <Image
              src="/img/profile.png"
              alt="Creator"
              className="w-[53vw] mx-auto rounded-xl"
              height={500}
              width={500}
            />
            <Image
              src="/img/profile.png"
              alt="Creator"
              className="w-[53vw] mx-auto rounded-xl"
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
