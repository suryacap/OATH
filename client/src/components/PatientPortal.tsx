import React, { useEffect, useState } from 'react';

const PatientPortal = () => {
    const [medicalHistory, setMedicalHistory] = useState([]);

    useEffect(() => {
        // Fetch medical history from the backend API
        const fetchMedicalHistory = async () => {
            const response = await fetch('/api/patient/history'); // Adjust the endpoint as necessary
            const data = await response.json();
            setMedicalHistory(data);
        };

        fetchMedicalHistory();
    }, []);

    return (
        <div className="p-4 bg-white">
            <h1 className="text-2xl font-bold text-deep-forest-green">Patient Medical History</h1>
            <div className="mt-4">
                {medicalHistory.length > 0 ? (
                    <ul className="list-disc pl-5">
                        {medicalHistory.map((event, index) => (
                            <li key={index} className="text-deep-forest-green">
                                {event.date}: {event.description} (Batch ID: {event.batchId})
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No medical history available.</p>
                )}
            </div>
        </div>
    );
};

export default PatientPortal;