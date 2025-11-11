import React from 'react';

const MyBooks = () => {
    return (
        <div className="container mx-auto py-10 px-4">
            {/* Title */}
            <h1 className="text-3xl font-bold text-center mb-6 bg-linear-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                My Books
            </h1>

            {/* Responsive Table Wrapper */}
            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="min-w-full border border-gray-200 bg-white">
                    <thead className="bg-blue-200 text-gray-700">
                        <tr>
                            <th className="px-4 py-3 text-left">#</th>
                            <th className="px-4 py-3 text-left">Book Title</th>
                            <th className="px-4 py-3 text-left">Author</th>
                            <th className="px-4 py-3 text-left">Category</th>
                            <th className="px-4 py-3 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-blue-50">
                            <td className="px-4 py-3">1</td>
                            <td className="px-4 py-3">The Great Gatsby</td>
                            <td className="px-4 py-3">F. Scott Fitzgerald</td>
                            <td className="px-4 py-3">Classic</td>
                            <td className="px-4 py-3 flex flex-col sm:flex-row justify-center items-center gap-2">
                                <button className="btn btn-sm bg-yellow-500 text-white hover:bg-yellow-600 w-full sm:w-auto">
                                    Update
                                </button>
                                <button className="btn btn-sm bg-red-500 text-white hover:bg-red-600 w-full sm:w-auto">
                                    Delete
                                </button>
                            </td>
                        </tr>

                        <tr className="hover:bg-blue-50">
                            <td className="px-4 py-3">2</td>
                            <td className="px-4 py-3">Atomic Habits</td>
                            <td className="px-4 py-3">James Clear</td>
                            <td className="px-4 py-3">Self-help</td>
                            <td className="px-4 py-3 flex flex-col sm:flex-row justify-center items-center gap-2">
                                <button className="btn btn-sm bg-yellow-500 text-white hover:bg-yellow-600 w-full sm:w-auto">
                                    Update
                                </button>
                                <button className="btn btn-sm bg-red-500 text-white hover:bg-red-600 w-full sm:w-auto">
                                    Delete
                                </button>
                            </td>
                        </tr>

                        <tr className="hover:bg-blue-50">
                            <td className="px-4 py-3">3</td>
                            <td className="px-4 py-3">Rich Dad Poor Dad</td>
                            <td className="px-4 py-3">Robert Kiyosaki</td>
                            <td className="px-4 py-3">Finance</td>
                            <td className="px-4 py-3 flex flex-col sm:flex-row justify-center items-center gap-2">
                                <button className="btn btn-sm bg-yellow-500 text-white hover:bg-yellow-600 w-full sm:w-auto">
                                    Update
                                </button>
                                <button className="btn btn-sm bg-red-500 text-white hover:bg-red-600 w-full sm:w-auto">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBooks;