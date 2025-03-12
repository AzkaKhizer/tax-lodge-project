"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Step 1",
    heading: "We Review And Lodge",
    description:
      "Our registered tax practitioners carefully review your submission for accuracy, compliance, and potential tax savings. Once verified, we lodge your tax return with the Australian Taxation Office (ATO) on your behalf.",
    image: "/your-image.png",
  },
  {
    id: 2,
    title: "Step 2",
    heading: "Tax Optimization Strategies",
    description:
      "We analyze your financial details to find ways to optimize tax deductions and maximize your savings.",
    image: "/your-image.png",
  },
  {
    id: 3,
    title: "Step 3",
    heading: "Final Submission & Support",
    description:
      "Once your tax return is submitted, we provide ongoing support to ensure compliance and financial success.",
    image: "/your-image.png",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <motion.div 
      className="flex flex-col md:flex-row items-center justify-center py-10 px-6 gap-10"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Left Side - Step Buttons */}
      <div className="flex md:flex-col gap-3">
        {steps.map((step) => (
          <motion.button
            key={step.id}
            className={`w-12 h-12 flex items-center justify-center text-white font-bold rounded-md text-lg transition ${
              activeStep === step.id ? "bg-[#FE5722]" : "bg-[#FFAB91]"
            }`}
            onClick={() => setActiveStep(step.id)}
            whileHover={{ scale: 1.1 }}
          >
            {step.id}
          </motion.button>
        ))}
      </div>

      {/* Right Side - Content */}
      <motion.div 
        className="bg-white shadow-md rounded-md p-6 max-w-md flex flex-col justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="text-sm font-semibold text-white px-3 py-2 bg-[#FF8B66] rounded-md mb-4">
          BUSINESS AND FINANCE SOLUTION
        </span>
        <h2 className="text-2xl font-bold mt-2 mb-1">{steps[activeStep - 1].heading}</h2>
        <p className="text-gray-600 mt-2">{steps[activeStep - 1].description}</p>
      </motion.div>

      {/* Image */}
      <motion.div 
        className="hidden md:block"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Image
          src="/review.png"
          alt="Step Image"
          width={350}
          height={200}
          className="object-contain"
        />
      </motion.div>
    </motion.div>
  );
}
