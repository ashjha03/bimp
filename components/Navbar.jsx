import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border border-gray-300 bg-gradient-to-r from-white to-pink-300 px-16 py-4 flex justify-between items-center font-semibold">
      <Link href="/" className="text-4xl">
        Collabstr
      </Link>
      <ul className="flex gap-6">
        <li>Explore</li>
        <li>How it works</li>
        <li>Login</li>
        <li>
          <Link href="/join/Brand"> Join as Brand</Link>
        </li>
        <li>
          <Link href="/join/Creator"> Join as Creator</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
