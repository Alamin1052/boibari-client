import React from 'react';
import Banner from '../Component/Banner';
import ExtraSection from '../Component/ExtraSection';

const Home = () => {
    return (
        <section>
            <Banner />
            <section className='container mx-auto'>
                <ExtraSection />
            </section>
        </section>

    );
};

export default Home;