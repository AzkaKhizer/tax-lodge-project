import Image from "next/image";

export default function TaxRefundSection() {
  return (
    <div className=" w-full mb-10 pt-6 ">
        <div className="relative h-[110px] md:h-[231px]">
      {/* Background Image */}
      <Image
        src="/taxpage.png" // Replace with your image path
        alt="Office Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />

      {/* Overlay Content */}
      <div className="relative flex flex-col items-center justify-center bg-[#1E1E1E91] bg-opacity-50 h-full text-center text-white px-6">
        <h2 className="text-[20px] md:text-[55px] font-bold text-white">
          We Guarantee Maximum Tax Refund
        </h2>
       
      </div>
      </div>
      <div className="pb-20">
      <p className="mt-4  text-[#1E1E1E] px-2 md:px-10 text-[10px]  md:text-[14px] ">
          Our starting fee covers wages income excluding any supplementary income such as rental income, 
          cryptocurrencies, investment income, or business income. Extra fees will apply in case of these incomes. 
          Please refer to our Pricing page for further details.
        </p>
        </div>
    </div>
  );
}
