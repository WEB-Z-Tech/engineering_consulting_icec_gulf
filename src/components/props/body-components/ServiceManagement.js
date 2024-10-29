import React from 'react'

function ServicesManagement() {
  return (
<>
<div className="w-full bg-white py-8">
  <div className="w-full mx-4 sm:mx-8 lg:mx-0 p-5 md:p-10">
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-start mb-4 sm:mb-8 transition-transform transform hover:scale-y-105 duration-300 text-blue-600/80">
        Schedule Management
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="flex justify-center">
          <img 
            src="/assets/design_services.jpg" 
            alt="Schedule Management" 
            className="border-4 border-blue-600/80 rounded-tr-[40%] w-full h-auto max-h-[400px] md:max-h-[500px] inline-block"
          />
        </div>
        <div className="text-left text-base sm:text-lg md:text-xl lg:text-2xl mt-0 md:my-0 lg:my-20">
          <p className="mb-2 sm:mb-4">
            We Prepare cost-weighted CPM Baseline Schedules (Primavera P6.0, MSP, TILOS), establish EVM Systems,
            generate Planned Value Curves & Resource Histograms, and set up Project Control KPIs.
          </p>
          <p className="my-7">
            We support project monitoring and control tasks as a real-time project recorder and forecaster. Our
            responsibilities include updating the project schedule, offering lookahead schedules, creating Earned Value
            curves, calculating Project Control KPIs, maintaining Delay logs, identifying delayed activities, suggesting
            Remedial Measures and Corrective Actions, compiling interim progress reports, and more.
          </p>
        </div>
      </div>
    </div>

    <div className='my-5'>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-start text-blue-600/80 transition-transform transform hover:scale-y-105 duration-300">
        Contract Administration
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-5 md:mt-8">
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
          <p>
            We prioritize safeguarding the Contractor's interests by fulfilling obligations and securing rights promptly and appropriately, thereby mitigating liabilities both under the Contract and otherwise.
          </p>
          <p className="my-6 md:my-10">
            Our tasks include identifying contractual requirements, planning contract administrative activities, providing advice on contractual matters, drafting letters to protect rights, issuing notifications, initiating and building cases for future claims, maintaining a change log, and substantiating contractual rights.
          </p>
        </div>
        
        <div className="text-left text-base sm:text-lg md:text-xl">
          <img 
            src="/assets/design_services.jpg" 
            alt="Contract Administration" 
            className="border-4 border-blue-600/80 rounded-tl-[40%] w-full h-auto max-h-[400px] md:max-h-[500px]"
          />
          <div className="bg-blue-600/80 text-center my-10 p-2 rounded-bl-[50px] rounded-tr-[50px] shadow-lg text-white">
            <h4 className="text-lg sm:text-2xl lg:text-3xl font-semibold italic">What gets measured, gets managed.</h4>
            <p className="text-sm sm:text-base lg:text-lg font-light">— Peter Drucker</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</>  )
}

export default ServicesManagement