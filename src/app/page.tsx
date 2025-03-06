
import Hero from "./components/Hero";
import About from "./components/About";
import TaxLodgeProcess from "./components/taxlodge";
import WhyChooseUs from "./components/whychooseus";
import Affiliations from "./components/Affiliations";


export default function Home() {
  return (
    <div className="max-w-screen-4xl mx-auto overflow-x-hidden">
    <div className="bg-[#F2F2F2]  overflow-hidden  relative ">
      <Hero/>
      </div>
      
      <About/>
      <TaxLodgeProcess/>
      <WhyChooseUs/>
      <Affiliations/>

      
    </div>)}