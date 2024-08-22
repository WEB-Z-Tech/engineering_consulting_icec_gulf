import React, { useState } from "react";

const ContactUS = () => {
  const [industry, setIndustry] = useState("");
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);

  const handleIndustryChange = (event) => {
    setIndustry(event.target.value);
  };
  const handleServiceChange = (event) => {
    setService(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleAgreeChange = (event) => {
    setAgree(event.target.checked);
  };

  return (
    <div className="bg-img-services-set bg-cover bg-center h-auto text-white flex flex-col lg:flex-row md:flex-row xl:flex-row 2xl:flex-row p-4 md:pb-96 sm:pb-[70%] pb-[115%]  lg:p-44  xl:p-44 xl:pb-96 2xl:p-44 2xl:pb-[27%] lg:pb-96">
      <div className="flex-1 flex flex-col 2xl:items-start xl:items-start lg:items-start md:items-center items-center  relative bottom-24 xl:bottom-24 2xl:bottom-24 lg:-top-24 md:top-8 sm:top-8 top-8">
        <div className="relative xl:w-11/12 w-10/12  md:w-4/6 md:h-full lg:w-full lg:h-5/6 h-[500px] left-5 lg:-left-5 md:left-2 2xl:-left-5">
          <img
            src="/assets/contact-page-bildings-01.jpg"
            alt="Building 1"
            className="object-cover w-full h-3/5 xl:h-full absolute"
          />
          <img
            src="/assets/contact-page-bildings-02.jpg"
            alt="Building 2"
            className="object-cover w-full h-3/5 xl:h-full absolute transform -translate-y-[-90%] right-10 md:right-9"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:ml-8 md:mt-80 mt-36 sm:top-2 2xl:-top-96 md:-top-64 lg:-top-96 relative sm:items-center items-center md:items-start 2xl:text-start xl:text-start">
        {/* Title and Description */}
        <div className="text-slate-200 z-10 relative flex flex-col items-center 2xl:items-start xl:items-start sm:items-center md:items-start 2xl:-left-1">
          <h2 className="text-5xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-bold font-bebas-neue text-shadow-custom drop-shadow-2xl mb-4 sm:mb-2 text-center sm:text-center md:text-start xl:text-start 2xl:text-start">
            Request a Quote
          </h2>
          <p className="md:text-sm text-sm sm:text-sm sm:w-11/12 md:w-11/12 xl:w-full  text-center sm:text-center md:text-start lg:text-start 2xl:text-start xl:text-start">
            We’re committed to providing top-tier engineering solutions that
            meet your unique needs. Fill out the form below to request a quote
            and our team will get back to you promptly.
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-[#303948] w-11/12  sm:w-11/12 md:w-11/12 2xl:w-full xl:w-full lg:w-full p-12 md:p-8 pb-10 sm:pb-7 shadow-lg border-t-8 border-custom-purple absolute mt-44 sm:mt-32 md:mt-36 lg:mt-40 xl:mt-40 2xl:mt-32 2xl:pb-24 xl:pb-12 lg:pb-10">
          <form className="space-y-3 2xl:space-y-5 lg:space-y-5 md:space-y-4 sm:space-y-2  sm:-mt-6 md:mt-2 -mt-5 text-xs">
            <div className="flex flex-col  space-y-3 2xl:space-y-5 lg:space-y-5 md:space-y-4 sm:space-y-2">
              <input
                type="text"
                placeholder="First Name*"
                className="max-w-56 px-4 py-2  border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-custom-purple"
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="max-w-56 px-4 py-2  border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-custom-purple"
              />
              <input
                type="text"
                placeholder="Phone*"
                className="max-w-56 px-4 py-2  border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-custom-purple"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="max-w-56 px-4 py-2  border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-custom-purple"
              />
              <input
                type="email"
                placeholder="Company Email*"
                className="w-full px-4 py-2  border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-custom-purple"
              />
            </div>

            <div className="space-y-3 2xl:space-y-5 xl:space-y-5 lg:space-y-5 md:space-y-4 sm:space-y-2 ">
              <select
                value={industry}
                onChange={handleIndustryChange}
                className="w-full px-4 py-2 2xl:py-3 lg:py-3 border text-gray-300 border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-custom-purple"
              >
                {industry === "" && (
                  <option
                    value=""
                    hidden
                    className="bg-white border-0 text-black "
                  >
                    Industry / Project Type
                  </option>
                )}
                <option
                  value="mechanical"
                  className="bg-white border-0 text-black "
                >
                  Lab
                </option>
                <option
                  value="electrical"
                  className="bg-white border-0 text-black "
                >
                  Restaurant
                </option>
                <option
                  value="plumbing"
                  className="bg-white border-0 text-black "
                >
                  Office
                </option>
              </select>

              <select
                value={service}
                onChange={handleServiceChange}
                className="w-full px-4 py-2 2xl:py-3 xl:py-3 lg:py-3 border text-gray-300 border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-custom-purple"
              >
                {service === "" && (
                  <option
                    value=""
                    hidden
                    className="bg-white border-0 text-black "
                  >
                    Which service are you interested in?*
                  </option>
                )}
                <option
                  value="mechanical"
                  className="bg-white border-0 text-black "
                >
                  Mechanical Engineering
                </option>
                <option
                  value="electrical"
                  className="bg-white border-0 text-black "
                >
                  Electrical Engineering
                </option>
                <option
                  value="plumbing"
                  className="bg-white border-0 text-black "
                >
                  Plumbing Services
                </option>
              </select>

              <select
                value={description}
                onChange={handleDescriptionChange}
                className="w-full px-4 py-2 2xl:py-3 xl:py-3 lg:py-3 border text-gray-300 border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-custom-purple"
              >
                {description === "" && (
                  <option
                    value=""
                    hidden
                    className="bg-white border-0 text-black "
                  >
                    How would you describe yourself?*
                  </option>
                )}
                <option
                  value="engineer"
                  className="bg-white border-0 text-black "
                >
                  Engineer
                </option>
                <option
                  value="developer"
                  className="bg-white border-0 text-black "
                >
                  Developer
                </option>
                <option
                  value="designer"
                  className="bg-white border-0 text-black "
                >
                  Designer
                </option>
              </select>

              {/* Message Box */}
              <textarea
                value={message}
                onChange={handleMessageChange}
                placeholder="How Can we help you?*"
                className="w-full px-4 py-1 lg:py-3 xl:py-3 2xl:py-3 md:py-1 sm:py-1 border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-custom-purple"
                rows="2"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="agree"
                checked={agree}
                onChange={handleAgreeChange}
                className="h-5 w-5 text-custom-purple focus:ring-custom-purple border-gray-300 rounded mb-6 2xl:mb-10 xl:mb-14 lg:mb-16 md:mb-12 sm:mt-2"
              />
              <label
                htmlFor="agree"
                className="text-xs md:text-xs sm:text-xs 2xl:text-sm xl:text-sm lg:text-sm text-gray-300 xl:mt-3 xl:mb-3"
              >
                Do you agree to receive SMS and Email messages from Pro
                Engineering Consulting for updates and promotions? Please visit
                our{" "}
                <a href="#" className="text-green-500 underline-offset-0">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-green-500 underline-offset-0">
                  Terms and Conditions
                </a>{" "}
                for more information.
              </label>
            </div>

            <button className="w-full bg-yellow-500 text-white 2xl:text-xl xl:text-xl lg:text-lg text-xs md:text-lg sm:text-xs px-4 py-2 2xl:py-4 xl:py-3 md:py-2 sm:py-2 lg:py-3 font-bold  uppercase hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;

// <div className="flex items-center justify-center min-h-screen p-28 ">
//   <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col md:flex-row">
//     <div className="md:w-1/2">
//       <img
//         src="./assets/construction-01.jpg"
//         alt="Contact Us"
//         className="w-full h-full object-cover rounded-l-lg"
//       />
//     </div>
//     <div className="md:w-1/2 p-8 text-center">
//       <div className="text-center">
//         <h1 className="text-4xl font-extrabold text-gray-900 mb-5">
//           Contact Us
//         </h1>
//         <hr className="border-t-8 border-custom-purple rounded-full w-4 mx-auto mb-3" />
//       </div>

//       <p className="text-md text-gray-600 mb-8">
//         Got questions? We’d love to hear from you. Send us message and we
//         will respond to you as soon as possible.
//       </p>

//       <div className="bg-gray-800 p-8 shadow-md border-t-8 border-custom-purple">
//         <form className="space-y-4">
//           <input
//             type="text"
//             placeholder="First Name*"
//             className="w-full px-4 py-2 text-black"
//           />
//           <input
//             type="text"
//             placeholder="Last Name*"
//             className="w-full px-4 py-2 text-black"
//           />
//           <input
//             type="text"
//             placeholder="Phone*"
//             className="w-full px-4 py-2 text-black"
//           />
//           <input
//             type="text"
//             placeholder="Company Name"
//             className="w-full px-4 py-2 text-black"
//           />
//           <input
//             type="email"
//             placeholder="Company Email*"
//             className="w-full px-4 py-2 text-black"
//           />
//           <input
//             type="text"
//             placeholder="Industry / Project Type"
//             className="w-full px-4 py-2 text-black"
//           />
//           <select className="w-full px-4 py-2 text-black">
//             <option value="">Which service are you interested in?*</option>
//             <option value="mechanical">Mechanical Engineering</option>
//             <option value="electrical">Electrical Engineering</option>
//             <option value="plumbing">Plumbing Services</option>
//           </select>
//           <button className="w-full bg-yellow-500 text-white px-4 py-2 font-bold hover:bg-yellow-600">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   </div>
// </div>
