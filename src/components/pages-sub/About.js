import React from "react";
import Subnavbody from "../props/sub-pages/Subnavbody";
import Aboutgulf from "../props/body-components/Aboutgulf";
import ServicesSet from "../props/body-components/ServicesSet";
import Footer from "../props/main-pages/Footer";
import Vision from "../props/body-components/Vision";
import Standfor from "./Standfor";

function About() {
  return (
    <div>
      <Subnavbody img="/assets/about.png" subTitle="About us" subText="About Us"/>
      <Aboutgulf
        title="About Us"
        description={`ICEC Gulf was founded in Dubai, UAE, with a singular focus on developing competencies among engineers and technical staff employed in the power plant industry.
  Our journey<br /> began with a commitment to empower professionals with the skills and knowledge required to excel in their roles.
  As pioneers in competency development, we paved the way for<br /> technical excellence in the Gulf region.<br /><br />
  Driven by our success and the unwavering support of our clients, we ventured into broader domains to meet the growing demands of the market.<br /><br />
  Today, ICEC Gulf offers an extensive range of services, including project management, building service engineering, Design, Training, and various other technical disciplines.<br />
  This diversification allows us to cater to a wider audience and provide comprehensive solutions to professionals from different industries.`}
      />
{/* What we stand for */}
<Standfor/>


      {/* Vission Mission component */}
      <Vision/>


      <ServicesSet/>
      <Footer footerContainerClassName="py-20 2xl:py-16 xl:py-16 lg:py-20 md:py-20 sm:py-16 mt-10" />
    </div>
  );
}

export default About;
