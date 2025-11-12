import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayOut = () => {
    return (
        <div className='min-h-screen bg-base-200 text-base-content'>
            <section>
                <Navbar></Navbar>
            </section>
            <section>
                <Outlet></Outlet>
            </section>
            <section>
                <Footer></Footer>
            </section>
            <Toaster />
        </div>
    );
};

export default MainLayOut;