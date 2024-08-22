import React from "react";

function ProjectManage() {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-6xl mx-24 px-4">
        <h2 className="text-3xl font-bold text-start mb-8">
          PROJECT MANAGEMENT SERVICES
        </h2>
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <img
              src="/assets/project_management.jpg"
              alt="Project Planning"
              className="w-full h-auto max-h-64 object-cover"
            />
          </div>

          <div className="md:w-2/3 text-left md:pl-8">
            <h2 className="text-2xl font-bold mb-4"> PROJECT PLANNING AND SCHEDULING</h2>
            <p className="mb-4">
            Effective Construction Planning and Scheduling are paramount for
               seamlessly integrating all construction activities and phases,
               ensuring project completion within budget and on schedule. The
               advent of advanced scheduling tools like Primavera and Power
               Projects has made planning and scheduling more efficient and
               appealing.
            </p>
            <p className="mb-4">
                      At The ICEC GULF, we specialize in establishing robust planning
             and scheduling processes and protocols. Our comprehensive
              services encompass:
            </p>
            <ul className="list-disc list-inside space-y-2 py-2">
                  <li>
                 Crafting Baseline programs/schedules as per contractual terms
                 and conditions.
               </li>
               <li>
                 Developing revised and recovery programs/schedules as needed.
               </li>
               <li>Creating catch-up and accelerated programs.</li>
               <li>
                 Implementing a weightage system for generating project
                 S-curves (combining cost and resource curves).
               </li>
               <li>Crafting Project S-Curves and resource histograms.</li>
               <li>
                 Establishing an Organizational Breakdown Structure (OBS) and
                 assigning responsibilities to project delegates.
               </li>
               <li>
                 Generating baseline manpower assignments, machinery charts,
                 and management task matrices.
               </li>
               <li>
                 Developing Critical Path Method (CPM) schedules and
                 identifying the practical and logical critical path.
               </li>
               <li>
                 Analyzing critical and near-critical paths to enlighten
                 clients about achievable milestones and avoid unnecessary
                 delays.
               </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default ProjectManage;
