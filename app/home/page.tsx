import React from 'react'
import Link from 'next/link'
const home = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 bg-slate-100 text-center p-4 flex items-center justify-center">
        <h2 className="text-2xl font-bold">
        <Link href='/doctor/list'> Book Appointment</Link>  
          </h2>
        
      </div>
      <div className="flex-1 bg-slate-200 text-center p-4 flex items-center justify-center">
        <Link href='/medicine/medhome'>     <h2 className="text-2xl font-bold">Order Medicine</h2></Link>
       
      </div>
    </div>
  )
}

export default home