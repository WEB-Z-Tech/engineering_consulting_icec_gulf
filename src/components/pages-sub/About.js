import React from "react";
import Subnavbody from "../props/sub-pages/Subnavbody";
import Aboutgulf from "../props/body-components/Aboutgulf";
import ServicesSet from "../props/body-components/ServicesSet";
import Footer from "../props/main-pages/Footer";

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
      {/* Vission Mission component */}
      <div className="bg-[#eaecee]  py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Section */}
            <div className="bg-white p-8 shadow-sm rounded-ss-3xl flex flex-col items-start">
              <div className="flex items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-800 mr-3">
                  Vision
                </h2>
                <svg
                  className="w-4 h-4 mt-1 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 21L21 3L21 21H3Z" fill="currentColor" />
                </svg>
              </div>

              <p className="text-gray-600 text-start">
                To lead as the premier provider of excellent and sustainable
                solutions for the Gulf region industries, we combine innovation,
                expertise, and a commitment to empower businesses with
                growth-driven solutions that positively impact the environment.
              </p>
            </div>

            {/* Mission Section */}
            <div className="bg-white p-8 shadow-sm rounded-ee-3xl flex flex-col items-start">
              <div className="flex items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-800 mr-3">
                  Mission
                </h2>
                <svg
                  className="w-4 h-4 mt-1 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 21L21 3L21 21H3Z" fill="currentColor" />
                </svg>
              </div>

              <p className="text-gray-600 text-start">
                " Committed to Engineering Excellence in the Gulf Region: We are
                dedicated to delivering top-notch engineering services, from
                project inception to completion, ensuring the highest standards
                of quality and client satisfaction. "
              </p>
            </div>
          </div>
        </div>
      </div>
      <ServicesSet/>
      <Footer footerContainerClassName="py-20 2xl:py-16 xl:py-16 lg:py-20 md:py-20 sm:py-16 mt-10" />
    </div>
  );
}

export default About;
