import React from "react";
import { Link, useLoaderData } from "react-router";

const AllBooks = () => {
    const books = useLoaderData();

    return (
        <div className="container mx-auto py-10 px-4">
            {/* Page Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
                All Books
            </h1>

            {/* Responsive Table */}
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
                        {books.map((book, index) => (
                            <tr key={book._id} className="hover:bg-blue-50">
                                <td className="px-4 py-3">{index + 1}</td>

                                {/* Title + Image */}
                                <td className="px-4 py-3 flex items-center gap-3">
                                    <img
                                        src={book.coverImage || "https://via.placeholder.com/50"}
                                        alt={book.title}
                                        className="w-12 h-16 object-cover rounded"
                                    />
                                    <span className="font-medium">{book.title}</span>
                                </td>

                                <td className="px-4 py-3">{book.author}</td>
                                <td className="px-4 py-3">{book.genre}</td>
                                <td className="px-4 py-3">{book.rating}</td>

                                <td className="px-4 py-3 text-center">
                                    <Link
                                        to={`/book-details/${book._id}`}
                                        className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-3 py-2 rounded-full hover:opacity-90 transition"
                                    >
                                        View Details
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBooks;
