"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PricingPage from "../PricingPage/page";
import { Search, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white md:bg-[#F2F2F2] absolute inset-x-0 top-0 z-50 px-2 py-8 pr-12 md:pr-10  md:px-6 md:py-7 max-w-screen-2xl mx-auto overflow-x-hidden ">
      <div className="flex justify-between md:justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={61} height={68} className="ml-8" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 ">
          <Link href="/" className="text-black hover:text-[#FE5722] ">Home</Link>
          <Link href="/ServiceDetails" className="text-black hover:text-[#FE5722]">Services</Link>
          <Link href="/business-tax" className="text-black hover:text-[#FE5722]">Business Tax</Link>
          <Link href="/blog" className="text-black hover:text-[#FE5722]">Blog</Link>
          <Link href="/PricingPage" className="text-black hover:text-[#FE5722]">Pricing</Link>
          <Link href="/Calculator" className="text-black hover:text-[#FE5722]">Pay Calculator</Link>
          <Link href="/ContactUs" className="text-black hover:text-[#FE5722]">Contact</Link>
        </nav>

        {/* Search & CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Search className="w-5 h-5 text-black cursor-pointer" />

          <div className="h-6 w-px bg-gray-400"></div>
          <Link href="/get-started">
            <button className="text-orange-500  hover:bg-orange-500 hover:text-white transition font-semibold">
              GET STARTED
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden mt-4 flex flex-col space-y-4 text-black">
          <Link href="/" className="hover:text-[#FE5722] ">Home</Link>
          <Link href="/ServiceDetails" className="hover:text-[#FE5722]">Sevices</Link>
          <Link href="/business-tax" className="hover:text-[#FE5722]">Business Tax</Link>
          <Link href="/blog" className="hover:text-[#FE5722]">Blog</Link>
          <Link href="/PricingPage" className="hover:text-[#FE5722]">Pricing</Link>
          <Link href="/Calculator" className="hover:text-[#FE5722]">Pay Calculator</Link>
          <Link href="/ContactUs" className="hover:text-[#FE5722]">Contact</Link>

          {/* Search & CTA in Mobile Menu */}
          <div className="flex items-center space-x-4 mt-4">
            <Search className="w-5 h-5 text-black cursor-pointer" />
            <div className="h-6 w-px bg-gray-400"></div>
            <Link href="/get-started">
              <button className="text-[#FE5722] font-bold ">
                GET STARTED
              </button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
