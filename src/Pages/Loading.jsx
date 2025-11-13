import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">

            <h1 className="bg-linear-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent text-6xl md:text-8xl font-extrabold animate-pulse">
                Boibari
            </h1>


            <div className="mt-10 w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

            <p className="mt-6 bg-linear-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent text-lg md:text-2xl animate-bounce">
                Loading your digital library...
            </p>
        </div>
    );
};

export default Loading;