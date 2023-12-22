import Image from "next/image";
import Link from "next/link";

const Featured = ({ title, description }) => {
  return (
    <div className="py-4 px-20">
      <div className="heading py-4">
        <h1 className="text-3xl font-bold text-pink-600">{title}</h1>
        <p className="text-lg font-serif pl-2">{description}</p>
      </div>
      <div className="profiles grid grid-cols-4 gap-4 py-4">
        <Link href="/ashish" className="profile rounded-xl shadow-lg py-4">
          <Image
            src="/img/profile.png"
            alt="Creator"
            className="w-[33vw] pb-2 rounded-t-xl"
            height={500}
            width={500}
          />
          <div className="details px-4">
            <h1 className="text-md font-semibold">Ashish Jha</h1>
            <h3 className="text-sm">Delhi, India</h3>
            <div className="text-md flex justify-between py-1 font-semibold">
              <p>Instagram</p>
              <p>₹5000</p>
            </div>
            <p className="text-sm mt-1">
              Fashion, Travel & Lifestyle Content Creator
            </p>
          </div>
        </Link>
        <Link href="/ashish" className="profile rounded-xl shadow-lg py-4">
          <Image
            src="/img/profile.png"
            alt="Creator"
            className="w-[33vw] pb-2 rounded-t-xl"
            height={500}
            width={500}
          />
          <div className="details px-4">
            <h1 className="text-md font-semibold">Ashish Jha</h1>
            <h3 className="text-sm">Delhi, India</h3>
            <div className="text-md flex justify-between py-1 font-semibold">
              <p>Instagram</p>
              <p>₹5000</p>
            </div>
            <p className="text-sm mt-1">
              Fashion, Travel & Lifestyle Content Creator
            </p>
          </div>
        </Link>
        <Link href="/ashish" className="profile rounded-xl shadow-lg py-4">
          <Image
            src="/img/profile.png"
            alt="Creator"
            className="w-[33vw] pb-2 rounded-t-xl"
            height={500}
            width={500}
          />
          <div className="details px-4">
            <h1 className="text-md font-semibold">Ashish Jha</h1>
            <h3 className="text-sm">Delhi, India</h3>
            <div className="text-md flex justify-between py-1 font-semibold">
              <p>Instagram</p>
              <p>₹5000</p>
            </div>
            <p className="text-sm mt-1">
              Fashion, Travel & Lifestyle Content Creator
            </p>
          </div>
        </Link>
        <Link href="/ashish" className="profile rounded-xl shadow-lg py-4">
          <Image
            src="/img/profile.png"
            alt="Creator"
            className="w-[33vw] pb-2 rounded-t-xl"
            height={500}
            width={500}
          />
          <div className="details px-4">
            <h1 className="text-md font-semibold">Ashish Jha</h1>
            <h3 className="text-sm">Delhi, India</h3>
            <div className="text-md flex justify-between py-1 font-semibold">
              <p>Instagram</p>
              <p>₹5000</p>
            </div>
            <p className="text-sm mt-1">
              Fashion, Travel & Lifestyle Content Creator
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Featured;
