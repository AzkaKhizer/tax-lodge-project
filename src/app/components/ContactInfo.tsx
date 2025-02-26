import { Phone, MapPin, Mail } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Call Us */}
      <div className="bg-[#FFAB914F] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
        <div className="flex ">
        <div className="bg-[#FF8B66] w-[80px] h-[80px] p-3 rounded-lg mt-4 mr-4 flex  justify-center items-center">
<Phone className="text-black  w-6 h-6" />
</div>
       
        <div className="flex flex-col justify-start items-start">
        <p className="text-[#1E1E1E] mt-6">24/7 Service</p>
        <h3 className="text-[22px] font-semibold ">Call Us Today</h3>
        </div>
        </div>
        <hr className="w-full my-3 border-white pt-4 mt-8" />
        <a href="#" className="text-[#1E1E1E]  hover:text-orange-500">
        +(03) 8904 8602
        </a>
        <a href="#" className="text-[#1E1E1E]  hover:text-orange-500">
        +(03) 8904 8602
        </a>
      </div>

      {/* Our Location */}
      <div className="bg-[#FFAB914F] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
        <div className="flex ">
        <div className="bg-[#FF8B66] w-[80px] h-[80px] p-3 rounded-lg mt-4 mr-4 flex  justify-center items-center">
          <MapPin className="text-black w-6 h-6" />
        </div>
        <div className="flex flex-col justify-start items-start">
        <p className="text-[#1E1E1E] mt-6">Address</p>
        <h3 className="text-[22px] font-semibold ">Our Location</h3>
        </div>
        </div>
        <hr className="w-full my-3 border-white pt-4 mt-8" />
        <a href="mailto:support@toxiqdeonline.com.au" className="text-[#1E1E1E]  hover:text-orange-500 ">
        Level 2, 311 Lonsdale Street, Dandenong, Victoria 3175, Australia
        </a>
      </div>
      

      {/* Mail Information */}
      <div className="bg-[#FFAB914F] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
        <div className="flex mt-4">
        <div className="bg-[#FF8B66] p-3 rounded-lg mr-4 w-[80px] h-[80px] flex justify-center items-center ">
          <Mail className="text-black w-6 h-6" />
        </div>
        <div className="flex flex-col justify-start items-start">
        <p className="text-[#1E1E1E] mt-3">Dropline</p>
        <h3 className="text-[22px] font-semibold ">Mail Information</h3>
        </div>
        </div>
        <hr className="w-full my-3 border-white pt-4 mt-8" />
        <a href="mailto:support@toxiqdeonline.com.au" className="text-[#1E1E1E]  hover:text-orange-500">
          support@toxiqdeonline.com.au
        </a>
      </div>
    </section>
  );
};

export default ContactInfo;
