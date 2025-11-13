import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import Loading from './Loading';


const UpdateBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const [book, setBook] = useState(null);

    useEffect(() => {
        fetch(`https://boibari-server.vercel.app/book-details/${id}`)
            .then(res => res.json())
            .then(data => setBook(data.result))
            .catch(err => console.error(err));
    }, [id]);

    if (!book) return <div className="text-center mt-20"><Loading /></div>;



    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            title: e.target.title.value,
            author: e.target.author.value,
            genre: e.target.genre.value,
            rating: e.target.rating.value,
            summary: e.target.summary.value,
            coverImage: e.target.coverImage.value,
        }
        axiosSecure.put(`/update-book/${id}`, formData)
            .then((data) => {
                console.log('after secure call', data.data)
                toast.success('Successfully updated book')
                navigate('/');
                ;
            })
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center py-10 px-4">
            <div className="w-full max-w-2xl bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-blue-100">
                <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                    Update Book
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <div>
                        <label className="block font-semibold mb-1 text-gray-700">Book Title</label>
                        <input
                            name="title"
                            defaultValue={book.title}
                            type="text"
                            placeholder="Enter book title"
                            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1 text-gray-700">Author</label>
                        <input
                            name="author"
                            defaultValue={book.author}

                            type="text"
                            placeholder="Enter author name"
                            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1 text-gray-700">Genre</label>
                        <input
                            name="genre"
                            defaultValue={book.genre}
                            type="text"
                            placeholder="Enter genre"
                            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1 text-gray-700">Rating</label>
                        <input
                            name="rating"
                            defaultValue={book.rating}
                            type="number"
                            placeholder="Rate (1–5)"
                            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1 text-gray-700">Summary</label>
                        <textarea
                            name="summary"
                            defaultValue={book.summary}
                            placeholder="Write a short summary..."
                            rows="4"
                            className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block font-semibold mb-1 text-gray-700">Cover Image URL</label>
                        <input
                            name="coverImage"
                            defaultValue={book.coverImage}
                            type="text"
                            placeholder="Enter image link"
                            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div className="text-center pt-4">
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-10 py-3 bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold rounded-full hover:opacity-90 transition duration-300"
                        >
                            Update Book
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default UpdateBook;
