import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo (3).png'
import avatar from '../assets/user.png'
import "./nav.css";
import { AuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';
import { motion } from "framer-motion";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";



const Navbar = () => {
    const { user, LogOutUser } = use(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")
    useEffect(() => {
        const html = document.querySelector('html')
        html.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])


    const handleLogout = () => {
        LogOutUser()
            .then((result) => {
                // console.log(result);
                toast.success('Successfully user logout');
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const Links = <>
        <li><NavLink to="/" className="nav-link font-semibold"> Home</NavLink></li>
        <li><NavLink to="/all-books" className="nav-link font-semibold"> All books</NavLink></li>

        {user && <>
            <li><NavLink to="/add-books" className="nav-link font-semibold"> Add Books</NavLink></li>
            <li><NavLink to="/my-books" className="nav-link font-semibold"> My Books</NavLink></li>
        </>}
        <li><NavLink to="/about" className="nav-link font-semibold">About</NavLink></li>

    </>

    return (
        <div className='sticky top-0 z-50 bg-base-300'>
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-blue-500">
                            {Links}
                        </ul>
                    </div>
                    <Link to="/"><img className="w-8 mr-2 rounded-sm" src={logo} alt="" /></Link>
                    <Link to="/" className=" bg-linear-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent text-2xl font-extrabold">Boibari</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-blue-500 text-md">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end">

                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        animate={{ rotate: theme === "dark" ? 180 : 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="p-2 rounded-full bg-blue-500 text-white mx-2 shadow-md"
                    >
                        {theme === "light" ? <BsMoonStarsFill size={20} /> : <BsSunFill size={20} />}
                    </motion.button>

                    {user ? (
                        <div className="dropdown dropdown-end z-50">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-9 border-2 border-gray-300 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        referrerPolicy="no-referrer"
                                        src={user.photoURL || avatar}
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                            >
                                <div className=" pb-3 border-b border-b-gray-200">
                                    <li className="text-sm font-bold">{user.displayName || 'New user'}</li>
                                    <li className="text-xs">{user.email}</li>
                                </div>
                                <li><NavLink to="/my-profile" className="nav-link font-semibold">My Profile</NavLink></li>
                                <li><NavLink to="/dashboard" className="nav-link font-semibold">Dashboard</NavLink></li>
                                <li>
                                    <button
                                        onClick={handleLogout}
                                        className="btn btn-xs text-left bg-linear-to-r from-blue-800 to-blue-500 text-white"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <Link
                            to={"/login"}
                            className="btn rounded-full border-gray-300  btn-sm bg-linear-to-r from-blue-800 to-blue-500 px-8 text-white"
                        >Login
                        </Link>
                    )}
                </div>
            </div>
        </div >
    );
};

export default Navbar;