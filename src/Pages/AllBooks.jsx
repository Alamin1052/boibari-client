import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

const AllBooks = () => {
    const books = useLoaderData();
    const [sortOrder, setSortOrder] = useState("");


    const sortedBooks = [...books].sort((a, b) => {
        if (sortOrder === "asc") return a.rating - b.rating;
        if (sortOrder === "desc") return b.rating - a.rating;
        return 0;
    });

    return (
        <div className="container mx-auto py-10 px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
                    All Books
                    <span className="text-md text-amber-600">
                        ({books.length} total)
                    </span>
                </h1>


                <div className="mt-4 md:mt-0">
                    <select
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">Sort by Rating</option>
                        <option value="asc">Low → High</option>
                        <option value="desc">High → Low</option>
                    </select>
                </div>
            </div>

            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="min-w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
                    <thead className="bg-blue-200 dark:bg-gray-800 text-gray-700 dark:text-gray-100">
                        <tr>
                            <th className="px-4 py-3 text-left">#</th>
                            <th className="px-4 py-3 text-left">Title</th>
                            <th className="px-4 py-3 text-left">Author</th>
                            <th className="px-4 py-3 text-left">Genre</th>
                            <th className="px-4 py-3 text-left">Rating</th>
                            <th className="px-4 py-3 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {sortedBooks.map((book, index) => (
                            <tr
                                key={book._id}
                                className="hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                            >
                                <td className="px-4 py-3">{index + 1}</td>

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
                                <td className="px-4 py-3 font-semibold text-yellow-600">
                                    ⭐ {book.rating}
                                </td>

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
        </div >
    );
};

export default AllBooks;
