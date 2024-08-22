
import React from 'react';
import Subnavbody from '../props/sub-pages/Subnavbody';
import Aboutgulf from '../props/body-components/Aboutgulf';
import Footer from '../props/main-pages/Footer';

function Technicaltraning() {
  return (
    <div>
      <Subnavbody img='/assets/about.png' subTitle='Technical Training' subText='Technical Traning'/>
      <Aboutgulf title=' Technical training ( Power and Energy sector) ' description='ICEC GULF is a specialized training and technical solutions provider for major power plants in the UAE. We have strategically partnered with world-renowned technical service companies to deliver excellence in the UAE market refer our wesite www.icecgulf.org for more details'/>
      <Footer footerContainerClassName="py-20 2xl:py-16 xl:py-16 lg:py-20 md:py-20 sm:py-16" />    
    </div>
  );
}

export default Technicaltraning;
