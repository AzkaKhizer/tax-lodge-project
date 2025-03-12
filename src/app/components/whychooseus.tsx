'use client';
import { motion } from 'framer-motion';
import Image from "next/image";

interface HexagonCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

const HexagonCard: React.FC<HexagonCardProps> = ({ icon, title, description, className }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`md:relative md:w-[280px] md:h-[240px] flex justify-start items-start md:items-center md:justify-center ${className}`}
    >
      <Image
        src="/frame.png"
        alt="Hexagon Frame"
        width={280}
        height={240}
        className="absolute hidden md:block"
      />
      <div className="md:absolute flex md:flex-col items-center md:text-center md:px-12 m-2 md:m-0">
        <div className="w-12 h-12 min-w-12 min-h-12 mb-1 mr-3 border p-2 bg-[#FFAB91] rounded-full flex items-center justify-center">
          <Image src={icon} alt="Icon" width={29} height={29} />
        </div>
        <h3 className="text-[16px] font-bold text-[#1E1E1E] hidden md:block">{title}</h3>
        <p className="text-[12px] text-[#1E1E1E]">{description}</p>
      </div>
    </motion.div>
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
    { icon: "/briefcase.png", title: "Professional & Ethical Standards", description: "As IPA and NTAA members, we uphold the highest ethical standards." },
    { icon: "/community.png", title: "Melbourne-Based, Client-Focused", description: "We take pride in serving our local community, building long-term trust-based relationships with our clients." },
  ];

  return (
    <section className="flex flex-col justify-center items-center md:py-12">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-[28px] md:text-[44px] font-bold w-[363px] md:w-[972px] text-center"
      >
        Lodge your Tax Return with Convenience and we will Assure Compliance
      </motion.h2>
      <motion.button 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="mt-4 bg-[#FFAB91] text-white px-6 py-2 rounded-full text-lg font-semibold md:font-bold"
      >
        WHY CHOOSE US?
      </motion.button>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-start items-start md:justify-center md:items-center mt-2 md:mt-10">
        <div className="md:flex md:flex-col md:-mx-[64px]">
          <HexagonCard {...features[0]} />
          <HexagonCard {...features[1]} className="md:-mt-[36px]" />
        </div>
        <div className="md:flex md:items-center">
          <HexagonCard {...features[2]} />
        </div>
        <div className="md:flex md:flex-col md:-mx-[64px]">
          <HexagonCard {...features[3]} />
          <HexagonCard {...features[4]} className="md:-mt-[36px]" />
        </div>
        <div className="md:flex md:items-center">
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
