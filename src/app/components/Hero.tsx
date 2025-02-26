import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
    <div className='hidden md:block'>
    <div className='flex justify-evenly items-center'>
    <div className="bg-[#F2F2F2] min-h-screen flex items-center ">
      {/* Left Text Section */}
      <div className="mx-auto flex flex-col justify-start items-start w-full max-w-[896px] ml-6">
        <h2 className="md:text-[20px] text-center mt-12 font-semibold text-white border border-[#FE5722] rounded-[8px] bg-[#FE5722] w-[490px] h-[38px] flex items-center justify-center">
          SMART TAX SOLUTIONS FOR FINANCIAL SUCCESS
        </h2>
        <p className="md:text-[50px] font-bold mt-4">
          Effortless Tax Solutions & Trusted Financial Guidance.
        </p>
        <p className="text-lg md:text-xl mb-7 w-[740px] mt-6">
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
        <Image src="/Frame1.png" alt="hero background" width={566} height={566} className="absolute top-0 left-0" />

        {/* Man Image Sticking to Frame */}
        <Image
          src="/man.png"
          alt="hero person"
          width={589}
          height={400}
          className="absolute top-32 left-[-60px] w-full h-full object-contain"
        />
      </div>
    </div>
    </div>
    </div>
    <div className='block md:hidden bg-white'>
    

<div className='flex flex-col justify-center items-center '>
<h2 className='text-[40px] mt-24 font-bold text-center p-8'>Welcome To  <span className='text-[#FE5722]'> Tax Lodge Online</span>  </h2>

<Image src="/tlo.png" alt="tlo" width={405} height={243}  className=" w-full h-full object-contain" />

    </div>
    </div>





    </div>
  );
};

export default Hero;
