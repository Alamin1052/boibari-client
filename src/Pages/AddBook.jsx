import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const AddBook = () => {
    const navigate = useNavigate();
    const { user } = use(AuthContext)
    console.log(user)
    const axiosSecure = useAxiosSecure();
    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            title: e.target.title.value,
            author: e.target.author.value,
            genre: e.target.genre.value,
            rating: e.target.rating.value,
            summary: e.target.summary.value,
            coverImage: e.target.image.value,
            created_at: new Date(),
            userName: user.displayName,
            userEmail: user.email
        }
        axiosSecure.post('/add-book', formData)
            .then((data) => {
                console.log('after secure call', data.data)
                toast.success('Successfully added book')
                navigate('/');
                ;
            })
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center py-10 px-4">
            <div className="w-full max-w-2xl bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-blue-100">

                <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                    Add New Book
                </h1>


                <form onSubmit={handleSubmit} className=" space-y-5">

                    <div>
                        <label className="block font-semibold mb-1 text-gray-700">Book Title</label>
                        <input
                            name='title'
                            type="text"
                            placeholder="Enter book title"
                            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>


                    <div>
                        <label className="block font-semibold mb-1 text-gray-700">Author</label>
                        <input
                            name='author'
                            type="text"
                            placeholder="Enter author name"
                            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>


                    <div>
                        <label className="block font-semibold mb-1 text-gray-700">Genre</label>
                        <input
                            name='genre'
                            type="text"
                            placeholder="Enter genre"
                            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>


                    <div>
                        <label className="block font-semibold mb-1 text-gray-700">Rating</label>
                        <input
                            name='rating'
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
                            name='summary'
                            placeholder="Write a short summary..."
                            rows="4"
                            className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block font-semibold mb-1 text-gray-700">Cover Image URL</label>
                        <input
                            name='image'
                            type="text"
                            placeholder="Enter image link"
                            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-semibold mb-1 text-gray-700">User Email</label>
                            <input
                                defaultValue={user.email}
                                name='email'
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1 text-gray-700">User Name</label>
                            <input
                                defaultValue={user.displayName}
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
        </div >
    );
};

export default AddBook;