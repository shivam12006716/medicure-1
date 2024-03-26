'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const HomePage = () => {
    const [prescriptionFile, setPrescriptionFile] = useState(null);
    const [prescriptionImageSrc, setPrescriptionImageSrc] = useState(null);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPrescriptionFile(file);
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPrescriptionImageSrc(reader.result);
                };
                reader.readAsDataURL(file);
            }
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row">
            {/* Upload Prescription Section */}
            <div className="flex-1 flex flex-col justify-center items-center p-8">
                <h2 className="text-3xl font-bold text-slate-500 mb-4">Upload Prescription</h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div>
                        <input
                            type="file"
                            accept="image/*,application/pdf"
                            onChange={handleFileUpload}
                            className="mb-4"
                        />
                        <button
                            onClick={() => document.querySelector('input[type=file]')}
                            className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded mr-4"
                        >
                            Upload
                        </button>
                    </div>
                    {prescriptionFile && <p>File: {prescriptionFile.name}</p>}
                    {prescriptionImageSrc && <img src={prescriptionImageSrc} alt="Prescription" />}
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center p-8 bg-slate-200">
                <Link href='/medicine/medlist'>
                    <h2 className="text-3xl font-bold text-slate-500 mb-4">Order General Medicines</h2>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;