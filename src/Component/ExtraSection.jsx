import React, { useEffect } from 'react';
import img1 from "../assets/fantasy.jpg";
import img2 from "../assets/love.jpg";
import img3 from "../assets/crime.jpg";
import img4 from "../assets/feature.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';


const ExtraSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);
    return (
        <div>

            <section className="py-12 px-4 ">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-linear-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                    Top Genres
                </h2>

                <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
                        <img
                            src={img1}
                            alt="Fantasy"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-5 text-center">
                            <h3 className="text-xl font-extrabold text-[#18336d] mb-2">
                                Fantasy
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Dive into worlds full of dragons, wizards, and endless magic.
                            </p>
                        </div>
                    </div>


                    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
                        <img
                            src={img2}
                            alt="Romance"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-5 text-center">
                            <h3 className="text-xl font-extrabold text-[#18336d] mb-2">
                                Romance
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Heartwarming tales of love, connection, and destiny.
                            </p>
                        </div>
                    </div>


                    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
                        <img
                            src={img3}
                            alt="Mystery"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-5 text-center">
                            <h3 className="text-xl font-extrabold text-[#18336d] mb-2">
                                Mystery
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Solve crimes, uncover secrets, and chase thrilling clues.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 max-sm:text-center ">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-linear-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                    Book of the Week
                </h2>

                <div data-aos="fade-up" className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl shadow-lg p-6">

                    <div className="w-1/2 max-sm:w-full flex justify-center">
                        <img
                            src={img4}
                            alt="Book of the Week"
                            className="w-[300px] h-[450px] md:h-80 object-cover rounded-xl"
                        />
                    </div>


                    <div className="md:w-1/2 space-y-4">
                        <h3 className="text-2xl font-extrabold text-[#18336d]">
                            The Book Thief
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            A powerful story set during World War II, following a young girl
                            who discovers the power of words and books amid chaos. Written by
                            Markus Zusak, this masterpiece blends beauty, tragedy, and hope.
                        </p>
                        <button className="mt-4 px-6 py-3 rounded-full bg-linear-to-r from-blue-800 to-blue-600 text-white font-semibold hover:opacity-90 transition">
                            Read More
                        </button>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default ExtraSection;