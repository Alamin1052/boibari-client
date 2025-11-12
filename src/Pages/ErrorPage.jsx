import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">

            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

            <div className="relative z-10">
                <h1 className="text-9xl font-extrabold text-gray-800 drop-shadow-lg">404</h1>
                <h2 className="text-3xl font-bold text-gray-600 mb-4">Page Not Found</h2>
                <p className="text-gray-500 mb-8 max-w-md">
                    Oops! The page you’re looking for doesn’t exist or has been moved.
                </p>

                <Link
                    to="/"
                    className="px-6 py-3 bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-md font-semibold hover:opacity-90 transition"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;