import React from 'react';

const ClaimManagement = () => {
  return (
    <div className="w-full bg-slate-300/50 pb-10">
    <div className="flex flex-col p-10">
   <img
  src="/assets/project-discus.jpg"
  alt="Sample Image"
  className="rounded-tr-[500px] shadow-lg max-w-screen-2xl xl:h-[600px]  border-8 border-blue-600/80"
/>

    </div>
    <div className="w-full mx-4 sm:mx-8 lg:mx-0 p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-start">
        <div className="text-2xl justify-center">
        </div>
        <div className="text-left text-base sm:text-lg md:text-xl justify-self-end"> 
          <div className="bg-blue-600/80 text-center p-2 pr-8 pl-6 rounded-bl-[50px] rounded-tr-[50px] shadow-lg text-white">
            <h4 className="text-3xl font-semibold italic">Failling to Plan is Planning to Fail</h4>
            <p className="text-lg text-end font-light">— By J. Hinze</p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-10 rounded-xl shadow-lg max-w-4xl mx-auto my-8">
  <h1 className="text-5xl font-bold text-center text-blue-600/80 drop-shadow-md transition-transform transform hover:scale-105 duration-300">
    Claim Management
  </h1>
  <p className="text-lg md:text-2xl text-gray-700 mt-6 leading-relaxed tracking-wide animate-fadeIn">
    We ensure the successful handling of your Extension of Time (EOT) claims and related additional cost claims by employing forensic delay analysis techniques along with widely accepted formulas, methodologies, and concepts in the industry.
  </p>
  <p className="text-lg md:text-2xl text-gray-700 mt-4 leading-relaxed tracking-wide animate-fadeIn delay-200">
    Our approach involves developing delay chronologies, applying various delay analysis techniques, assessing the impact of delays, and summarizing the cumulative excusable delay quantum. We diligently prepare prolongation cost claims, encompassing site preliminaries, site overheads, head office overhead recovery, and other time-based expenses. Furthermore, we adeptly formulate disruption claims and acceleration claims specific to construction projects.
  </p>
</div>

  </div>
  
  );
};

export default ClaimManagement;
