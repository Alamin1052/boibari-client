import React, { use, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { formatDistanceToNow } from 'date-fns';
import Loading from "./Loading";


const BookDetails = () => {
    const { id } = useParams();
    const { user } = use(AuthContext)
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newComment, setNewComment] = useState("");

    // Fetch book details
    useEffect(() => {
        fetch(`https://boibari-server.vercel.app/book-details/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setBook(data.result);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    // Fetch comments (real-time updates every 2s)
    useEffect(() => {
        const fetchComments = async () => {
            const res = await fetch(`https://boibari-server.vercel.app/comments/${id}`);
            const data = await res.json();
            setComments(data);
        };
        fetchComments();
        const interval = setInterval(fetchComments, 2000);
        return () => clearInterval(interval);
    }, [id]);

    const handleAddComment = async () => {
        if (!newComment.trim()) return;

        const commentData = {
            bookId: id,
            name: user.displayName || "New User",
            photoURL: user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png",
            comment: newComment,
            date: new Date().toISOString(),
        };


        await fetch(`https://boibari-server.vercel.app/add-comment`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(commentData),
        });


        setComments((prev) => [commentData, ...prev]);
        setNewComment("");
        setIsModalOpen(false);
    };

    if (loading) {
        return (
            <div>
                <Loading />
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
                <div className="w-full h-[400px] md:h-96 bg-gray-800 overflow-hidden flex justify-center items-center mx-auto">
                    <img
                        src={book.coverImage}
                        alt={book.title}
                        className="w-[300px] h-[350px] object-fit rounded-md shadow-2xl hover:scale-105 transition-transform"
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
                        <p className="flex items-center gap-2">
                            <span className="font-semibold text-gray-800">Rating:</span>{" "}
                            <FaStar className="text-yellow-500" /> {book.rating} /5
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Summary</h2>
                        <p className="text-gray-700 leading-relaxed">{book.summary}</p>
                    </div>

                    <div className="pt-6 border-t flex justify-between items-center">
                        <p className="text-sm text-gray-500">
                            Added by: <span className="font-medium">{book.userEmail}</span>
                        </p>
                        <button

                            onClick={() => setIsModalOpen(true)}
                            className="bg-linear-to-r from-blue-800 to-blue-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
                        >
                            Add Comment
                        </button>
                    </div>


                    <div className="mt-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">Comments</h3>
                        {comments.length === 0 ? (
                            <p className="text-gray-600">No comments yet. Be the first!</p>
                        ) : (
                            <div className="space-y-4">
                                {comments.map((c, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-100 p-4 rounded-xl flex gap-3 items-start shadow-sm"
                                    >
                                        <img
                                            src={c.photoURL}
                                            alt="user"
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="font-semibold text-gray-800">{c.name}</p>
                                            <p className="text-gray-700">{c.comment}</p>
                                            <p className="text-xs text-gray-500 mt-1">
                                                {formatDistanceToNow(new Date(c.date), { addSuffix: true })}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
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

            {
                isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white p-6 rounded-xl shadow-lg w-96">
                            <h3 className="text-xl font-bold mb-3 text-gray-800">
                                Add Your Comment
                            </h3>
                            <textarea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Write your comment..."
                                className="w-full border border-gray-300 rounded-md p-3 h-24 focus:outline-none focus:ring focus:ring-blue-300"
                            />
                            <div className="flex justify-end gap-3 mt-4">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleAddComment}
                                    className="px-4 py-2 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition"
                                >
                                    Post Comment
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
};

export default BookDetails;
