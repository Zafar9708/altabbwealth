"use client"
import React from 'react';

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
            <div className="text-center">
                {/* Logo */}
                <div className="w-32 h-32 mx-auto mb-6">
                    <img
                        src="/Logo.png"
                        alt="ALTABB Wealth Logo"
                        width={128}
                        height={128}
                        className="object-contain animate-pulse"
                    />
                </div>
                
                {/* Text */}
                <h1 className="text-4xl font-bold text-yellow-600 mb-4">
                    ALTABB WEALTH
                </h1>
                <p className="text-xl text-gray-600">
                    Building Wealth, Creating Legacy.
                </p>
            </div>
        </div>
    );
};

export default LoadingScreen;