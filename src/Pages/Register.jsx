import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router';
import img from '../assets/login.jpeg'

const Register = () => {
    return (
        <div className='container mx-auto relative'>
            <div className='flex justify-center items-center py-12 max-sm:px-5'>
                <img className="w-full h-[550px] rounded-2xl object-cover" src={img} alt="" />
            </div>
            <div className='max-w-md bg-blue-300/50 px-8 py-4 rounded-2xl absolute top-20  right-12 border-1 border-white'>
                <h1 className="text-3xl font-bold text-center">Register</h1>
                <form >
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input
                            type="text"
                            name="displayName"
                            className="input rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Name"
                        />

                        <label className="label">PhotoURL</label>
                        <input
                            type="text"
                            name="photoURL"
                            className="input rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Photo URL"
                        />
                        <label className="label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Email"
                        />

                        <label className="label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Password"
                        />
                        <button className="btn text-white mt-4 rounded-full bg-linear-to-r from-blue-800 to-blue-600">
                            Register
                        </button>
                    </fieldset>
                </form>
                <div className='flex flex-col justify-center text-center'>
                    <button
                        className="btn bg-black rounded-full text-white border-[#e5e5e5]"
                    >
                        <FaGoogle />
                        Register with Google
                    </button>
                    <p className="text-center">
                        Already have an account? Please <Link
                            className="text-blue-800 underline hover:text-red-500"
                            to="/login"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div >
    );
};

export default Register;