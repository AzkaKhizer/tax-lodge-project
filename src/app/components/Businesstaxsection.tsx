import Image from "next/image";

export default function BusinessTaxSection() {
  return (
    <section className="container mx-auto px-4 py-12 space-y-16 ">
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center  gap-6">
        <div className="md:w-1/2  ">
          <Image src="/pic1.png" alt="Analysis" width={600} height={340} className="rounded-lg " />
        </div>
        <div className="md:w-1/2">
          <p className="text-[#1E1E1E] text-[16px]">
          Sole traders in Australia are required to lodge a tax return with the Australian Taxation Office (ATO) every year, even if their income is $0. Unlike companies, sole traders are taxed on their net business income, meaning they must report all earnings and deduct any business-related expenses to determine their taxable income. To help reduce tax liability, sole traders can claim various deductions, including costs related to rent, equipment, and travel. Proper tax planning and record-keeping are essential to maximize deductions and ensure compliance with ATO regulations. By accurately reporting income and expenses, sole traders can minimize tax obligations while staying within legal requirements.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-6">
        <div className="md:w-1/2 ">
          <Image src="/pic2.png" alt="Handshake" width={600} height={400} className="rounded-lg" />
        </div>
        <div className="md:w-1/2">
          <p className="text-[#1E1E1E] text-[16px] ">
          Partnerships are a widely used business structure in Australia, where two or more individuals operate a business together with the intention of making a profit. Unlike sole traders, partnerships must lodge a separate tax return every year, detailing their income, deductions, expenses, and profit distribution among partners. However, the partnership itself does not pay tax; instead, each partner reports their share of the profits on their individual tax return. The Australian Taxation Office (ATO) mandates that partnership tax returns be submitted by October 31st for standard tax years. Given the ATO’s strict oversight, non-compliance can lead to penalties or fines. To avoid errors and ensure accurate reporting, seeking professional tax advice is highly recommended.
          </p>
      <ul className="mt-4 space-y-4">
  <li className="flex items-center gap-2 text-[#1E1E1E] ">
    <span className="bg-[#FF8B66] text-white w-6 h-6 flex items-center justify-center rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="16" height="16">
        <path d="M9 16.2l-4.2-4.2-1.4 1.4 5.6 5.6 10.6-10.6-1.4-1.4z" />
      </svg>
    </span>
    The partnership must file a tax return, but partners pay tax individually
  </li>
  <li className="flex items-center gap-2 text-[#1E1E1E] ">
    <span className="bg-[#FF8B66] text-white w-6 h-6 flex items-center justify-center rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="16" height="16">
        <path d="M9 16.2l-4.2-4.2-1.4 1.4 5.6 5.6 10.6-10.6-1.4-1.4z" />
      </svg>
    </span>
    Each partner reports their share of income and deductions
  </li>
  <li className="flex items-center gap-2 text-[#1E1E1E] ">
    <span className="bg-[#FF8B66] text-white w-6 h-6 flex items-center justify-center rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="16" height="16">
        <path d="M9 16.2l-4.2-4.2-1.4 1.4 5.6 5.6 10.6-10.6-1.4-1.4z" />
      </svg>
    </span>
    Timely and accurate lodgment helps avoid penalties
  </li>
</ul>


        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="md:w-1/2">
          <Image src="/pic3.png" alt="Meeting" width={600} height={400} className="rounded-lg" />
        </div>
        <div className="md:w-1/2 ">
          <p className="text-[#1E1E1E] text-[16px] ">
          Filing your company tax return online with the Australian Taxation Office (ATO) is a fast, convenient, and stress-free solution for businesses. Our secure online portal allows you to submit your tax return anytime, from anywhere, eliminating the hassle of paper forms and long queues. Online lodgment ensures your business stays compliant with tax laws and regulations, helping you avoid penalties and fines. Additionally, you can maximize tax savings and deductions, while also receiving potential refunds much faster. With a reliable, user-friendly platform, managing your company’s tax obligations has never been easier.
          </p>
          <ul className="mt-4 space-y-4">
  <li className="flex items-center gap-2 text-[#1E1E1E] ">
    <span className="bg-[#FF8B66] text-white w-6 h-6 flex items-center justify-center rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="16" height="16">
        <path d="M9 16.2l-4.2-4.2-1.4 1.4 5.6 5.6 10.6-10.6-1.4-1.4z" />
      </svg>
    </span>
    Protects your data with top-tier encryption
  </li>
  <li className="flex items-center gap-2 text-[#1E1E1E] ">
    <span className="bg-[#FF8B66] text-white w-6 h-6 flex items-center justify-center rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="16" height="16">
        <path d="M9 16.2l-4.2-4.2-1.4 1.4 5.6 5.6 10.6-10.6-1.4-1.4z" />
      </svg>
    </span>
    File your return anytime, from anywhere
  </li>
  <li className="flex items-center gap-2 text-[#1E1E1E] ">
    <span className="bg-[#FF8B66] text-white w-6 h-6 flex items-center justify-center rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="16" height="16">
        <path d="M9 16.2l-4.2-4.2-1.4 1.4 5.6 5.6 10.6-10.6-1.4-1.4z" />
      </svg>
    </span>
    Stay updated with ATO regulations & avoid penalties
  </li>
  <li className="flex items-center gap-2 text-[#1E1E1E] ">
    <span className="bg-[#FF8B66] text-white w-6 h-6 flex items-center justify-center rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="16" height="16">
        <path d="M9 16.2l-4.2-4.2-1.4 1.4 5.6 5.6 10.6-10.6-1.4-1.4z" />
      </svg>
    </span>
    Claim deductions and get refunds faster
  </li>
 
</ul>

        </div>
      </div>

      {/* Section 4 */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-6">
        <div className="md:w-1/2">
          <Image src="/pic4.png" alt="Teamwork" width={600} height={400} className="rounded-lg" />
        </div>
        <div className="md:w-1/2  ">
          <p className="text-[#1E1E1E] text-[16px]">
           A trust tax return is essential for maintaining compliance and ensuring tax efficiency. Trusts are widely used for wealth management, asset protection, and tax planning, offering a structured way to distribute income among beneficiaries. Since trusts are taxed separately from their beneficiaries, a tax return must be lodged annually to report income, deductions, expenses, and distributions. In most cases, trusts distribute all profits to beneficiaries to minimize tax liabilities and avoid the highest tax rates. Properly managing a trust tax return requires careful planning and expert guidance to ensure compliance with Australian Taxation Office (ATO) regulations.
          </p>
          <ul className="mt-4 space-y-4">
  <li className="flex items-center gap-2 text-[#1E1E1E] ">
    <span className="bg-[#FF8B66] text-white w-6 h-6 flex items-center justify-center rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="16" height="16">
        <path d="M9 16.2l-4.2-4.2-1.4 1.4 5.6 5.6 10.6-10.6-1.4-1.4z" />
      </svg>
    </span>
    Minimize tax liabilities through strategic income distribution
  </li>
  <li className="flex items-center gap-2 text-[#1E1E1E]">
    <span className="bg-[#FF8B66] text-white w-6 h-6 flex items-center justify-center rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="16" height="16">
        <path d="M9 16.2l-4.2-4.2-1.4 1.4 5.6 5.6 10.6-10.6-1.4-1.4z" />
      </svg>
    </span>
    Secure and manage assets effectively
  </li>
  <li className="flex items-center gap-2 text-[#1E1E1E] ">
    <span className="bg-[#FF8B66] text-white w-6 h-6 flex items-center justify-center rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="16" height="16">
        <path d="M9 16.2l-4.2-4.2-1.4 1.4 5.6 5.6 10.6-10.6-1.4-1.4z" />
      </svg>
    </span>
    Avoid penalties with accurate and timely tax filing
  </li>
  <li className="flex items-center gap-2 text-[#1E1E1E] ">
    <span className="bg-[#FF8B66] text-white w-6 h-6 flex items-center justify-center rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="16" height="16">
        <path d="M9 16.2l-4.2-4.2-1.4 1.4 5.6 5.6 10.6-10.6-1.4-1.4z" />
      </svg>
    </span>
    Maintain clear records of income and distributions
  </li>
 
</ul>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button className="bg-[#FE5722] text-white px-10  py-4 text-[18px] rounded-full font-semibold shadow-md hover:bg-orange-600 transition">
          GET TAX RETURN
        </button>
      </div>
    </section>
  );
}
