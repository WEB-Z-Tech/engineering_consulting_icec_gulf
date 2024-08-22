import React from 'react'

function ForensicShedule() {
  return (
<div className="w-full py-5 bg-white mx-4 md:mx-10 lg:mx-20">
        <div className="w-full md:w-4/5 text-left md:pl-8">
          <h2 className="text-2xl font-semibold mb-6">
            FORENSIC SCHEDULE DELAY ANALYSIS & TIME QUANTUM CLAIMS
          </h2>
          <p className="mb-4">
            The omission of proper forensic schedule analysis is a critical
            factor leading to disputes and, ultimately, arbitration proceedings.
            Delays in construction projects are a common occurrence, and
            stakeholders have different approaches to addressing them.
          </p>
          <p className="mb-4">
            The selection of a reliable, practical, and accurate schedule
            analysis technique plays a pivotal role in determining the extent of
            delay. In this context, forensic schedule delay analysis emerges as
            the most promising and precise methodology.
          </p>
          <p className="mb-4">
            Forensic Schedule Delay Analysis entails a thorough examination of
            the cause-and-effect relationship in CPM (Critical Path Method)
            scheduling. It involves determining the extent of delay using a
            common-sense approach while adhering to industry best practices and
            protocols, such as AACE's Forensic Schedule Analysis Guideline:
            29R-03 and the Society of Construction Law Delay and Disruption
            Protocol, 2nd Edition, 2017.
          </p>
        </div>
        <div className="py-1 md:pl-8">
          <p className="text-md font-bold pb-5">
            {" "}
            Our execution of Forensic Delay Analysis methodologies includes:{" "}
          </p>
          <ul className="list-disc list-inside space-y-2 ">
            <li>Time Impact Analysis</li>
            <li>Windows Analysis / Time Slice Window Analysis</li>
            <li>As-Planned vs. As-Built Analysis</li>
            <li>Impacted As-Planned Analysis</li>
            <li>Retrospective Longest Path Analysis</li>
            <li>Collapsed As-Built Analysis</li>
          </ul>
          <p className="py-5">
            We specialize in preparing Time Quantum (Extension of Time) Claims
            supported by forensic schedule analysis exercises.".
          </p>
        </div>
      </div>  )
}

export default ForensicShedule