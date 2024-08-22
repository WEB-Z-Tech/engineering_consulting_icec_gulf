import React from 'react'

function ProjectControll() {
  return (
<div className="w-full bg-white">
        <div className="max-w-6xl mx-24 px-4">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
              <img
                src="/assets/project_controll.png"
                alt="PROJECT CONTROL"
                className="w-full h-auto max-h-64 object-cover"
              />
            </div>

            <div className="md:w-2/3 text-left md:pl-8">
              <h2 className="text-2xl font-bold mb-4">PROJECT CONTROL</h2>
              <p className="mb-4">
                Project Control encompasses the continuous processes of
                monitoring, tracking, and forecasting throughout the entire
                project lifecycle. It involves real-time management and analysis
                of project data to assess current progress and predict future
                outcomes.
              </p>
              <p className="mb-4">
                At our consultancy, we tailor project control systems to the
                unique characteristics of each project, considering factors such
                as project type, client specifications, and the required level
                of control. We do not offer one-size-fits-all solutions;
                instead, we diligently assess project requirements and client
                expectations to develop customized project control systems that
                incorporate global best practices and protocols.
              </p>
            </div>
          </div>

          <div className="mt-6 md:mt-0 py-10">
            <p className="text-2xl font-semibold pb-5">
              Our Project Control consultancy services include:
            </p>
            <ul className="list-disc list-inside space-y-2 ">
              <li>
                Defining Key Performance Indicators (KPIs) for the project and
                creating systems/processes to extract relevant project data for
                KPI evaluation.
              </li>
              <li>
                Implementing monitoring and tracking tools to compare planned
                versus actual progress.
              </li>
              <li>
                Forecasting project completion measures and planning the
                remaining scope of work.
              </li>
              <li>
                Designing project-specific dashboards for real-time status
                updates and forecasts.
              </li>
              <li>
                Establishing and executing an Earned Value Management System.
              </li>
              <li>
                Reporting deviations in KPIs, recommending recovery measures,
                and providing strategies to realign with baseline values.
              </li>
              <li>
                Reporting project KPIs such as CPI, SPI, CV, SV, ECA, ETA, and
                suggesting enhancements to improve these metrics."
              </li>
              <li>
                This revised text emphasizes the dynamic nature of project
                control and the consultancy's commitment to tailored solutions.
              </li>
            </ul>
          </div>
        </div>
      </div> 
       )
}

export default ProjectControll