import React from 'react';

const AddBook = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center py-10 px-4">
            <div className="w-full max-w-3xl bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-blue-100">

                <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                    Add New Book
                </h1>


                <form className="space-y-5">

                    <div>
                        <label className="block font-semibold mb-1 text-gray-700">Book Title</label>
                        <input
                            type="text"
                            placeholder="Enter book title"
                            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>


                    <div>
                        <label className="block font-semibold mb-1 text-gray-700">Author</label>
                        <input
                            type="text"
                            placeholder="Enter author name"
                            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>


                    <div>
                        <label className="block font-semibold mb-1 text-gray-700">Genre</label>
                        <input
                            type="text"
                            placeholder="Enter genre"
                            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>


                    <div>
                        <label className="block font-semibold mb-1 text-gray-700">Rating</label>
                        <input
                            type="number"
                            min="1"
                            max="5"
                            placeholder="Rate (1–5)"
                            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1 text-gray-700">Summary</label>
                        <textarea
                            placeholder="Write a short summary..."
                            rows="4"
                            className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block font-semibold mb-1 text-gray-700">Cover Image URL</label>
                        <input
                            type="text"
                            placeholder="Enter image link"
                            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-semibold mb-1 text-gray-700">User Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1 text-gray-700">User Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                    </div>

                    <div className="text-center pt-4">
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-10 py-3 bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold rounded-full hover:opacity-90 transition duration-300"
                        >
                            Add Book
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBook;