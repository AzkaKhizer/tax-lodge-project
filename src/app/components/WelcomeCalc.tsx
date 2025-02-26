import Image from "next/image";

const WelcomeSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:mx-5 md:pl-20 md:mr-20 py-12">
      {/* Left - Image */}
      <div className="relative w-full   ">
        <Image
          src="/calculatorgirl.png" // Replace with actual image path
          alt="Using a calculator"
          width={500}
          height={333}
          className="rounded-[20px] shadow-md"
        />
      </div>

      {/* Right - Content */}
      <div className="w-full md:w-1/2    mt-6 md:mt-0">
        <h1 className="text-[50px] text-[#1E1E1E] font-bold mb-2 w-[900px]">Welcome To Pay Calculator</h1>
        <p className="text-[#1E1E1E] text-[16px] mb-2">
          Easily calculate your net income after factoring in tax withheld, 
          superannuation entitlement, HELP debt (if applicable), Medicare levy, 
          and any tax offset entitlement using the tool below.
        </p>

        <ul className="space-y-2 text-gray-700">
          {[
            "Enter your gross income (before tax) in the '$' box.",
            "Select the relevant income period (weekly, monthly, yearly).",
            "Click on the 'Calculate' button.",
          ].map((text, index) => (
            <li key={index} className="flex items-center">
              {/* Custom Tick Icon with Background */}
              <span className="w-6 h-6 flex items-center justify-center bg-[#FFAB91] text-white font-bold rounded-full mr-3">
                ✓
              </span>
              {text}
            </li>
          ))}
        </ul>

        <p className="mt-2 text-[#1E1E1E] text-[16px]">
        The calculator will provide you with an estimate of your net income, which represents the amount you will receive after accounting for all the deductions mentioned above.
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;
