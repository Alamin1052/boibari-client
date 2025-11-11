import React from 'react';
import img from '../assets/login.jpeg'
import { Link } from 'react-router';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        <div className='container mx-auto relative'>
            <div className='flex justify-center items-center py-12 max-sm:px-5'>
                <img className="w-full h-[500px] rounded-2xl object-cover" src={img} alt="" />
            </div>
            <div className='max-w-sm bg-blue-300/50 p-8 rounded-2xl absolute top-25 right-12  border-1 border-white'>
                <h1 className="text-3xl font-bold text-center">Login</h1>
                <form >
                    <fieldset className="fieldset">

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
                        <div>
                            <a className="link link-hover">Forgot password?</a>
                        </div>
                        <button className="btn text-white mt-4 rounded-full bg-linear-to-r from-blue-800 to-blue-600">
                            Login
                        </button>
                    </fieldset>
                </form>
                <div className='flex flex-col justify-center text-center'>
                    <button
                        className="btn bg-black rounded-full text-white border-[#e5e5e5]"
                    >
                        <FaGoogle></FaGoogle>
                        Login with Google
                    </button>
                    <p className="text-center">
                        New to our website? Please  <Link
                            className="text-blue-800 underline hover:text-red-500"
                            to="/register"
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div >
    );
};

export default Login;