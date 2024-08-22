import React from "react";
import PropTypes from "prop-types";
import { FaHome,FaLongArrowAltRight} from 'react-icons/fa';

function Subnavbody({ img, subText,subTitle }) {
  return (
    <div className="relative pt-24 h-[65vh] w-full flex flex-col justify-center items-center lg:items-start md:items-start">
      {/* Image Background */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={img}
        alt="background"
      />

      {/* Sub Text Container with Additional Text */}
      <div className="relative w-full lg:w-auto md:mt-4 md:w-auto mb-4 sm:mb-16 sm:top-10 lg:mb-16 lg:mt-7 xl:top-12 text-nowrap bg-[#07020D]/70 md:bg-blue-600/70 sm:bg-pink-600/70 xl:bg-green-700/70 lg:bg-orange-600/70 2xl:bg-custom-purple/70 p-4 sm:p-6 md:p-10 lg:p-10 xl:place-self-auto text-center lg:text-start xl:px-32">
    <h2
      className="text-white bottom-0 md:bottom-3 lg:bottom-4 text-shadow-custom uppercase text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-[60px] 2xl:text-[66px] tracking-wider md:px-[80px] lg:px-20 xl:px-0 relative"
      style={{
        fontFamily:
          "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
      }}
    >
      {subTitle}
    </h2>
    <div className="flex items-start justify-start space-x-3 ">
      <FaHome className="text-white text-xl" />
      <FaLongArrowAltRight className="text-white text-md transform scale-x-150 mt-1" />      
      <span className="text-white text-lg font-bebas-neue">{subText}</span>
    </div>
  </div>
    </div>
  );
}


Subnavbody.propTypes = {
  img: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default Subnavbody;
