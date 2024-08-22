import React from "react";
import Navbody from "../props/main-pages/Navbody";
import Footer from "../props/main-pages/Footer";
import ProjectManage from "../props/body-components/ProjectManage";
import ProjectControll from "../props/body-components/ProjectControll";
import ProjectRisk from "../props/body-components/ProjectRisk";
import ForensicShedule from "../props/body-components/ForensicShedule";
import ProcessSystemDevelopment from "../props/body-components/ProcessSystemDevelopment";
import Traning from "../props/body-components/Traning";
import Vishualize from "../props/body-components/Vishualize";
import MepConsultancy from "../props/body-components/MepConsultancy";
import TechnicalTraning from "../props/body-components/TechnicalTraning";

const ProjectMnagementServices = () => {
  return (
    <div>
      <Navbody
        video="/videos/project_managment.mp4"
        text="Project Management"
        subText="your constructive partner"
        threeText="We're pioneers in"
        fourText="providing mep engineering services with "
        fivetext="professionalism, honesty and value"
        button1="Learn More +"
        button2="Get a Quote +"
        mainTextClassName="2xl:text-9xl xl:text-[110px] 2xl:ml-16 xl:mt-3 xl:ml-16 2xl:mb-4 xl:mb-4 lg:ml-16 tracking-wide"
      />

      {/* PROJECT MANAGEMENT SERVICES */}
      <ProjectManage />


      {/* project controll component*/}
      <ProjectControll />

      {/* project risk management */}
      <ProjectRisk />

      {/* FORENSIC SCHEDULE DELAY ANALYSIS & TIME QUANTUM CLAIMS */}
      <ForensicShedule />

      {/* PROCESS & SYSTEM DEVELOPMENT */}
      <ProcessSystemDevelopment />

      {/*  TRAINING  */}
      <Traning />


      <Footer footerContainerClassName="py-20 2xl:py-16 xl:py-16 lg:py-20 md:py-20 sm:py-16 mt-5" />
    </div>
  );
};

export default ProjectMnagementServices;
