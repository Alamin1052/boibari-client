import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayOut = () => {
    return (
        <>
            <Navbar />
            <main className='min-h-screen'>
                <Outlet />
            </main>
            <Footer />
            <Toaster />
        </>
    );
};

export default MainLayOut;