"use client";
import { useState } from "react";

type CalculationResult = {
  gross: number;
  superAmount: number;
  tax: number;
  medicareLevy: number;
  helpDebtAmount: number;
  netIncome: number;
};

export default function PayCalculator() {
  const [income, setIncome] = useState<number>(0);
  const [period, setPeriod] = useState<"annually" | "monthly" | "fortnightly" | "weekly">("annually");
  const [includeSuper, setIncludeSuper] = useState<boolean>(false);
  const [includeHelpDebt, setIncludeHelpDebt] = useState<boolean>(false);
  const [isNonResident, setIsNonResident] = useState<boolean>(false);
  const [result, setResult] = useState<CalculationResult | null>(null);

  // Function to calculate tax and deductions
  const calculateTax = () => {
    let annualIncome = income;

    // Convert income to annual amount
    if (period === "monthly") annualIncome *= 12;
    else if (period === "fortnightly") annualIncome *= 26;
    else if (period === "weekly") annualIncome *= 52;

    let superRate = includeSuper ? 0.105 : 0; // Superannuation 10.5%
    let superAmount = annualIncome * superRate;

    let tax = 0;
    if (!isNonResident) {
      // ✅ **Fixed Australian Tax Brackets**
      if (annualIncome > 180000) tax = (annualIncome - 180000) * 0.45 + 51667;
      else if (annualIncome > 120000) tax = (annualIncome - 120000) * 0.37 + 29467;
      else if (annualIncome > 45000) tax = (annualIncome - 45000) * 0.325 + 5092;
      else if (annualIncome > 18200) tax = (annualIncome - 18200) * 0.19;
    } else {
      // ✅ **Fixed Non-Resident Tax Brackets**
      if (annualIncome > 180000) tax = (annualIncome - 180000) * 0.45 + 61200;
      else if (annualIncome > 120000) tax = (annualIncome - 120000) * 0.37 + 31200;
      else if (annualIncome > 45000) tax = (annualIncome - 45000) * 0.325 + 14625;
      else tax = annualIncome * 0.325; // No tax-free threshold
    }

    let medicareLevy = isNonResident ? 0 : annualIncome * 0.02; // 2% Medicare Levy for residents
    let helpDebtAmount = includeHelpDebt ? annualIncome * 0.05 : 0; // 5% HELP Debt repayment

    let netIncome = annualIncome - (tax + medicareLevy + helpDebtAmount);

    setResult({
      gross: annualIncome,
      superAmount,
      tax,
      medicareLevy,
      helpDebtAmount,
      netIncome,
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Welcome To Pay Calculator</h1>
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <label className="block text-lg font-semibold">Gross Income (Before Tax)</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(parseFloat(e.target.value) || 0)}
          className="w-full p-2 border rounded mt-2"
        />

        {/* Period Selection */}
        <div className="flex justify-between mt-4">
          {["annually", "monthly", "fortnightly", "weekly"].map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p as any)}
              className={`px-4 py-2 rounded ${period === p ? "bg-orange-500 text-white" : "bg-gray-300"}`}
            >
              {p.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Toggle Options */}
        <div className="mt-4">
          <label className="block">Includes Superannuation?</label>
          <button className={`px-4 py-2 rounded ${includeSuper ? "bg-orange-500 text-white" : "bg-gray-300"}`} onClick={() => setIncludeSuper(!includeSuper)}>
            {includeSuper ? "YES" : "NO"}
          </button>
        </div>

        <div className="mt-2">
          <label className="block">Includes HELP Debt?</label>
          <button className={`px-4 py-2 rounded ${includeHelpDebt ? "bg-orange-500 text-white" : "bg-gray-300"}`} onClick={() => setIncludeHelpDebt(!includeHelpDebt)}>
            {includeHelpDebt ? "YES" : "NO"}
          </button>
        </div>

        <div className="mt-2">
          <label className="block">Non-Resident?</label>
          <button className={`px-4 py-2 rounded ${isNonResident ? "bg-orange-500 text-white" : "bg-gray-300"}`} onClick={() => setIsNonResident(!isNonResident)}>
            {isNonResident ? "YES" : "NO"}
          </button>
        </div>

        {/* Calculate Button */}
        <button onClick={calculateTax} className="mt-4 px-6 py-2 bg-orange-500 text-white rounded">
          CALCULATE
        </button>
      </div>

      {/* Results */}
      {result && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <h3 className="text-lg font-bold">Calculation Result</h3>
          <table className="w-full border-collapse border mt-2">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Year</th>
                <th className="border p-2">Annually</th>
                <th className="border p-2">Monthly</th>
                <th className="border p-2">Fortnightly</th>
                <th className="border p-2">Weekly</th>
              </tr>
            </thead>
            <tbody>
              {["gross", "superAmount", "tax", "medicareLevy", "helpDebtAmount", "netIncome"].map((key) => (
                <tr key={key}>
                  <td className="border p-2 capitalize">{key.replace("Amount", "").replace(/([A-Z])/g, " $1")}</td>
                  {[1, 12, 26, 52].map((divider, i) => (
                    <td key={i} className="border p-2">${(result[key as keyof CalculationResult] / divider).toFixed(2)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
