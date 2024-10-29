import React from 'react'

function Standfor() {
  return (
    <div>
        <div className="  text-black p-10 md:pb-20 sm:pb-28">
  <h1 className="text-center text-5xl font-bold mb-14">WHAT WE STAND FOR</h1>

  <div className="flex flex-col items-end">
    <div className="text-lg leading-relaxed max-w-4xl">
        <span className="float-left"><b className="text-5xl mr-3">We</b>
          are a premier company based in the UAE, renowned for our expertise in delivering cutting-edge training 
        and consultancy services across a wide range of industries. Our core offerings encompass top-tier Project 
        Planning and Claims Quantum Management services, distinguished by our profound knowledge and proficiency in 
        diverse construction disciplines. With an unwavering commitment to excellence, we provide comprehensive solutions 
        tailored to the unique requirements of our esteemed clients.
        </span>
        
    </div>

  </div>

    <div className="mt-12 flex flex-col">
      <img
  src="/assets/design_services.jpg"
  alt="Sample Image"
  className="rounded-tr-[500px] shadow-lg max-w-screen-2xl xl:h-[600px]  border-8 border-blue-600/80"
/>
    </div>

  <div className="my-9 max-w-5xl">
    <span className="text-lg  leading-relaxed"><b className="text-5xl mr-3">We specialized</b>
    in various aspects of project management, encompass-
ing outsourced assignments for Schedule Management, Contract Administration,
and Claim Management. Our team of dedicated professionals excels in the creation
and maintenance of project schedules to ensure timely execution. Additionally, we
offer expert contract administration services to ensure compliance and maximize
project performance.
    
    </span>
  
</div>

</div>
    </div>
  )
}

export default Standfor