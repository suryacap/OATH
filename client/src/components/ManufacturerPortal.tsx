import React, { useState } from 'react';

const ManufacturerPortal = () => {
    const [medicineENS, setMedicineENS] = useState('');
    const [batchNo, setBatchNo] = useState('');
    const [quantity, setQuantity] = useState('');
    const [dateOfManufacture, setDateOfManufacture] = useState('');
    const [receiptFile, setReceiptFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Logic to handle form submission and minting hash
        // This will involve calling the backend API
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold text-green-800">Manufacturer Portal</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-4">
                    <label className="block text-gray-700">Medicine ENS:</label>
                    <input
                        type="text"
                        value={medicineENS}
                        onChange={(e) => setMedicineENS(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Batch No:</label>
                    <input
                        type="text"
                        value={batchNo}
                        onChange={(e) => setBatchNo(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Quantity:</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Date of Manufacture:</label>
                    <input
                        type="date"
                        value={dateOfManufacture}
                        onChange={(e) => setDateOfManufacture(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Manufacturer Receipt:</label>
                    <input
                        type="file"
                        onChange={(e) => setReceiptFile(e.target.files[0])}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <button type="submit" className="bg-teal-500 text-white py-2 px-4 rounded">
                    Submit Data & Mint Hash
                </button>
            </form>
        </div>
    );
};

export default ManufacturerPortal;