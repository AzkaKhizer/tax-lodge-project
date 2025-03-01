import BreadcrumbTaxReturn from "../components/BCTaxReturn";
import OnlineTax from "../components/OnlineTax";
import TaxLodgeProcess from "../components/taxlodge";
import TaxRefundSection from "../components/TaxPic";


export default function OnlineTaxReturn() {
    return (
      <div className=" mt-28">
       
        <BreadcrumbTaxReturn/>
        <div className=" flex justify-center items-center text-center mt-10">
        <h1 className="text-[44px] font-semibold  mb-6 w-[731px] ">Lodge Your Online Tax Return with assistance of a Tax Accountant</h1>
        </div>
        <OnlineTax/>
        <TaxLodgeProcess/>
        <TaxRefundSection/>
       
      </div>
    );
  }
  