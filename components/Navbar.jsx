import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border border-gray-300 px-16 py-4 flex justify-between items-center font-semibold">
      <Link href="/" className="text-4xl">
        Collabstr
      </Link>
      <ul className="flex gap-6">
        <li>Explore</li>
        <li>How it works</li>
        <li>Login</li>
        <li>Join as Brand</li>
        <li>Join as Creator</li>
      </ul>
    </nav>
  );
};

export default Navbar;
