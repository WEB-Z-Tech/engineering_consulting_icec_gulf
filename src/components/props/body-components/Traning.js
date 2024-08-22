import React from 'react'

function Traning() {
  return (
    <div className="w-full py-5 bg-white mx-4 md:mx-10 lg:mx-20">
    <div className="w-full md:w-4/5 text-left md:pl-8">
      <h2 className="text-2xl font-semibold mb-4">TRAINING</h2>
      <p className="mb-4">
        "We specialize in professional training, focusing on crucial areas
        within construction and project management. Our offerings encompass
        corporate training and Continuous Professional Development (CPD)
        programs in the following key areas:
      </p>
    </div>
    <div className="py-1 md:pl-8">
      <ul className="list-disc list-inside space-y-2 ">
        <li>
          {" "}
          Project Planning & Scheduling for Non-Planning Professionals
        </li>
        <li> Forensic Schedule Analysis and Extension of Time Claims</li>
        <li>
          {" "}
          Hands-on Training for Primavera P6.0 for Non-Planning
          Professionals
        </li>
        <li>Advanced Primavera P6.0 Training</li>
        <li>Project Risk Management</li>
        <li>Preparatory Course for PMP Certification (Volunteer Basis)</li>
        <li>
          Interpretation of FIDIC Clauses in Time Management and Its
          Applicability
        </li>
        <li>
          Interpretation of FIDIC Clauses in Cost Management and Its
          Applicability
        </li>
        <li>Concurrent Delay and Entitlement of Prolongation Costs</li>
        <li>Practicability of Disruption Claims</li>
      </ul>
      <p className="py-5 ">
        Our structured courses are available on Udemy Academy, covering the
        same topics. Additionally, we maintain an informative blog where we
        regularly share our hands-on experiences
        <br /> from various assignments and jobs. Our blog serves as a
        dynamic knowledge base, continuously updated with new articles and
        valuable lessons learned.{" "}
      </p>
    </div>
  </div>  
  )
}

export default Traning