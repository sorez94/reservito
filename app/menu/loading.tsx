"use client";
import React from "react";

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col items-center space-y-4">
                <div className="relative flex items-center justify-center h-16 w-16">
                    <div className="absolute animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                    <div className="absolute animate-ping rounded-full h-12 w-12 bg-blue-500 opacity-50"></div>
                </div>
                <p className="text-lg font-semibold text-gray-600 animate-pulse">درحال دریافت اطلاعات از سرور. لطفا شکیبا باشید...</p>
            </div>
        </div>
    );
};

export default Loading;