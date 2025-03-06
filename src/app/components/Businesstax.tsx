import Image from "next/image";

export default function Business() {
  return (
    <section className="w-full mb-10 pt-6 ">
      <div className="relative h-[250px] md:h-full sm:w-full sm:min-h-[400px] rounded-r-[200px] overflow-hidden mx-auto">
        {/* Background Image */}
        <Image
          src="/onlinetax.png"
          alt="Office Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center bg-[#741C0059] rounded-r-[200px] bg-opacity-50 text-white px-5 pr-8 sm:px-6">
          <h2 className="text-[18px] md:text-[42px] font-bold text-white pl-2 sm:pl-4">
            Whether you operate as a sole trader, in a partnership, as a company, or through a trust, you can lodge your business tax return online now with assistance of an IPA Tax Accountant.
          </h2>
          <button className="mt-4 sm:mt-6 px-6 sm:px-10 py-2 sm:py-4 w-[150px] sm:w-[200px] bg-[#FE5722] text-[14px] sm:text-[18px] text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition">
            GET STARTED
          </button>
        </div>
      </div>
    </section>
  );
}
