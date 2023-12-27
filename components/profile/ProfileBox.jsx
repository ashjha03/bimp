import Link from "next/link";
import Image from "next/image";

const ProfileBox = ({ user }) => {
  return (
    <Link
      href={`/creator/${user.username}`}
      className="rounded-xl shadow-xl py-4"
    >
      <Image
        src={user.profileImg}
        alt="Creator"
        className="w-[33vw] h-[33vh] pb-2 rounded-t-xl"
        height={500}
        width={500}
      />{" "}
      <div className="details px-4">
        <h1 className="text-md font-semibold">
          {user.name} <br /> {user.username}
        </h1>
        <h3 className="text-sm">{user.address}</h3>
        <div className="text-md flex justify-between py-1 font-semibold">
          <p>Instagram</p>
          <p>{user.reelPrice}</p>
        </div>
        <p className="text-sm mt-1">{user.tagline}</p>
      </div>
    </Link>
  );
};

export default ProfileBox;
