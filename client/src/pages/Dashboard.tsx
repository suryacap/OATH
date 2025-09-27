import React from 'react';
import { useSelector } from 'react-redux';
import ManufacturerPortal from '../components/ManufacturerPortal';
import PharmacyPortal from '../components/PharmacyPortal';
import DoctorPortal from '../components/DoctorPortal';
import PatientPortal from '../components/PatientPortal';

const Dashboard = () => {
    const selectedRole = useSelector((state) => state.role);

    const renderPortal = () => {
        switch (selectedRole) {
            case 'Manufacturer':
                return <ManufacturerPortal />;
            case 'Pharmacy':
                return <PharmacyPortal />;
            case 'Doctor':
                return <DoctorPortal />;
            case 'Patient':
                return <PatientPortal />;
            default:
                return <div>Please select a role to continue.</div>;
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            {renderPortal()}
        </div>
    );
};

export default Dashboard;