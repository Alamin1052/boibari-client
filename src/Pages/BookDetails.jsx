import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const BookDetails = () => {
    const { id } = useParams();

    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3000/book-details/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setBook(data);
                setLoading(false);
            })
            .catch((err) => console.error(err));
    }, [id]);


    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-blue-700 font-semibold text-xl">Loading book details...</p>
            </div>
        );
    }

    if (!book) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-red-600 font-semibold text-xl">Book not found!</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="w-full h-64 md:h-96 bg-gray-300 overflow-hidden">
                    <img
                        src={book.coverImage}
                        alt={book.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="p-6 md:p-10 space-y-4">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-[#18336d]">
                        {book.title}
                    </h1>
                    <p className="text-lg text-gray-600">
                        <span className="font-semibold text-gray-800">Author:</span> {book.author}
                    </p>

                    <div className="flex flex-wrap gap-6 text-gray-700">
                        <p>
                            <span className="font-semibold text-gray-800">Genre:</span> {book.genre}
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="font-semibold text-gray-800">Rating:</span>{" "}
                            <FaStar className="text-yellow-500" /> {book.rating} /5
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Summary</h2>
                        <p className="text-gray-700 leading-relaxed">{book.summary}</p>
                    </div>

                    <div className="pt-6 border-t">
                        <p className="text-sm text-gray-500">
                            Added by: <span className="font-medium">{book.userEmail}</span>
                        </p>
                    </div>

                    <div className="pt-6">
                        <Link
                            to="/all-books"
                            className="bg-gradient-to-r from-blue-800 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
                        >
                            Back to All Books
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
