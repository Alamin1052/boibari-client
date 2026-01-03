const Newsletter = () => {
    return (
        <section className="my-12 max-sm:mx-8 bg-linear-to-r from-blue-900 to-blue-600 rounded-2xl p-10 text-white">
            <div className="max-w-4xl mx-auto text-center">
                {/* Title */}
                <h2 className="text-3xl font-extrabold mb-3">
                    Subscribe to Our Newsletter
                </h2>
                <p className="text-blue-100 mb-8">
                    Get the latest book updates, featured reads, and Boibari news
                    delivered straight to your inbox.
                </p>

                {/* Form */}
                <form className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        required
                        className="w-full sm:w-96 px-5 py-3 rounded-full text-white"
                    />
                    <button
                        type="submit"
                        className="px-8 py-3 rounded-full bg-white text-blue-700 font-semibold shadow-md hover:bg-blue-100 transition"
                    >
                        Subscribe
                    </button>
                </form>

                {/* Note */}
                <p className="text-sm text-blue-200 mt-4">
                    No spam. Unsubscribe anytime.
                </p>
            </div>
        </section>
    );
};

export default Newsletter;
