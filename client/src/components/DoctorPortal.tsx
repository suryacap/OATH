import React, { useState } from 'react';

const DoctorPortal = () => {
    const [patientENS, setPatientENS] = useState('');
    const [medicineENS, setMedicineENS] = useState('');
    const [dosage, setDosage] = useState('');
    const [frequency, setFrequency] = useState('');
    const [prescriptionHash, setPrescriptionHash] = useState('');

    const handleIssuePrescription = async (e) => {
        e.preventDefault();
        // Simulate issuing a prescription and generating a hash
        const hash = `${patientENS}-${medicineENS}-${dosage}-${frequency}`;
        setPrescriptionHash(hash);
        // Here you would typically call the backend API to store the prescription
    };

    return (
        <div className="p-4 bg-deep-green text-white">
            <h2 className="text-xl font-bold">Doctor Portal</h2>
            <form onSubmit={handleIssuePrescription} className="mt-4">
                <div className="mb-4">
                    <label className="block text-sm">Patient ENS:</label>
                    <input
                        type="text"
                        value={patientENS}
                        onChange={(e) => setPatientENS(e.target.value)}
                        className="mt-1 p-2 border rounded w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm">Medicine ENS:</label>
                    <input
                        type="text"
                        value={medicineENS}
                        onChange={(e) => setMedicineENS(e.target.value)}
                        className="mt-1 p-2 border rounded w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm">Dosage:</label>
                    <input
                        type="text"
                        value={dosage}
                        onChange={(e) => setDosage(e.target.value)}
                        className="mt-1 p-2 border rounded w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm">Frequency:</label>
                    <input
                        type="text"
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value)}
                        className="mt-1 p-2 border rounded w-full"
                        required
                    />
                </div>
                <button type="submit" className="bg-medical-aqua text-white p-2 rounded">
                    Issue Prescription
                </button>
            </form>
            {prescriptionHash && (
                <div className="mt-4">
                    <h3 className="font-bold">Prescription Hash:</h3>
                    <p>{prescriptionHash}</p>
                </div>
            )}
        </div>
    );
};

export default DoctorPortal;