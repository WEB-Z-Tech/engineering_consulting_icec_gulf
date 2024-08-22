import React from "react";
import Navbody from "../props/main-pages/Navbody";
import ServicesSet from "../props/body-components/ServicesSet";
import Aboutgulf from "../props/body-components/Aboutgulf";
import ContactUs from "../props/body-components/ContactUs";
import Footer from "../props/main-pages/Footer";

function Home() {
  return (
    <div>
      <Navbody
        video="/videos/buildings.mp4"
        text="Engineering"
        subText="your constructive partner"
        threeText="We're pioneers in"
        fourText="providing mep engineering services with "
        fivetext="professionalism, honesty and value"
        button1="Learn More +"
        button2="Get a Quote +"
        mainTextClassName="2xl:text-[180px] xl:text-[170px] lg:text-[160px] md:text-9xl lg:ml-16 md:ml-0 tracking-wide"
      />
      <Aboutgulf
        title="ICEC GULF"
        description="ICEC Gulf is a renowned Project Management and technical service provider in the UAE, offering a wide range of specialized and high-quality services. Our expertise encompasses project management, top-notch design, and consultancy services tailored for the UAE market. With a proven track record of excellence and customer satisfaction, we are committed to delivering solutions that meet and exceed our clients' expectations. From concept to completion, our dedicated team ensures seamless project execution and delivers results that drive success for businesses across various industries in the UAE. Partner with ICEC Gulf for unparalleled technical services that elevate your projects to new heights."
      />

      <ServicesSet />
      <ContactUs />
      <Footer footerContainerClassName="py-32 2xl:py-32 xl:py-auto lg:py-28 md:py-24 sm:py-40 " />
    </div>
  );
}

export default Home;
