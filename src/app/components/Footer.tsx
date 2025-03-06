import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#F2F2F2] border-t pt-10 mx-auto overflow-x-hidden">
        <div className="hidden md:block">
      <div className="container mx-auto px-2 md:max-w-[1200px] flex flex-col md:flex-row justify-between items-start space-x-4 gap-10  text-[#1E1E1E]">
        
        {/* Left Section */}
        <div className=" flex items-start ">
          <Image src="/logo.png" alt="Tax Lodge Online" width={50} height={50} className="lg:w-[75px] lg:h-[75px]" />
          <div className="ml-3 mr-4">
            <h2 className="text-lg md:text-2xl  font-bold">Tax Lodge Online</h2>
            <p className="text-sm md:text-sm mt-2 leading-relaxed w-[362px]">
              Based in Melbourne, we provide expert tax lodgment and accounting
              services for individuals and businesses. As registered tax
              practitioners, we prioritize professionalism, security, and client
              trust. Contact us for stress-free tax solutions.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm md:text-lg  font-bold mb-2">Quick Links</h3>
          <ul className="text-sm md:text-sm space-y-1">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Our Services</a></li>
            <li><a href="#" className="hover:underline">Pricing Plan</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Business Tax</a></li>
            <li><a href="#" className="hover:underline">Online Tax Return</a></li>
            <li><a href="#" className="hover:underline">Pay Calculator</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Refund Policy</a></li>
          </ul>
        </div>

        {/* Tax Services */}
        <div>
          <h3 className="text-sm  md:text-lg  font-bold mb-2">Tax Services</h3>
          <ul className="text-sm md:text-sm space-y-1">
            <li><a href="#" className="hover:underline">Online Tax Return</a></li>
            <li><a href="#" className="hover:underline">Personal Income Tax Return</a></li>
            <li><a href="#" className="hover:underline">Australian Tax Back Form</a></li>
            <li><a href="#" className="hover:underline">Sole Trader Tax Return Form</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="pr-4" >
          <h3 className="text-sm md:text-lg  font-bold mb-2">Contact Us</h3>
          <p className="text-sm md:text-sm flex items-start ">
            <Image src="/map.png" alt="map" width={24} height={24}/>
             Level 2, 311 Lonsdale Street,<br />
            Dandenong, Victoria 3175, Australia
          </p>
          <p className="text-sm md:text-sm mt-2 flex">
            <Image src="/phone.png" alt="phone" width={24} height={24}/>(03) 8904 8602</p>
          <p className="text-sm md:text-sm  mt-2 flex gap-1"> <Image src="/mail.png" alt="mail" width={24} height={24}/> <a href="mailto:support@taxlodgeonline.com.au" className="underline hover:underline">support@taxlodgeonline.com.au</a></p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-[#A19C9C] text-sm md:text-sm  py-4 bg-white mt-32">
        Copyright © 2025 Tax Lodge Online
      </div>
      </div>
     <div className="block md:hidden">
        <div className="flex flex-col  justify-center items-center mb-2 pb-4">
     <Image src="/logo.png" alt="Tax Lodge Online" width={50} height={50} />
       <h1 className="text-[16px]   mb-6 mt-4">Tax Lodge Online</h1>
         <ul className="text-[#1E1E1E] text-center pb-3 space-y-3 ">
            <li><a href="#" className="hover:underline mb-4">About Us</a></li>
            <li><a href="#" className="hover:underline">Our Services</a></li>
            <li><a href="#" className="hover:underline">Pricing Plan</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Business Tax</a></li>
            <li><a href="#" className="hover:underline">Online Tax Return</a></li>
            <li><a href="#" className="hover:underline">Pay Calculator</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
     </div>
     <div className="text-center text-[#A19C9C] text-sm md:text-sm lg:text-lg py-4 bg-white mt-2 md:mt-20">
        Copyright © 2025 Tax Lodge Online
      </div>
     </div>




    </footer>
  );
};

export default Footer;
