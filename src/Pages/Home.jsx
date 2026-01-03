import React from 'react';
import Banner from '../Component/Banner';
import ExtraSection from '../Component/ExtraSection';
import Latest from '../Component/Latest';
import Testimonials from '../Component/Testimonials';
import BlogSection from '../Component/BlogSection';
import Newsletter from '../Component/Newsletter';
import FAQ from '../Component/FAQ';

const Home = () => {
    return (
        <section>
            <Banner />
            <section className='max-w-7xl mx-auto'>
                <Latest />
            </section>
            <section className='max-w-7xl mx-auto'>
                <ExtraSection />
                <BlogSection />
                <Testimonials />
                <FAQ />
                <Newsletter />
            </section>
        </section>

    );
};

export default Home;