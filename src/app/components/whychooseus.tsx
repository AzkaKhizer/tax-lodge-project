import Image from "next/image";

interface HexagonCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

const HexagonCard: React.FC<HexagonCardProps> = ({ icon, title, description, className }) => {
  return (
    <div className={`md:relative md:w-[280px]  md:h-[240px] flex justify-start items-start md:items-center md:justify-center  ${className}`}>
      {/* Background Hexagon Image */}
      <Image
        src="/frame.png" // Replace with your hexagon image path
        alt="Hexagon Frame"
        width={280}
        height={240}
        className="absolute hidden md:block"
      />
      {/* Content Inside the Hexagon */}
      <div className="md:absolute flex md:flex-col  items-center md:text-center md:px-12 m-2 md:m-0  ">
        <div className="w-12 h-12  min-w-12 min-h-12 mb-1 mr-3 border p-2 bg-[#FFAB91] rounded-full flex items-center justify-center">
          <Image src={icon} alt="Icon" width={29} height={29}   />
        </div>
        <h3 className="text-[16px] font-bold text-[#1E1E1E] hidden md:block ">{title}</h3>
        <p className="text-[12px] text-[#1E1E1E]">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const features: HexagonCardProps[] = [
    { icon: "/stamp.png", title: "Registered & Certified Professionals", description: "We are registered tax practitioners with the Australian Tax Practitioners Board, ensuring compliance and accuracy." },
    { icon: "/refund.png", title: "Maximum Tax Refund Guarantee", description: "Our expertise in Australian tax law ensures you receive the highest possible refund legally available." },
    
    { icon: "/tax.png", title: "Hassle-Free Tax Lodgment", description: "We make tax return filing quick and stress-free." },
    { icon: "/expertise.png", title: "Trusted Industry Experience", description: "With years of experience in tax, accounting, and superannuation compliance, we provide expert financial guidance." },
    { icon: "/cloud.png", title: "Strict Data Security Measures", description: "We prioritize online security and implement advanced data protection to safeguard your sensitive information." },
    { icon: "/advice.png", title: "Personalized Support & Advice", description: "Our team offers tailored financial solutions, ensuring each client receives individualized attention." },
    { icon: "/briefcase.png", title: " Professional & Ethical Standards", description: "As IPA and NTAA members, we uphold the highest ethical standards." },
    { icon: "/community.png", title: "Melbourne-Based, Client-Focused", description: "We take pride in serving our local community, building long-term trust-based relationships with our clients." },
  ];

  return (
    <section className="flex flex-col justify-center items-center  md:py-12">
      <h2 className="text-[28px] md:text-[44px] font-bold w-[363px] md:w-[972px] text-center">
        Lodge your Tax Return with Convenience and we will Assure Compliance
      </h2>
      <button className="mt-4 bg-[#FFAB91] text-white px-6 py-2 rounded-full text-lg font-semibold md:font-bold">
        WHY CHOOSE US?
      </button>

      {/* 📌 Hexagon Grid Layout */}
      <div className="flex flex-col md:flex-row   md:flex-wrap justify-start items-start md:justify-center md:items-center mt-2 md:mt-10 ">
        {/* Column 1 */}
        <div className="md:flex md:flex-col md:-mx-[64px]">
          <HexagonCard {...features[0]} />
          <HexagonCard {...features[1]} className="md:-mt-[36px]" />
        </div>

        {/* Column 2 */}
        <div className="md:flex md:items-center">
          <HexagonCard {...features[2]} />
        </div>

        {/* Column 3 */}
        <div className="md:flex md:flex-col md:-mx-[64px]">
          <HexagonCard {...features[3]} />
          <HexagonCard {...features[4]} className="md:-mt-[36px]" />
        </div>

        {/* Column 4 */}
        <div className="md:flex md:items-center ">
          <HexagonCard {...features[5]} />
        </div>

        <div className="md:flex md:flex-col md:-mx-[64px]">
          <HexagonCard {...features[6]} />
          <HexagonCard {...features[7]} className="md:-mt-[36px]" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
