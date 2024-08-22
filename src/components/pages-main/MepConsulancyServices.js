import React from "react";
import Navbody from "../props/main-pages/Navbody";
import Footer from "../props/main-pages/Footer";
import MepConsultancy from "../props/body-components/MepConsultancy";

const MepConsulancyServices = () => {
  return (
    <div>
      <Navbody
        video="/videos/mep_consultancy.mp4"
        text="Mep Consultancy"
        subText="your constructive partner"
        threeText="We're pioneers in"
        fourText="providing mep engineering services with "
        fivetext="professionalism, honesty and value"
        button1="Learn More +"
        button2="Get a Quote +"
        mainTextClassName="2xl:text-9xl xl:text-[124px] 2xl:ml-16 xl:mt-3 xl:ml-16 2xl:mb-4 xl:mb-4 lg:ml-16 tracking-wide"
      />
     <MepConsultancy mepconsultancyClassName="py-12"/>
      <Footer footerContainerClassName="py-20 2xl:py-16 xl:py-16 lg:py-20 md:py-20 sm:py-16 mt-5" />
    </div>
  );
};

export default MepConsulancyServices;
