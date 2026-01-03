const FAQ = () => {
    return (
        <section className="my-12 max-w-5xl mx-auto max-sm:px-8">
            {/* Section Header */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold bg-linear-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
                    Frequently Asked Questions
                </h2>
                <p className="text-gray-600 mt-2">
                    Answers to common questions about Boibari
                </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
                {/* Item 1 */}
                <div className="collapse collapse-arrow bg-base-100 shadow-md rounded-xl">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg font-semibold">
                        What is Boibari?
                    </div>
                    <div className="collapse-content text-gray-700">
                        <p>
                            Boibari is a full-stack digital library application where users can
                            explore, add, update, and manage books securely.
                        </p>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="collapse collapse-arrow bg-base-100 shadow-md rounded-xl">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg font-semibold">
                        Do I need an account to use Boibari?
                    </div>
                    <div className="collapse-content text-gray-700">
                        <p>
                            You can explore books without an account, but adding or managing
                            books requires authentication.
                        </p>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="collapse collapse-arrow bg-base-100 shadow-md rounded-xl">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg font-semibold">
                        How is my data protected?
                    </div>
                    <div className="collapse-content text-gray-700">
                        <p>
                            Boibari uses Firebase Authentication and token verification to
                            ensure that only authorized users can access and manage their own
                            data.
                        </p>
                    </div>
                </div>

                {/* Item 4 */}
                <div className="collapse collapse-arrow bg-base-100 shadow-md rounded-xl">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg font-semibold">
                        Can I update or delete my books?
                    </div>
                    <div className="collapse-content text-gray-700">
                        <p>
                            Yes. Authenticated users have full control over the books they add,
                            including updating and deleting them.
                        </p>
                    </div>
                </div>

                {/* Item 5 */}
                <div className="collapse collapse-arrow bg-base-100 shadow-md rounded-xl">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg font-semibold">
                        Is Boibari free to use?
                    </div>
                    <div className="collapse-content text-gray-700">
                        <p>
                            Yes, Boibari is free to use. Future updates may introduce optional
                            premium features.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
