
export default function ContactUs() {
    return (
        <section className="relative py-12 overflow-hidden bg-gray-900 sm:pb-16 lg:pb-20 xl:pb-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center">
                    <h2 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl">Contact Us</h2>
                    <p className="mt-4 text-lg font-normal text-gray-300">
                        We'd love to hear from you! Reach out to us using the information below.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12 mt-12 lg:grid-cols-3">
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold text-white">Phone</h3>
                        <p className="mt-2 text-lg text-gray-300">+923053359359</p>
                    </div>

                    <div className="text-center">
                        <h3 className="text-2xl font-semibold text-white">Email</h3>
                        <p className="mt-2 text-lg text-gray-300">muhammadammarhaider1214@gmail.com</p>
                    </div>

                    <div className="text-center">
                        <h3 className="text-2xl font-semibold text-white">Location</h3>
                        <p className="mt-2 text-lg text-gray-300">
                            Lahore, Pakistan
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <h3 className="text-2xl font-semibold text-white">Follow Us</h3>
                    <p className="mt-2 text-lg text-gray-300">
                        Stay updated with our latest news and features.
                    </p>
                    <div className="flex justify-center mt-4 space-x-4">
                        <a href="#" className="text-indigo-600 hover:text-indigo-700">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-indigo-600 hover:text-indigo-700">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-indigo-600 hover:text-indigo-700">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
