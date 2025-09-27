import React, { useState } from 'react';

const RoleSelection = ({ onRoleSelect }) => {
    const [selectedRole, setSelectedRole] = useState('');

    const handleRoleChange = (role) => {
        setSelectedRole(role);
        onRoleSelect(role);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white">
            <h1 className="text-2xl font-bold mb-4">Select Your Role</h1>
            <div className="flex flex-col space-y-4">
                <button
                    className="bg-[#004D40] text-white py-2 px-4 rounded"
                    onClick={() => handleRoleChange('Manufacturer')}
                >
                    Manufacturer
                </button>
                <button
                    className="bg-[#4DB6AC] text-white py-2 px-4 rounded"
                    onClick={() => handleRoleChange('Pharmacy')}
                >
                    Pharmacy
                </button>
                <button
                    className="bg-[#004D40] text-white py-2 px-4 rounded"
                    onClick={() => handleRoleChange('Doctor')}
                >
                    Doctor
                </button>
                <button
                    className="bg-[#4DB6AC] text-white py-2 px-4 rounded"
                    onClick={() => handleRoleChange('Patient')}
                >
                    Patient
                </button>
            </div>
        </div>
    );
};

export default RoleSelection;