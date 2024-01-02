"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState, useEffect } from "react";

const Creator = () => {
  //   const user = "ashjha03";
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        if (!creator) {
          const res = await fetch(`/api/getCreator?username=ashjha03`);
          const data = await res.json();
          setCreator(data.data[0]);
        }
      } catch (err) {
        console.log("Error: ", err);
      }
    })();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="user-profile p-12 gap-2 max-w-screen-xl mx-auto">
        <div className="profile-box flex items-center gap-4">
          <Image
            src={creator.profileImg}
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
            <h1 className="text-4xl">{creator.name}</h1>
            <h3 className="text-2xl pl-2">@{creator.username}</h3>
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
                <h3 className="text-xl">₹ {creator.reelPrice}</h3>
              </div>
            </div>
            <div className="box border-2 rounded-lg border-pink-700 p-3">
              <div className="flex justify-between">
                <h1 className="text-xl">1 Instagram Reel</h1>
                <h3 className="text-xl">₹ {creator.reelPrice / 2}</h3>
              </div>
            </div>
          </div>

          <div className="chat-btn py-4 flex items-center">
            <p className="text-lg font-bold pr-5">
              Want to offer something else?
            </p>
            <button className="btn bg-pink-700 hover:bg-pink-500 text-white p-4 rounded-lg font-bold">
              Chat with {creator.name}
            </button>
          </div>
        </div>
      </div>
      <div className="pending-orders px-16 py-10">
        <h1 className="text-5xl font-bold">Your Pending Orders</h1>
        <div className="card">
          <table className="shadow-lg rounded-md mt-6 w-full bg-white">
            <thead>
              <tr className="border-b-2 border-gray-700">
                <th className="text-left p-4 text-blue-900">
                  Reel Description
                </th>
                <th className="w-32 text-center p-4 text-blue-900">
                  Brand Name
                </th>
                <th className="text-right p-4 text-blue-900">Price(Rs.)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left p-4">
                  <span className="font-medium text-blue-900">
                    Apple IPhone 14 Advertisement
                  </span>
                  <br />
                  <span className="text-sm text-gray-500">
                    Covering all features of it, by showing self usage from 1
                    month.
                  </span>
                </td>
                <td className="text-center p-4">Apple</td>
                <td className="text-right p-4"> 25,000.00</td>
              </tr>
              <tr>
                <td className="text-left p-4">
                  <span className="font-medium text-blue-900">
                    Apple IPhone 14 Advertisement
                  </span>
                  <br />
                  <span className="text-sm text-gray-500">
                    Covering all features of it, by showing self usage from 1
                    month.
                  </span>
                </td>
                <td className="text-center p-4">Apple</td>
                <td className="text-right p-4"> 25,000.00</td>
              </tr>
              <tr>
                <td className="text-left p-4">
                  <span className="font-medium text-blue-900">
                    Apple IPhone 14 Advertisement
                  </span>
                  <br />
                  <span className="text-sm text-gray-500">
                    Covering all features of it, by showing self usage from 1
                    month.
                  </span>
                </td>
                <td className="text-center p-4">Apple</td>
                <td className="text-right p-4"> 25,000.00</td>
              </tr>
              <tr>
                <td className="text-left p-4">
                  <span className="font-medium text-blue-900">
                    Apple IPhone 14 Advertisement
                  </span>
                  <br />
                  <span className="text-sm text-gray-500">
                    Covering all features of it, by showing self usage from 1
                    month.
                  </span>
                </td>
                <td className="text-center p-4">Apple</td>
                <td className="text-right p-4"> 25,000.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="user-profile p-12 gap-2 max-w-screen-xl mx-auto">
        <div className="userimg pb-10">
          <Image
            src={creator.coverImg}
            alt="Creator"
            className="w-[53vw] mx-auto rounded-lg"
            height={500}
            width={500}
          />
        </div>
        <div className="profile-box flex items-center gap-4">
          <Image
            src={creator.profileImg}
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
            <h1 className="text-4xl">{creator.name}</h1>
            <h3 className="text-2xl pl-2">@{creator.username}</h3>
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
                <h3 className="text-xl">₹ {creator.reelPrice}</h3>
              </div>
            </div>
            <div className="box border-2 rounded-lg border-pink-700 p-3">
              <div className="flex justify-between">
                <h1 className="text-xl">1 Instagram Reel</h1>
                <h3 className="text-xl">₹ {creator.reelPrice / 2}</h3>
              </div>
            </div>
          </div>

          <div className="chat-btn py-4 flex items-center">
            <p className="text-lg font-bold pr-5">
              Want to offer something else?
            </p>
            <button className="btn bg-pink-700 hover:bg-pink-500 text-white p-4 rounded-lg font-bold">
              Chat with {creator.name}
            </button>
          </div>
        </div>

        <div className="portfolio pb-6">
          <h1 className="text-4xl font-bold pb-5">Portfolio</h1>
          <div className="grid grid-cols-3 gap-4">
            <Image
              src={creator.coverImg}
              alt="Creator"
              className="h-[38vh] mx-auto rounded-xl"
              height={500}
              width={500}
            />
            <Image
              src={creator.profileImg}
              alt="Creator"
              className="h-[38vh] mx-auto rounded-xl"
              height={500}
              width={500}
            />
            <Image
              src={creator.addImg1}
              alt="Creator"
              className="h-[38vh] mx-auto rounded-xl"
              height={500}
              width={500}
            />
            <Image
              src={creator.addImg2}
              alt="Creator"
              className="h-[38vh] mx-auto rounded-xl"
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>
      <div className="pending-orders px-16 py-10">
        <h1 className="text-5xl font-bold">Completed Orders</h1>
        <div className="card">
          <table className="shadow-lg rounded-md mt-6 w-full bg-white">
            <thead>
              <tr className="border-b-2 border-gray-700">
                <th className="text-left p-4 text-blue-900">
                  Reel Description
                </th>
                <th className="w-32 text-center p-4 text-blue-900">
                  Brand Name
                </th>
                <th className="text-right p-4 text-blue-900">Price(Rs.)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left p-4">
                  <span className="font-medium text-blue-900">
                    Apple IPhone 14 Advertisement
                  </span>
                  <br />
                  <span className="text-sm text-gray-500">
                    Covering all features of it, by showing self usage from 1
                    month.
                  </span>
                </td>
                <td className="text-center p-4">Apple</td>
                <td className="text-right p-4"> 25,000.00</td>
              </tr>
              <tr>
                <td className="text-left p-4">
                  <span className="font-medium text-blue-900">
                    Apple IPhone 14 Advertisement
                  </span>
                  <br />
                  <span className="text-sm text-gray-500">
                    Covering all features of it, by showing self usage from 1
                    month.
                  </span>
                </td>
                <td className="text-center p-4">Apple</td>
                <td className="text-right p-4"> 25,000.00</td>
              </tr>
              <tr>
                <td className="text-left p-4">
                  <span className="font-medium text-blue-900">
                    Apple IPhone 14 Advertisement
                  </span>
                  <br />
                  <span className="text-sm text-gray-500">
                    Covering all features of it, by showing self usage from 1
                    month.
                  </span>
                </td>
                <td className="text-center p-4">Apple</td>
                <td className="text-right p-4"> 25,000.00</td>
              </tr>
              <tr>
                <td className="text-left p-4">
                  <span className="font-medium text-blue-900">
                    Apple IPhone 14 Advertisement
                  </span>
                  <br />
                  <span className="text-sm text-gray-500">
                    Covering all features of it, by showing self usage from 1
                    month.
                  </span>
                </td>
                <td className="text-center p-4">Apple</td>
                <td className="text-right p-4"> 25,000.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Creator;
