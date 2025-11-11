import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo (3).png'
import "./nav.css";

const Navbar = () => {
    return (
        <div className='bg-base-100 container mx-auto'>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/" className="nav-link font-semibold"> Home</NavLink></li>
                            <li><NavLink to="/all-books" className="nav-link font-semibold"> All books</NavLink></li>
                            <li><NavLink to="/add-books" className="nav-link font-semibold"> Add Books</NavLink></li>
                            <li><NavLink to="/my-books" className="nav-link font-semibold"> My Books</NavLink></li>
                        </ul>
                    </div>
                    <Link to="/"><img className="w-8 mr-2" src={logo} alt="" /></Link>
                    <Link to="/" className=" bg-linear-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent text-xl font-extrabold">Boibari</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/" className="nav-link font-semibold"> Home</NavLink></li>
                        <li><NavLink to="/all-books" className="nav-link font-semibold"> All books</NavLink></li>
                        <li><NavLink to="/add-books" className="nav-link font-semibold"> Add Books</NavLink></li>
                        <li><NavLink to="/my-books" className="nav-link font-semibold"> My Books</NavLink></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login" className=" btn bg-linear-to-r from-blue-800 to-blue-600 text-white px-8">Login</Link>
                </div>
            </div>
        </div >
    );
};

export default Navbar;