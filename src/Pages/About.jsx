import React from "react";

const About = () => {
    return (
        <div className="min-h-screen bg-base-100 py-12 ">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <h1 className="text-4xl font-extrabold text-center mb-6 bg-linear-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
                    About Boibari
                </h1>

                {/* Intro */}
                <p className="text-center text-gray-600 mb-10 text-lg">
                    Boibari is a full-stack digital library web application designed to
                    make exploring, managing, and organizing books simple and secure.
                </p>

                {/* Content */}
                <div className="space-y-8">
                    {/* What You Can Do */}
                    <section>
                        <h2 className="text-2xl font-bold text-blue-600 mb-3">
                            📚 What You Can Do
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Explore a rich collection of books with detailed information</li>
                            <li>Add new books to the library as an authenticated user</li>
                            <li>Update and manage books that belong to you</li>
                            <li>Maintain a personalized digital bookshelf</li>
                        </ul>
                    </section>

                    {/* Security */}
                    <section>
                        <h2 className="text-2xl font-bold text-blue-600 mb-3">
                            🔐 Secure & Personalized
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Boibari ensures secure access using Firebase Authentication and
                            token-based verification. Users can only modify their own books,
                            guaranteeing privacy, data integrity, and a safe user experience.
                        </p>
                    </section>

                    {/* Technology */}
                    <section>
                        <h2 className="text-2xl font-bold text-blue-600 mb-3">
                            ⚙️ Technology Stack
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li><strong>Frontend:</strong> React, Tailwind CSS</li>
                            <li><strong>Backend:</strong> REST API with secure token verification</li>
                            <li><strong>Authentication:</strong> Firebase Authentication</li>
                            <li><strong>Database:</strong> MongoDB / Firestore</li>
                        </ul>
                    </section>

                    {/* Mission */}
                    <section>
                        <h2 className="text-2xl font-bold text-blue-600 mb-3">
                            🎯 Our Mission
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our mission is to build a reliable, user-friendly digital library
                            where readers can focus on discovering and managing books with
                            confidence. Boibari combines modern web technologies with strong
                            security practices to deliver a seamless experience.
                        </p>
                    </section>
                </div>

                {/* Footer line */}
                <div className="mt-12 text-center font-semibold text-blue-600">
                    Boibari — Read. Manage. Discover.
                </div>
            </div>
        </div>
    );
};

export default About;
