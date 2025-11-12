import React from 'react';
import { Link } from 'react-router';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from "../assets/banner1.jpeg";
import img2 from "../assets/banner2.jpg";

const Banner = () => {
    const slides = [img1, img2];

    return (
        <div className="w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop
                className="w-full h-[400px] md:h-[550px]"
            >
                {slides.map((img, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="relative w-full h-full">

                            <img
                                src={img}
                                alt={`Slide ${idx + 1}`}
                                className="absolute inset-0 w-full h-full object-cover object-center"
                            />


                            <div className="absolute inset-0  flex flex-col items-center justify-center text-center px-4">
                                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
                                    Welcome to Boibari
                                </h1>
                                <p className="text-lg md:text-2xl text-white mb-6 drop-shadow-lg">
                                    Discover, Add & Manage Your Favorite Books
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        to="/all-books"
                                        className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300 animate-bounce"
                                    >
                                        All Books
                                    </Link>
                                    <Link
                                        to="/add-books"
                                        className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition duration-300 animate-bounce delay-200 ease-in-out"
                                    >
                                        Create Book
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
