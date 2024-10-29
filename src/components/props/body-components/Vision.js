import React from 'react'

function Vision() {
  return (
    <div className="bg-[#eaecee] py-8 sm:py-12 md:py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Vision Section */}
        <div className="bg-white p-6 sm:p-8 shadow-sm rounded-ss-3xl flex flex-col items-start">
          <div className="flex items-center mb-3 sm:mb-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mr-2 sm:mr-3">
              Vision
            </h2>
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 mt-1 text-orange-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 21L21 3L21 21H3Z" fill="currentColor" />
            </svg>
          </div>

          <p className="text-gray-600 text-sm sm:text-base lg:text-lg text-start">
            To lead as the premier provider of excellent and sustainable
            solutions for the Gulf region industries, we combine innovation,
            expertise, and a commitment to empower businesses with
            growth-driven solutions that positively impact the environment.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white p-6 sm:p-8 shadow-sm rounded-ee-3xl flex flex-col items-start">
          <div className="flex items-center mb-3 sm:mb-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mr-2 sm:mr-3">
              Mission
            </h2>
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 mt-1 text-orange-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 21L21 3L21 21H3Z" fill="currentColor" />
            </svg>
          </div>

          <p className="text-gray-600 text-sm sm:text-base lg:text-lg text-start">
            "Committed to Engineering Excellence in the Gulf Region: We are
            dedicated to delivering top-notch engineering services, from
            project inception to completion, ensuring the highest standards
            of quality and client satisfaction."
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Vision
