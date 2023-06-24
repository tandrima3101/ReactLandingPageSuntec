/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Footer from "../components/Footer";
import TableWithAccordion from "../components/Accordian";
import Banner from "../components/Banner";
import CustomerSection from "../components/CustomerSection";


function LandingPage() {
  return (
    <>
      <Banner/>
      <CustomerSection/>
      <TableWithAccordion />
      <Footer />
    </>
  );
}

export default LandingPage;
