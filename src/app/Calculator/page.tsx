import PayCalculator from "@/app/components/PayCalculator";
import BreadcrumbCalc from "../components/BreadcrumbCalc";
import WelcomeSection from "../components/WelcomeCalc";

export default function Home() {
  return (
    <main className=" pt-28">
        <div>
        <BreadcrumbCalc/>
        <WelcomeSection/>
        <div  className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <PayCalculator />
      </div>
      </div>
    </main>
  );
}
