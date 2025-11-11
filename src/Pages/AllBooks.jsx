import React from 'react';

const AllBooks = () => {
    return (
        <div className="container mx-auto py-10 px-4">
            {/* Page Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
                All Books
            </h1>

            {/* Responsive Table Wrapper */}
            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="min-w-full border border-gray-200 bg-white">
                    <thead className="bg-blue-200 text-gray-700">
                        <tr>
                            <th className="px-4 py-3 text-left">#</th>
                            <th className="px-4 py-3 text-left">Title</th>
                            <th className="px-4 py-3 text-left">Author</th>
                            <th className="px-4 py-3 text-left">Genre</th>
                            <th className="px-4 py-3 text-left">Rating</th>
                            <th className="px-4 py-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-blue-50">
                            <td className="px-4 py-3">1</td>

                            {/* Title + Image */}
                            <td className="px-4 py-3 flex items-center gap-3">
                                <img
                                    src="https://via.placeholder.com/50"
                                    alt="Book Cover"
                                    className="w-12 h-16 object-cover rounded"
                                />
                                <span className="font-medium">The Great Gatsby</span>
                            </td>

                            <td className="px-4 py-3">F. Scott Fitzgerald</td>
                            <td className="px-4 py-3">Classic</td>
                            <td className="px-4 py-3">4.5</td>
                            <td className="px-4 py-3 text-center">
                                <button className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600 px-3 py-1 rounded-full">
                                    View Details
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBooks;