

import React from "react";
import PropTypes from "prop-types";


function Navbody({
  video,
  text,
  subText,
  threeText,
  fourText,
  fivetext,
  button1,
  button2,
  mainTextClassName,
}) {
  return (
    <div className="relative pt-24 min-h-auto w-full flex flex-col justify-center items-center lg:items-start md:items-start overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute animate-darkToLight inset-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
      ></video>

      {/* Main Text */}
      <div className="relative flex flex-col items-center lg:items-start justify-center px-4 sm:px-6 md:px-28 lg:px-28 xl:px-28 mb-1 sm:top-9 md:top-16 lg:top-20">
        <h1
          className={`font-bebas-neue animate-fadeinleft  2xl:pt-6 lg:pt-0 md:pt-4 pt-6 text-shadow-custom font-extrabold text-white drop-shadow-2xl uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl  text-center lg:text-left ${mainTextClassName}`}
          style={{
          
          }}
        >
          {text}
        </h1>
      </div>
    

      {/* Sub Text Container with Additional Text */}
      <div className="relative w-full lg:w-auto 2xl:w-3/4 xl:w-4/5 xl:pe-3 xl:pr-44 md:mt-4 md:w-auto mb-4 sm:mb-16 sm:top-10 lg:mb-16 lg:mt-7 xl:top-6 text-nowrap bg-[#07020D]/70  p-4 sm:p-6 md:p-10 lg:p-10 xl:place-self-auto text-center lg:text-start xl:px-16">
        <h2
          className="text-white animate-fadeinright bottom-0 md:bottom-3 lg:bottom-4 text-shadow-custom uppercase text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-[60px] 2xl:text-[66px] tracking-wider md:px-[80px]  lg:px-36 xl:right-6 relative"
          style={{
            fontFamily:
              "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
          }}
        >
          {subText}
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="text-center animate-fadein lg:text-left sm:mb-12 md:bottom-8 xl:bottom-16 lg:bottom-16 left-0  md:absolute  lg:absolute p-3 bg-custom-purple  lg:ml-0 w-full sm:w-auto mt-3">
            <h3 className="text-xs animate-flyinright sm:text-xs md:text-xs lg:text-xs xl:text-xs relative ml-0 lg:ml-44 sm:ml-0 md:ms-28   font-bold uppercase text-white tracking-[5px]">
              {threeText}
            </h3>
          </div>

          <div className="text-center lg:text-left relative w-full sm:w-auto md:left-1/4 lg:left-2/4  xl:left-2/4 top-0 lg:top-0 xl:top-0 md:top-2 sm:top-0">
            <h3 className="text-white animate-zoomin text-xs sm:text-xs md:text-xs font-bold uppercase lg:text-base tracking-wider">
              {fourText}
            </h3>
            <h3 className="text-white animate-zoomin text-xs sm:text-xs md:text-xs font-bold uppercase lg:text-base tracking-wider mt-2 lg:mt-0 sm:mr-8 mr-8">
              {fivetext}
            </h3>

            <div className="w-full animate-fadeinbounceright flex justify-center lg:justify-start space-x-5 mt-4">
              <button className="border font-bold border-white text-white uppercase text-xs lg:text-sm sm:text-xs px-4 py-2 lg:px-6 lg:py-4 rounded-none hover:bg-custom-purple hover:border-none">
                {button1}
              </button>
              <button className="border font-bold border-white text-white uppercase text-xs lg:text-sm sm:text-xs px-4 py-2 lg:px-6 lg:py-4 rounded-none hover:bg-custom-purple hover:border-none">
                {button2}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Navbody.propTypes = {
  video: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  threeText: PropTypes.string.isRequired,
  fourText: PropTypes.string.isRequired,
  fivetext: PropTypes.string.isRequired,
  button1: PropTypes.string.isRequired,
  button2: PropTypes.string.isRequired,
  mainTextClassName: PropTypes.string,
};

export default Navbody;
