"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-white opacity-90 shadow-md lg:mt-[-30px]">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* <!-- Logo --> */}
            <div className="text-2xl font-bold text-[#5BB5A2] ">
              <Link href="/">banquee.</Link>
            </div>

            {/* <!-- Navigation Links --> */}
            <nav className="hidden md:flex space-x-6">
              <Link
                href="/features"
                className="text-black font-semibold hover:text-gray-600"
              >
                Features
              </Link>
              <Link
                href="/compare"
                className="text-black font-semibold hover:text-gray-600"
              >
                Compare
              </Link>
              <Link
                href="/support"
                className="text-black font-semibold hover:text-gray-600"
              >
                Support
              </Link>
              <Link
                href="/blog"
                className="text-black font-semibold hover:text-gray-600"
              >
                Blog
              </Link>
            </nav>

            {/* <!-- Buttons --> */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-[#5BB5A2] font-semibold hover:text-gray-600"
              >
                Login
              </a>
              <a
                href="#"
                className="bg-[#5BB5A2] text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Open Account
              </a>
            </div>

            {/* <!-- Mobile Menu Button --> */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* <!-- Mobile Menu --> */}
          {isOpen && (
            <div className="md:hidden mt-4">
              <Link
                href="/features"
                className="block text-[#5BB5A2] font-medium hover:text-gray-600 py-2"
              >
                Features
              </Link>
              <Link
                href="/compare"
                className="block text-[#5BB5A2] font-medium hover:text-gray-600 py-2"
              >
                Compare
              </Link>
              <Link
                href="/support"
                className="block text-[#5BB5A2] font-medium hover:text-gray-600 py-2"
              >
                Support
              </Link>
              <Link
                href="/blog"
                className="block text-[#5BB5A2] font-medium hover:text-gray-600 py-2"
              >
                Blog
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
