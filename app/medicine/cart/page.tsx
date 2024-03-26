"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const medicines = [
    { id: 1, name: 'Paracetamol', description: 'Pain reliever', price: 99.99, company: 'Acme Pharmaceuticals', expiryDate: '2025-12-31' },
    { id: 2, name: 'Ibuprofen', description: 'Anti-inflammatory', price: 149.99, company: 'Biopharma Inc.', expiryDate: '2024-06-30' },
    { id: 3, name: 'Aspirin', description: 'Blood thinner', price: 79.99, company: 'Medic Solutions', expiryDate: '2026-03-31' },
    { id: 4, name: 'Vitamin C', description: 'Immune booster', price: 199.99, company: 'NutraCare', expiryDate: '2027-01-01' },
    { id: 5, name: 'Multivitamin', description: 'Daily supplement', price: 299.99, company: 'HealthPlus', expiryDate: '2025-09-30' },
];

const CartPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        hostelName: '',
        roomNumber: '',
        mobileNumber: '',
    });
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isFormOverlayOpen, setIsFormOverlayOpen] = useState(false);
    const router = useRouter();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        setIsDialogOpen(true);
    };

    const handleGoToHome = () => {
        setIsDialogOpen(false);
        router.push('/home');
    };

    return (
        <div className="min-h-screen bg-slate-100 text-slate-500 flex flex-col items-center">
            <div className="max-w-4xl w-full px-4 py-8">
                <h1 className="text-2xl font-bold mb-4">Cart</h1>
                <button
                    className="bg-sky-500 font-bold text-slate-100 px-4 py-2 rounded-md hover:bg-sky-600 transition-colors duration-300 mb-4"
                    onClick={() => setIsFormOverlayOpen(true)}
                >
                    Enter Delivery Details
                </button>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4">
                    {medicines.map((medicine) => (
                        <div key={medicine.id} className="bg-white shadow-md rounded-md p-4 mb-4">
                            <h2 className="text-lg font-bold">{medicine.name}</h2>
                            <p className="text-sm text-red-500">{medicine.description}</p>
                            <p className="text-sm text-sky-500">Price: ₹{medicine.price}</p>
                            <p className="text-sm text-slate-900">Company: {medicine.company}</p>
                            <p className="text-sm font-bold">Expiry Date: {medicine.expiryDate}</p>
                            <div className="flex items-center mt-2">
                                <label htmlFor={`quantity-${medicine.id}`} className="mr-2">
                                    Quantity:
                                </label>
                                <input
                                    type="number"
                                    id={`quantity-${medicine.id}`}
                                    min="1"
                                    defaultValue="1"
                                    className="w-16 px-2 py-1 rounded-md border border-gray-300 text-slate-500"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {isFormOverlayOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white shadow-md rounded-md p-4 max-w-md w-full"
                    >
                        <h2 className="text-lg font-bold mb-4">User Details</h2>
                        <div className="mb-4">
                            <label htmlFor="name" className="block font-bold mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 rounded-md border border-gray-300 text-slate-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="hostelName" className="block font-bold mb-1">
                                Hostel Name
                            </label>
                            <input
                                type="text"
                                id="hostelName"
                                name="hostelName"
                                value={formData.hostelName}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 rounded-md border border-gray-300 text-slate-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="roomNumber" className="block font-bold mb-1">
                                Room Number
                            </label>
                            <input
                                type="text"
                                id="roomNumber"
                                name="roomNumber"
                                value={formData.roomNumber}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 rounded-md border border-gray-300 text-slate-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="mobileNumber" className="block font-bold mb-1">
                                Mobile Number
                            </label>
                            <input
                                type="tel"
                                id="mobileNumber"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 rounded-md border border-gray-300 text-slate-500"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors duration-300 mr-2"
                                onClick={() => setIsFormOverlayOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                               
                                type="submit"
                                className="bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 transition-colors duration-300"
                            >
                                Place Order
                            </button>
                        </div>
                    </form>
                </div>
            )}
            {isDialogOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <p className="text-lg mb-4">Order Placed Successfully</p>
                        <button
                            className="bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 transition-colors duration-300"
                            onClick={handleGoToHome}
                        >
                            Go To Home
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;