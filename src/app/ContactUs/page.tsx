import BreadcrumbContact from "../components/BCContact";
import ContactForm from "@/app/components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import HeroSection from "../components/TaxSolution";

import React from 'react'

const ContactUs = () => {
  return (
    <div className="mt-28">
        <BreadcrumbContact/>
        <ContactForm/>
        <ContactInfo/>
        <HeroSection/>
    </div>
  )
}

export default ContactUs