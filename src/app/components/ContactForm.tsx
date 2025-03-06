"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";

interface FormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>(); // ✅ Fix: Type-safe form inputs

  const [status, setStatus] = useState<string>("");

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setStatus("Submitting...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        reset(); // Clear form
      } else {
        setStatus("❌ Error sending message. Try again.");
      }
    } catch (error) {
      console.error("❌ Network error:", error);
      setStatus("⚠️ Network error. Try again.");
    }
  };

  return (
    <section className="  mx-auto px-6 md:px-4 py-12 flex flex-col lg:flex-row items-center gap-10 mt-4">
      {/* Left - Map */}
      <div className=" w-full flex justify-center">
        <Image
          src="/map1.png"
          alt="Map"
          width={517}
          height={600}
          className="rounded-lg shadow-lg md:h-[600px]"
        />
      </div>

      {/* Right - Form */}
      <div className=" w-full">
        <button className="bg-[#FF8B66] text-white px-4 py-2 rounded-[10px] font-semibold">
          CONTACT US
        </button>
        <h2 className="text-[32px] md:text-[38px] font-bold mt-1 md:w-[578px]">
          Let&apos;s Talk About Your Taxes
        </h2>
        <p className="text-gray-600 mt-2 text-sm">
          Your success starts with a conversation! We believe informed decisions lead to better financial outcomes. Our team is here to guide you through tax lodgment, accounting, and business advisory with clarity and confidence.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <input {...register("firstName", { required: true })} type="text" placeholder="First Name *" className="border p-3 rounded-[10px] w-full" />
            {errors.firstName && <p className="text-red-500 text-xs">First name is required.</p>}
          </div>

          <div className="flex flex-col">
            <input {...register("lastName", { required: true })} type="text" placeholder="Last Name *" className="border p-3 rounded-[10px] w-full" />
            {errors.lastName && <p className="text-red-500 text-xs">Last name is required.</p>}
          </div>

          <div className="flex flex-col col-span-1">
            <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} type="email" placeholder="Email Address *" className="border p-3 rounded-[10px] w-full" />
            {errors.email && <p className="text-red-500 text-xs">Valid email is required.</p>}
          </div>

          <div className="flex flex-col col-span-1">
            <input {...register("phone", { required: true })} type="text" placeholder="Phone Number *" className="border p-3 rounded-[10px] w-full" />
            {errors.phone && <p className="text-red-500 text-xs">Phone number is required.</p>}
          </div>

          <div className="flex flex-col col-span-1 sm:col-span-2">
            <input {...register("subject", { required: true })} type="text" placeholder="Subject *" className="border p-3 rounded-[10px] w-full" />
            {errors.subject && <p className="text-red-500 text-xs">Subject is required.</p>}
          </div>

          <div className="flex flex-col col-span-1 sm:col-span-2">
            <textarea {...register("message", { required: true })} placeholder="How can we help you? *" rows={4} className="border p-3 rounded-[10px] w-full"></textarea>
            {errors.message && <p className="text-red-500 text-xs">Message is required.</p>}
          </div>

          <button type="submit" className="bg-[#FF8B66] text-white px-2 py-3 rounded-[10px] font-semibold col-span-1 hover:bg-orange-500">
            SEND NOW
          </button>
        </form>

        {/* Status Message */}
        {status && <p className="mt-2 text-sm text-gray-700">{status}</p>}
      </div>
    </section>
  );
};

export default ContactForm;
