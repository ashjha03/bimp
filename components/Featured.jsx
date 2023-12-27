import { useEffect, useState } from "react";
import ProfileBox from "./profile/ProfileBox";

const Featured = ({ title, description }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    (async () => {
      try {
        if (!user) {
          const res = await fetch("/api/getCreator?username=ashjha03");
          const data = await res.json();
          setUser(data.user);
        }
      } catch (err) {
        console.log("Error: ", err);
      }
    })();
  }, []);
  return (
    <div className="py-4 px-20">
      <div className="heading py-4">
        <h1 className="text-3xl font-bold text-pink-600">{title}</h1>
        <p className="text-lg font-serif pl-2">{description}</p>
      </div>
      {user ? (
        <div className="profiles grid grid-cols-4 gap-4 py-4">
          <ProfileBox user={user} />
          <ProfileBox user={user} />
          <ProfileBox user={user} />
          <ProfileBox user={user} />
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default Featured;
