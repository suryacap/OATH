import React, { useState } from 'react';

const PharmacyPortal = () => {
    const [batchNo, setBatchNo] = useState('');
    const [patientENS, setPatientENS] = useState('');
    const [doctorENS, setDoctorENS] = useState('');
    const [verificationStatus, setVerificationStatus] = useState('');
    const [dispenseStatus, setDispenseStatus] = useState('');

    const handleVerify = async () => {
        // Simulate verification logic
        const isAuthentic = Math.random() > 0.5; // Randomly simulate authentic or compromised
        setVerificationStatus(isAuthentic ? 'Authentic' : 'Compromised');
    };

    const handleDispense = async () => {
        // Simulate dispense logic
        if (batchNo && patientENS && doctorENS) {
            setDispenseStatus('Drug Dispensed Successfully');
        } else {
            setDispenseStatus('Please fill in all fields');
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl text-teal-600">Pharmacy Portal</h2>
            <div className="mt-4">
                <h3 className="text-lg">Verify Medicine</h3>
                <input
                    type="text"
                    placeholder="Batch No"
                    value={batchNo}
                    onChange={(e) => setBatchNo(e.target.value)}
                    className="border p-2 mr-2"
                />
                <button onClick={handleVerify} className="bg-teal-500 text-white p-2">
                    Verify
                </button>
                {verificationStatus && (
                    <p className={`mt-2 ${verificationStatus === 'Authentic' ? 'text-green-500' : 'text-red-500'}`}>
                        Status: {verificationStatus}
                    </p>
                )}
            </div>
            <div className="mt-4">
                <h3 className="text-lg">Dispense Drug</h3>
                <input
                    type="text"
                    placeholder="Batch No"
                    value={batchNo}
                    onChange={(e) => setBatchNo(e.target.value)}
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="Patient ENS"
                    value={patientENS}
                    onChange={(e) => setPatientENS(e.target.value)}
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="Doctor ENS"
                    value={doctorENS}
                    onChange={(e) => setDoctorENS(e.target.value)}
                    className="border p-2 mr-2"
                />
                <button onClick={handleDispense} className="bg-teal-500 text-white p-2">
                    Dispense
                </button>
                {dispenseStatus && (
                    <p className="mt-2 text-teal-600">{dispenseStatus}</p>
                )}
            </div>
        </div>
    );
};

export default PharmacyPortal;