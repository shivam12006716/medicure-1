"use client"
import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
const medicines = [
    { id: 1, name: 'Paracetamol', description: 'Pain reliever', price: 99.99, company: 'Acme Pharmaceuticals', expiryDate: '2025-12-31' },
    { id: 2, name: 'Ibuprofen', description: 'Anti-inflammatory', price: 149.99, company: 'Biopharma Inc.', expiryDate: '2024-06-30' },
    { id: 3, name: 'Aspirin', description: 'Blood thinner', price: 79.99, company: 'Medic Solutions', expiryDate: '2026-03-31' },
    { id: 4, name: 'Vitamin C', description: 'Immune booster', price: 199.99, company: 'NutraCare', expiryDate: '2027-01-01' },
    { id: 5, name: 'Multivitamin', description: 'Daily supplement', price: 299.99, company: 'HealthPlus', expiryDate: '2025-09-30' },
    { id: 6, name: 'Omega-3', description: 'Heart health', price: 349.99, company: 'NaturalVita', expiryDate: '2024-12-31' },
    { id: 7, name: 'Probiotics', description: 'Gut health', price: 249.99, company: 'GutHealth Labs', expiryDate: '2026-06-30' },
    { id: 8, name: 'Melatonin', description: 'Sleep aid', price: 149.99, company: 'SleepWell Co.', expiryDate: '2025-03-31' },
    { id: 9, name: 'Vitamin D', description: 'Bone health', price: 179.99, company: 'SunRays Supplements', expiryDate: '2027-09-30' },
    { id: 10, name: 'Zinc', description: 'Immune support', price: 99.99, company: 'ImmunityBoost Inc.', expiryDate: '2026-12-31' },
];

const MedicineOrderingPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleAddToCart = (medicine) => {
        const existingItem = cart.find((item) => item.id === medicine.id);
        if (existingItem) {
            setCart((prevCart) =>
                prevCart.map((item) =>
                    item.id === medicine.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            setCart((prevCart) => [...prevCart, { ...medicine, quantity: 1 }]);
        }
        setShowCart(true);
    };

    const handleRemoveFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const handleQuantityChange = (id, operation) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: operation === 'plus' ? item.quantity + 1 : item.quantity > 1 ? item.quantity - 1 : item.quantity,
                    }
                    : item
            )
        );
    };

    const handleQuantityInputChange = (id, value) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: isNaN(value) || value < 1 ? 1 : Math.floor(value) } : item
            )
        );
    };

    const filteredMedicines = medicines.filter((medicine) =>
        medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="min-h-screen bg-slate-100 flex flex-col items-center py-8">
            <h1 className="text-3xl font-bold text-slate-500 mb-8">Order General Medicines</h1>
            <div className="mb-8 w-full max-w-md">
                <input
                    type="text"
                    placeholder="Search medicines..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full px-4 py-2 border border-slate-300 rounded-md text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 w-full max-w-4xl px-4 lg:grid-cols-1">
                {filteredMedicines.map((medicine) => {
                    const cartItem = cart.find((item) => item.id === medicine.id);
                    const quantity = cartItem ? cartItem.quantity : 0;
                    return (
                        <div
                            key={medicine.id}
                            className="bg-white p-4 rounded-md shadow-md flex flex-col justify-between"
                        >
                            <div>
                                <h2 className="text-xl font-bold text-slate-500">{medicine.name}</h2>
                                <p className="text-red-500">{medicine.description}</p>
                                <p className="text-sky-500 font-bold">Price: ₹{medicine.price.toFixed(2)} / pack </p>
                                <p className="text-slate-900">Company: {medicine.company}</p>
                                <p className="text-slate-500 font-bold">Expiry Date: {medicine.expiryDate}</p>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center">
                                    <button
                                        onClick={() => handleQuantityChange(medicine.id, 'minus')}
                                        disabled={quantity === 1}
                                        className="bg-slate-300 hover:bg-slate-400 text-slate-500 font-bold py-2 px-4 rounded-l disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        min="1"
                                        value={quantity}
                                        onChange={(e) => handleQuantityInputChange(medicine.id, e.target.value)}
                                        className="mx-2 w-12 text-center text-slate-500 font-bold border border-slate-300 rounded py-2"
                                    />
                                    <button
                                        onClick={() => handleQuantityChange(medicine.id, 'plus')}
                                        className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-r"
                                    >
                                        +
                                    </button>
                                   
                                </div>
                                <button
                                    onClick={() => handleAddToCart(medicine)}
                                    className="bg-sky-500 hover:bg-sky-600 ml-5 text-white  font-bold py-2 px-2 rounded  "
                                >
                                    {quantity > 0 ? 'Update Cart' : 'Add To Cart '}
                                </button>
                               
                            </div>
                        </div>
                    );
                })}
            </div>
            {showCart && (
                <div className="fixed bottom-0 left-0 right-0 border-t border-sky-500 bg-slate-300 text-slate-50 border h-30 p-4 shadow-md flex items-center justify-between">
                    <div className="flex items-center">
                        <FaShoppingCart className="text-2xl text-sky-500 mr-2" />
                        <span className="text-slate-500 font-bold">{totalQuantity} items</span>
                    </div>
                 <Link href="/medicine/cart">   <button
                        className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Proceed to Cart
                    </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default MedicineOrderingPage;