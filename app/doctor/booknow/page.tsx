'use client'
import React, { useState } from 'react';
import Link from 'next/link';
const BookDoctorPage = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [hostel, setHostel] = useState('');
  const [room, setRoom] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleBooking = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg-slate-100 min-h-screen w-screen flex flex-col items-center justify-center">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fHww"
          alt="Doctor"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-slate-500 font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-slate-300 rounded-md py-2 px-3 text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="mobile"
            className="block text-slate-500 font-bold mb-2"
          >
            Mobile Number
          </label>
          <input
            type="text"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full border border-slate-300 rounded-md py-2 px-3 text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="hostel"
            className="block text-slate-500 font-bold mb-2"
          >
            Hostel Number
          </label>
          <input
            type="text"
            id="hostel"
            value={hostel}
            onChange={(e) => setHostel(e.target.value)}
            className="w-full border border-slate-300 rounded-md py-2 px-3 text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="room"
            className="block text-slate-500 font-bold mb-2"
          >
            Room Number
          </label>
          <input
            type="text"
            id="room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className="w-full border border-slate-300 rounded-md py-2 px-3 text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>
        <button
          onClick={handleBooking}
          className="w-full bg-sky-500 text-white font-bold py-2 rounded-md hover:bg-sky-600 transition-colors duration-300"
        >
          Book Now
        </button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-500 bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-slate-500">
              Booking Details
            </h2>
            <p className="text-slate-500 mb-2">Name: {name}</p>
            <p className="text-slate-500 mb-2">Mobile Number: {mobile}</p>
            <p className="text-slate-500 mb-2">Hostel Number: {hostel}</p>
            <p className="text-slate-500 mb-4">Room Number: {room}</p>
            <div className="flex justify-end">
              <button
                onClick={handleClosePopup}
                className="bg-sky-500 text-white font-bold py-2 px-4 rounded-md hover:bg-sky-600 transition-colors duration-300"
              >
               <Link href='/doctor/confirm'>Confirm Booking</Link> 
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDoctorPage;