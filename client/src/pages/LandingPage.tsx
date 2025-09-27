import React from 'react';

const LandingPage = () => {
    const connectWallet = () => {
        // Logic to connect wallet goes here
        console.log("Wallet connected");
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white">
            <h1 className="text-4xl font-bold text-deep-forest-green mb-4">Welcome to OATH</h1>
            <p className="text-lg text-gray-700 mb-8">A healthcare supply chain platform</p>
            <button 
                onClick={connectWallet} 
                className="bg-medical-aqua text-white py-2 px-4 rounded hover:bg-medical-aqua-dark transition"
            >
                Connect Wallet
            </button>
        </div>
    );
};

export default LandingPage;