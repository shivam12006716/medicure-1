import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import Link from 'next/link'


const page = () => {
  return (
    <div className='h-screen flex flex-col gap-1 justify-center items-center bg-slate-100 '>
      <img src="https://github.com/sandeeppandey6800/personal-portfolio/blob/master/favicon.png?raw=true" height="36px" width="36px"/>
     <div className='text-sky-500 text-4xl font-bold flex  gap-2'>
      Medicure
      </div>
      <div className='font-bold text-slate-500'>
        care at your  doorstep
      </div>
      <div>
       <div>
          <Link href="/home">  <span><FaAngleRight className='text-5xl text-gray-500 hover:text-sky-500 duration-200' /></span> </Link>
       </div>
      </div>
    </div>
  )
}

export default page