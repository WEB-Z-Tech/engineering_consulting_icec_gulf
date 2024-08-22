import React from "react";
import PropTypes from "prop-types";

function Aboutgulf({ title, description }) {
  return (
    <div className="py-8 md:py-16 relative w-11/12 2xl:left-20 xl:left-10">
      <div className="container mx-auto px-4 md:px-8">
        {/* Title Section */}
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold uppercase mb-2 text-left">
          {title}
        </h2>
        <hr className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-2/12 border-orange-500 mb-4 border-2" />
        {/* Description Section */}
        <p className="text-black text-sm md:text-md lg:text-md text-left" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
}

Aboutgulf.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Aboutgulf;


  

//     <div className="bg-white text-gray-900">
//     <section className="py-16">
//       <div className="container mx-auto text-center">
//       <div className="mb-4 flex justify-center items-center">
//   <span className="text-custom-purple font-bold uppercase text-sm">Consult With The Pros</span>
//   <svg
//     className="ml-2 w-5 h-5 text-custom-purple"
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       d="M3 21L21 3L21 21H3Z"
//       fill="currentColor"
//     />
//   </svg>
// </div>

//         <h2 className="text-4xl font-bold">Expert MEP Consultancy Services</h2>
//         <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
//           With over 35 years of experience, Pro Engineering is proud to have qualified consultants at the ready.
//           We’re an ever-expanding, family-owned business in <span className="font-bold">San Diego</span>, with offices in <span className="font-bold">San Diego, Orange County</span>, and the <span className="font-bold">Bay Area (Northern California)</span>, and <span className="font-bold">Nevada</span>.
//         </p>
//         <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
//           DOWNLOAD BROCHURE
//         </button>
//       </div>
//     </section>
//   </div>