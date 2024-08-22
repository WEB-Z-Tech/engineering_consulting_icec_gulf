import React from "react";
import Subnavbody from "../props/sub-pages/Subnavbody";
import Footer from "../props/main-pages/Footer";
import Vishualize from "../props/body-components/Vishualize";

function Vishualization() {
  return (
    <div>
      <Subnavbody
        img="/assets/about.png"
        subTitle="Vishualization"
        subText="Vishualization"
      />
     <Vishualize/>
      <Footer footerContainerClassName="py-20 2xl:py-16 xl:py-16 lg:py-20 md:py-20 sm:py-16 " />
    </div>
  );
}

export default Vishualization;
