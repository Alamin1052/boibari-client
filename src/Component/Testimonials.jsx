const Testimonials = () => {
    return (
        <section className="my-12 max-sm:px-8">
            {/* Section Title */}
            <h2 className="text-3xl font-extrabold text-center mb-4 bg-linear-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
                What Our Users Say
            </h2>
            <p className="text-center text-gray-600 mb-10">
                Feedback from readers who love using Boibari
            </p>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-base-100 shadow-md rounded-xl p-6 h-full flex flex-col">
                    <p className="text-gray-700 flex-grow">
                        “Boibari has completely changed how I manage my personal book
                        collection. The interface is simple, fast, and secure.”
                    </p>
                    <div className="mt-4">
                        <h4 className="font-bold text-blue-600">Ahsan Habib</h4>
                        <span className="text-sm text-gray-500">Book Enthusiast</span>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-base-100 shadow-md rounded-xl p-6 h-full flex flex-col">
                    <p className="text-gray-700 flex-grow">
                        “I love that I can add and update only my own books. Firebase
                        authentication makes the platform feel very safe.”
                    </p>
                    <div className="mt-4">
                        <h4 className="font-bold text-blue-600">Nusrat Jahan</h4>
                        <span className="text-sm text-gray-500">Student & Reader</span>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-base-100 shadow-md rounded-xl p-6 h-full flex flex-col">
                    <p className="text-gray-700 flex-grow">
                        “A perfect digital library for modern readers. Clean design,
                        smooth performance, and great user experience.”
                    </p>
                    <div className="mt-4">
                        <h4 className="font-bold text-blue-600">Rahim Uddin</h4>
                        <span className="text-sm text-gray-500">Web Developer</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
