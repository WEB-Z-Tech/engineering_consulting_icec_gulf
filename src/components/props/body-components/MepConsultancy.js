import React from "react";
import PropTypes from "prop-types";

function MepConsultancy({mepconsultancyClassName}) {
  return (
    <div className={`w-full bg-white mx-4 md:mx-10 lg:mx-20 ${mepconsultancyClassName}`}>
      <div className="w-full md:w-4/5 text-left md:pl-8">
        <h2 className="text-2xl font-semibold mb-4">
          MEP CONSULTANCY SERVICES
        </h2>
        <hr className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-2/12 border-orange-500 mb-4 border-2" />
        <p className="mb-4">
          ICEC GULF delivers Specialized Customized MEP Consultancy Services
          required by investors for their Hospitality, Healthcare, Retail,
          Commercial and Residential projects.
        </p>
        <p className="mb-4">
          We deliver professionalism and consistency as we strive to satisfy all
          requirements under one roof by one team. Our range of services is
          devised to meet the ever-increasing demands of our clients and our
          consultation service is a Hassle-free ONE STOP SHOP in the
          construction sphere, covering all key aspects a client seeks from
          concept generation to the final product.
        </p>
        <p className="mb-4">
          ICEC GULF works closely with all well-reputed Developers, eminent
          Architects, and Designers to ensure professional and trustworthy
          consultations in order to meet the demands of all stakeholders,
          ensuring them to harvest the highest returns on their investments. Our
          professional excellence combined with our personalized approach has
          paved the way for us to win the hearts of our clients and maintain
          long-standing business relationships over a decade whilst continually
          expanding to onboard new clients both holding prestige locally and
          internationally.
        </p>
      </div>

      <div className="py-1 md:pl-8">
        <p className="text-md font-bold pb-5">
          MEP Consultancy services includes;
        </p>
        <ul className="list-disc list-inside space-y-2 ">
          <li>Air-Conditioning & Ventilation</li>
          <li>Electrical Installation</li>
          <li>Internal & Exterior Lighting</li>
          <li>ELV System (CCTV, MATV, Telecom, Data, PA-BGM)</li>
          <li>Energy Management systems</li>
          <li>Building Management Systems</li>
          <li>Guest Room Management Systems</li>
          <li>Plumbing Engineering (Water Supply & Drainage Systems)</li>
          <li>Fire Protection & Detection Systems</li>
          <li>Fire Risk Assessment</li>
          <li>Wastewater management, Water treatment plants</li>
          <li>Steam and Boiler systems</li>
          <li>Security Systems</li>
          <li>Escalators & Vertical Transportation</li>
          <li>Green Building Consultation</li>
          <li>Telecommunication Infrastructure</li>
        </ul>
      </div>
    </div>
  );
}

MepConsultancy.prototype={
  mepconsultancyClassName:PropTypes.string ,
}

export default MepConsultancy;
