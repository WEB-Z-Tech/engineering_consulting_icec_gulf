import React, { useRef } from 'react';
import useOnScreen from './Useonscreen';

const services = [
  {
    title: "Project Management",
    image: './assets/project_management.jpg',
    icon: "💡",
    link: "/project-management-services",
  },
  {
    title: "Technical Training",
    image: './assets/tehnical_traning.jpg',
    icon: "🧑‍🔧",
    link: "/technical-training",
  },
  {
    title: "MEP Consultancy",
    image: './assets/mep_consultancy.jpg',
    icon: "⚙️",
    link: "/mep-consultancy-services",
  },
  {
    title: "Design Services",
    image: './assets/design_services.jpg',
    icon: "🖊️",
    link: "/design-services",
  },
  {
    title: "Project Dashboards",
    image: './assets/project_dashboard.jpg',
    icon: "📈",
    link: "/project-management-services",
  },
  {
    title: "Visualization",
    image: './assets/Visualization.jpg',
    icon: "👁️",
    link: "/vishualization",
  },
];

const ServicesSet = () => {
  const ref = useRef();
  const isOnScreen = useOnScreen(ref);
  
  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-[#eaecee] text-gray-600"
    >
      {services.map((service, index) => (
        <div
          key={index}
          className={`bg-[#dadadb] p-6 rounded-none shadow-sm transition-all duration-300 ${
            isOnScreen ? 'animate-zoomin' : ''
          }`}
        >
          <div className="flex hover:animate-jiggle items-center justify-center text-4xl mb-4">
            <span className='bg-custom-purple p-2 rounded-t-3xl'>{service.icon}</span>
          </div>
          <h4 className="text-xl font-bebas-neue mb-2 uppercase">icec Gulf</h4>
          <h2 className="text-xl font-extrabold mb-2 uppercase">{service.title}</h2>
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-auto rounded-ee-3xl mb-4 hover:animate-pulse"
          />
          <a href={service.link} className="text-custom-purple mt-4 inline-block">
            LEARN MORE &gt;
          </a>
        </div>
      ))}
    </div>
  );
};

export default ServicesSet;
