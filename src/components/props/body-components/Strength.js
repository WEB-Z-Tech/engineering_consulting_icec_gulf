

import React from 'react';

const Strength = () => {
  return (
    <div className="w-full bg-gray-300/90">
     
    <div className="flex flex-col p-10">
    <h1 className="text-5xl font-bold text-center text-blue-600/80 drop-shadow-md transition-transform transform hover:scale-105 duration-300">
        OUR STRENGTH
          </h1>
    <span className="text-2xl mb-3 text-start"><b className="text-5xl mr-3 text-blue-700/80">Our team</b>
     comprises subject matter experts who possess in-depth knowledge and
    specialized skills in their respective domains.
    
    </span>
     <img
  src="/assets/project-discusions.jpg"
  alt="Sample Image"
  className="rounded-tl-[500px] shadow-lg max-w-screen-2xl xl:h-[600px]  border-8 border-blue-600/80"
/>
<span className="text-2xl my-5"><b className="text-4xl mr-3 text-blue-700/80">We are trusted by our international clients</b>
 for the quality
services we provide that are not only convenient and pertinent but also reasonably priced. Our client base
consists of world-renowned institutions in Canada, the United Kingdom, and nations of the Gulf region
including Qatar, Saudi Arabia, and the United Arab Emirates.
    
    </span>
    </div>
    
</div>
  
  );
};

export default Strength;
