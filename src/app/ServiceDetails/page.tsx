import BreadcrumbService from "../components/BCService";
import TaxServices from "../components/Service";
import HeroSection from "../components/TaxSolution";

export default function ServiceDetails() {
    return (
      <div className=" mt-28">
        
       <BreadcrumbService/>
       <TaxServices/>
       <HeroSection/>
      </div>
    );
  }