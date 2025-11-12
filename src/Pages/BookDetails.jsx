import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookDetails = () => {
    const book = {
        title: "The Midnight Library",
        author: "Matt Haig",
        genre: "Fiction",
        rating: 4.6,
        summary:
            "A beautifully written novel about regret, hope, and the choices that make up a life. Nora Seed discovers a magical library where each book represents a different version of her life.",
        coverImage:
            "https://i.ibb.co/ThXq3Mf/midnight-library.jpg",
        userEmail: "reader@example.com",
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="w-full h-64 md:h-96 bg-gray-300 p-4 overflow-hidden">
                    <img
                        src={book.coverImage}
                        alt={book.title}
                        className="w-full h-full rounded-t-lg object-cover"
                    />
                </div>


                <div className="p-6 md:p-10 space-y-4">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-[#18336d]">
                        {book.title}
                    </h1>
                    <p className="text-lg text-gray-600">
                        <span className="font-semibold text-gray-800">Author:</span>{" "}
                        {book.author}
                    </p>

                    <div className="flex flex-wrap gap-6 text-gray-700">
                        <p>
                            <span className="font-semibold text-gray-800">Genre:</span>{" "}
                            {book.genre}
                        </p>
                        <p className='flex items-center gap-2'>
                            <span className="font-semibold text-gray-800">Rating:</span>{" "}
                            <FaStar /> {book.rating} /5
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            Summary
                        </h2>
                        <p className="text-gray-700 leading-relaxed">{book.summary}</p>
                    </div>

                    <div className="pt-6 border-t">
                        <p className="text-sm text-gray-500">
                            Added by: <span className="font-medium">{book.userEmail}</span>
                        </p>
                    </div>

                    <div className="pt-6">
                        <Link to="/all-books" className="bg-linear-to-r from-blue-800 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
                            Back to All Books
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;