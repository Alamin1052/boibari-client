import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';

const MainLayOut = () => {
    return (
        <div>
            <section>
                <Navbar></Navbar>
            </section>
            <section className='h-screen bg-[#F9F6F1]'>
                <Outlet></Outlet>
            </section>
            <section>
                <Footer></Footer>
            </section>

        </div>
    );
};

export default MainLayOut;