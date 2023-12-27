import { useEffect, useState } from "react";
import ProfileBox from "./profile/ProfileBox";

const Featured = ({ title, description }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        if (!users.length) {
          const res = await fetch("/api/getAllCreators");
          const data = await res.json();
          setUsers(data.data);
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
      <div className="profiles grid grid-cols-4 gap-4 py-4">
        {users.length ? (
          users.map((user) => {
            return <ProfileBox key={user._id} user={user} />;
          })
        ) : (
          <h1>Loading ...</h1>
        )}
      </div>
    </div>
  );
};

export default Featured;
