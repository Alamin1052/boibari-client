import { Link } from "react-router";
import img1 from '../assets/digital-library.jpg'
import img2 from '../assets/Security.jpg'
import img3 from '../assets/Dev.png'

const BlogSection = () => {
    return (
        <section className="my-12 max-sm:px-8">
            {/* Section Header */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold bg-linear-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
                    Latest Blogs
                </h2>
                <p className="text-gray-600 mt-2">
                    Insights, tips, and updates from the Boibari team
                </p>
            </div>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Blog Card 1 */}
                <div className="bg-base-100 shadow-md rounded-xl overflow-hidden h-full flex flex-col">
                    <img
                        src={img1}
                        alt="Blog"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6 flex flex-col flex-grow">
                        <span className="text-sm text-blue-600 font-semibold">
                            Digital Library
                        </span>
                        <h3 className="text-xl font-bold mt-2">
                            Why Digital Libraries Are the Future
                        </h3>
                        <p className="text-gray-600 mt-3 flex-grow">
                            Discover how digital libraries like Boibari are transforming the
                            way people read and manage books.
                        </p>
                        <Link
                            to=""
                            className="mt-4 text-blue-600 font-semibold hover:underline"
                        >
                            Read More →
                        </Link>
                    </div>
                </div>

                {/* Blog Card 2 */}
                <div className="bg-base-100 shadow-md rounded-xl overflow-hidden h-full flex flex-col">
                    <img
                        src={img2}
                        alt="Blog"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6 flex flex-col flex-grow">
                        <span className="text-sm text-blue-600 font-semibold">
                            Security
                        </span>
                        <h3 className="text-xl font-bold mt-2">
                            How Boibari Keeps Your Data Secure
                        </h3>
                        <p className="text-gray-600 mt-3 flex-grow">
                            Learn how Firebase Authentication and token verification protect
                            user data and ensure secure access.
                        </p>
                        <Link
                            to=""
                            className="mt-4 text-blue-600 font-semibold hover:underline"
                        >
                            Read More →
                        </Link>
                    </div>
                </div>

                {/* Blog Card 3 */}
                <div className="bg-base-100 shadow-md rounded-xl overflow-hidden h-full flex flex-col">
                    <img
                        src={img3}
                        alt="Blog"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6 flex flex-col flex-grow">
                        <span className="text-sm text-blue-600 font-semibold">
                            Development
                        </span>
                        <h3 className="text-xl font-bold mt-2">
                            Building Boibari: A Full-Stack Journey
                        </h3>
                        <p className="text-gray-600 mt-3 flex-grow">
                            A behind-the-scenes look at how Boibari was built using modern
                            full-stack technologies.
                        </p>
                        <Link
                            to=""
                            className="mt-4 text-blue-600 font-semibold hover:underline"
                        >
                            Read More →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
