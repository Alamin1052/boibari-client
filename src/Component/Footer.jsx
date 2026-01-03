import React from 'react';
import logo from '../assets/logo (3).png'
import { Link, NavLink } from 'react-router';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const Footer = () => {
    return (
        <div className='bg-base-500 shadow-gray-800 shadow-2xl max-sm:px-8'>
            <footer className="footer container mx-auto sm:footer-horizontal flex justify-between max-sm:flex-col text-base-content py-10">
                <aside className='flex flex-col max-sm:justify-center max-sm:items-center max-sm:mx-auto'>
                    <Link to="/"><img className="w-15 rounded-sm" src={logo} alt="" /></Link>
                    <Link to="/" className=" bg-linear-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent text-2xl font-extrabold">Boibari</Link>
                </aside>
                <nav>
                    <h6 className="footer-title">Pages</h6>
                    <li className="list-none"><NavLink to="/" > Home</NavLink></li>
                    <li className="list-none"><NavLink to="/all-books"> All books</NavLink></li>
                    <li className="list-none"><NavLink to="/add-books"> Add Books</NavLink></li>
                    <li className="list-none"><NavLink to="/my-books" > My Books</NavLink></li>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Link</h6>
                    <div className='flex gap-2 items-center'>
                        <FaFacebook />
                        <a className="link link-hover">@fb-boibari</a>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FaInstagram />
                        <a className="link link-hover">@insta-boibari</a>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FaXTwitter />
                        <a className="link link-hover">@x-boibari</a>
                    </div>

                </nav>
            </footer>
        </div >
    );
};

export default Footer;