import React from 'react';
import Banner from '../Component/Banner';
import ExtraSection from '../Component/ExtraSection';
import Latest from '../Component/Latest';

const Home = () => {
    return (
        <section>
            <Banner />
            <section className='container mx-auto'>
                <Latest />
            </section>
            <section className='container mx-auto'>
                <ExtraSection />
            </section>
        </section>

    );
};

export default Home;