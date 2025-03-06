import React from "react";

const services = [
  { title: "TFN Registration", price: "$99", buttonText: "APPLY NOW" },
  { title: "ABN Registration", price: "$59", buttonText: "APPLY NOW" },
  { title: "Business Name", price: "$99", buttonText: "SUBMIT REQUEST" },
  { title: "Pty Ltd Company", price: "$995", buttonText: "SUBMIT REQUEST" },
];

const RegistrationFees = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto  px-4 md:px-2 flex justify-center items-center flex-col">
        <h2 className="text-[32px] md:text-[44px] font-bold mb-10 text-center">Other Registration Services Fees</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-4 md:p-6  rounded-[20px] shadow-2xl border w-[160px] h-[197px] md:w-[260px] md:h-[315px] border-gray-200 flex flex-col justify-center items-center gap-2 md:gap-4"
            >
              <h3 className="text-[18px] md:text-[24px] font-medium text-[#1E1E1E] md:mb-2 text-center">
                {service.title}
              </h3>
              <p className=" text-[32px] md:text-[48px] font-bold text-black md:mt-5">{service.price}</p>
              <button className="mt-1 md:mt-4 bg-[#FF8B66] text-white text-[16px] md:text-[18px] font-semibold px-2 py-1  md:py-2 md:px-6 rounded-[20px] hover:bg-orange-500">
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegistrationFees;
