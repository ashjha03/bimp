import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border border-gray-300 bg-gradient-to-r from-white to-pink-300 px-16 py-2 flex justify-between items-center font-semibold">
      <Link href="/" className="text-4xl">
        <h1 className="text-center">BIMP</h1>
        <p className="text-sm">Brand Influencer Marketplace</p>
      </Link>
      <ul className="flex gap-6">
        <li>Explore</li>
        <li>How it works</li>
        <li>Login</li>
        <li>
          <Link href="/join/brand"> Join as Brand</Link>
        </li>
        <li>
          <Link href="/join/creator"> Join as Creator</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
