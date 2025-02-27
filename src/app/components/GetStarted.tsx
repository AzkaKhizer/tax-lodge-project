export default function TaxReturnSection() {
    return (
      <section className="relative bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/calcbg.png')" }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-xl text-center flex justify-center items-center flex-col w-full mx-auto  py-16 px-6 md:px-12">
          <h2 className="text-2xl md:text-[35px] font-semibold ">
            Lodge your personal tax return conveniently by clicking{" "}
            <span className="text-orange-500 font-bold">"Get Started"</span>
          </h2>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-[18px] text-white font-bold py-4 px-10 rounded-full shadow-md transition">
            GET STARTED
          </button>
          <p className="mt-4 text-[25px]  w-[1110px] text-center">
            Our platform is easy-to-use and tax returns will be reviewed and lodged by our qualified tax professionals.We guarantee maximum tax refund.
          </p>
        </div>
      </section>
    );
  }
  