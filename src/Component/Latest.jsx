import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const Latest = () => {
    return (
        <div className='my-12'>
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-linear-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                Latest
            </h2>
            <div className="bg-gray-50 py-10 px-4">
                <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="w-full h-64 md:h-96 bg-gray-300 p-4 overflow-hidden">
                        <img
                            src=""
                            alt=""
                            className="w-full h-full rounded-t-lg object-cover"
                        />
                    </div>


                    <div className="p-6 md:p-10 space-y-4">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-[#18336d]">
                            title
                        </h1>
                        <p className="text-lg text-gray-600">
                            <span className="font-semibold text-gray-800">Author:</span>{" "}
                            author
                        </p>

                        <div className="flex flex-wrap gap-6 text-gray-700">
                            <p>
                                <span className="font-semibold text-gray-800">Genre:</span>{" "}
                                genre
                            </p>
                            <p className='flex items-center gap-2'>
                                <span className="font-semibold text-gray-800">Rating:</span>{" "}
                                <FaStar /> rating /5
                            </p>
                        </div>


                        <div className="pt-6">
                            <Link to="/book-details" className="bg-linear-to-r from-blue-800 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Latest;