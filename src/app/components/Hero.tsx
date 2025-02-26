import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div >
      {/* Desktop View */}
      <div className="hidden md:block pt-10">
      <div className=" bg-[#F2F2F2] min-h-screen flex items-center">
        <div className="w-full max-w-[1200px] mx-auto flex justify-between items-center px-6">
          {/* Left Text Section */}
          <div className="max-w-[550px]">
            <h2 className="text-[20px] font-semibold text-white border border-[#FE5722] rounded-[8px] bg-[#FE5722] px-4 py-2 w-fit">
              SMART TAX SOLUTIONS FOR FINANCIAL SUCCESS
            </h2>
            <h1 className="text-[50px] font-bold mt-4 leading-tight">
              Effortless Tax Solutions & Trusted Financial Guidance.
            </h1>
            <p className="text-lg mt-6">
              We provide expert tax and accounting services designed to make tax lodgment
              stress-free, ensuring individuals and businesses stay compliant while maximizing
              their financial benefits.
            </p>
            <button className="bg-[#FE5722] mt-6 text-white font-semibold py-3 px-8 rounded-[10px] hover:bg-white hover:text-[#FE5722] transition duration-300">
              GET STARTED
            </button>
          </div>

          {/* Right Image Section */}
          <div className="relative w-[566px] h-[650px]">
            {/* Background Frame */}
            <Image
              src="/Frame1.png"
              alt="hero background"
              width={566}
              height={650}
              className="absolute top-0 left-0"
            />

            {/* Man Image Properly Positioned */}
            <Image
              src="/man.png"
              alt="hero person"
              width={500}
              height={573}
               objectFit="cover"
               
              className="absolute  inset-0 top-[150px] left-[-20px] object-fill w-full h-full"
            />
          </div>
        </div>
      </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden bg-white">
        <div className="flex flex-col justify-center items-center text-center px-6">
          <h2 className="text-[40px] mt-24 font-bold">
            Welcome To <span className="text-[#FE5722]">Tax Lodge Online</span>
          </h2>
          <Image
            src="/tlo.png"
            alt="tlo"
            width={405}
            height={243}
            className="w-full h-auto object-contain mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
