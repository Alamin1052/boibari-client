import React, { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Latest = () => {
    const books = useLoaderData();
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);
    return (
        <div className="my-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600">
                Latest Books
            </h2>

            <div data-aos="fade-up" className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {books.map((book) => (
                    <div key={book._id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                        <div className="w-full h-64 bg-gray-800 flex justify-center items-center overflow-hidden">
                            <img
                                src={book.coverImage}
                                alt={book.title}
                                className="w-48 h-60 object-cover rounded-md shadow-md hover:scale-105 transition-transform"
                            />
                        </div>

                        <div className="p-6 space-y-2">
                            <h3 className="text-xl font-bold text-[#18336d]">{book.title}</h3>
                            <p className="text-gray-600">
                                <span className="font-semibold">Author:</span> {book.author}
                            </p>
                            <p className="text-gray-600">
                                <span className="font-semibold">Genre:</span> {book.genre}
                            </p>
                            <p className="flex items-center gap-1 text-gray-600">
                                <FaStar className="text-yellow-500" /> {book.rating} / 5
                            </p>

                            <div className="pt-3">
                                <Link
                                    to={`/book-details/${book._id}`}
                                    className="bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:opacity-90 transition"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Latest;
