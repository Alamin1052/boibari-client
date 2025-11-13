import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const MyBooks = () => {
    const { user } = useContext(AuthContext);
    const [book, setBook] = useState([]);

    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (user?.email) {
            axiosSecure.get(`/my-books?email=${user.email}`)
                .then(data => {
                    console.log('secure books data', data.data);
                    setBook(data.data);
                })
                .catch(err => console.error(err));
        }
    }, [user, axiosSecure]);

    const handleDeleteBook = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/books/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.result.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your book has been deleted.",
                                icon: "success"
                            });
                            const remainingBooks = book.filter(b => b._id !== _id);
                            setBook(remainingBooks);
                        }
                    });
            }
        });
    };

    return (
        <div className="container min-h-screen mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold text-center mb-6 bg-linear-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                My Books
            </h1>

            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="min-w-full border border-gray-200 bg-white">
                    <thead className="bg-blue-200 text-gray-700">
                        <tr>
                            <th className="px-4 py-3 text-left">#</th>
                            <th className="px-4 py-3 text-left">Book Title</th>
                            <th className="px-4 py-3 text-left">Author</th>
                            <th className="px-4 py-3 text-left">Genre</th>
                            <th className="px-4 py-3 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {book.map((b, index) => (
                            <tr key={b._id} className="hover:bg-blue-50">
                                <td className="px-4 py-3">{index + 1}</td>
                                <td className="px-4 py-3">{b.title}</td>
                                <td className="px-4 py-3">{b.author}</td>
                                <td className="px-4 py-3">{b.genre}</td>
                                <td className="px-4 py-3 flex flex-col sm:flex-row justify-center items-center gap-2">
                                    <Link
                                        to={`/update-book/${b._id}`}
                                        className="btn btn-sm bg-yellow-500 text-white hover:bg-yellow-600 w-full sm:w-auto"
                                    >
                                        Update
                                    </Link>
                                    <button
                                        onClick={() => handleDeleteBook(b._id)}
                                        className="btn btn-sm bg-red-500 text-white hover:bg-red-600 w-full sm:w-auto"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBooks;
