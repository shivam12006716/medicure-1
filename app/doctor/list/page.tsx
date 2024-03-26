import React from 'react';
import Link from 'next/link';
const doctors = [
  {
    pic: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fHww', 
    name: 'Dr. Jane Doe',
    specialization: 'Cardiology',
    availability: 'Today at 2PM, 4PM',
  },
  {
    pic: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fHww', 
    name: 'Dr. John Smith',
    specialization: 'Dermatology',
    availability: 'Monday at 10AM, Wednesday at 3PM',
  },
  {
    pic: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fHww', 
    name: 'Dr. John Smith',
    specialization: 'Dermatology',
    availability: 'Monday at 10AM, Wednesday at 3PM',
  },
  {
    pic: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fHww', 
    name: 'Dr. John Smith',
    specialization: 'Dermatology',
    availability: 'Monday at 10AM, Wednesday at 3PM',
  },
  {
    pic: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fHww', 
    name: 'Dr. John Smith',
    specialization: 'Dermatology',
    availability: 'Monday at 10AM, Wednesday at 3PM',
  },
  
];

const DoctorCard = ({ pic, name, specialization, availability }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between p-4">
      <img className="w-20 h-20 mx-auto rounded-full object-cover" src={pic} alt={name} />
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <p className="text-gray-600 text-sm">{specialization}</p>
      </div>
      <div className="mt-2">
        <p className="text-gray-600 text-sm">Available: {availability}</p>
      </div>
      <button className="mt-4 bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4  focus:outline-none"><Link href='/doctor/booknow'>Book Appointment</Link> </button>
    </div>
  );
};

const DoctorAppointmentPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-medium text-gray-900 mb-4">Available Doctors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.name} {...doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorAppointmentPage;
