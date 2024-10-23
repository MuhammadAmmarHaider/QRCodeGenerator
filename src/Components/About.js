import {FaUsers,FaEye} from 'react-icons/fa';

export default function About() {
    return (
        <section className="relative py-12 overflow-hidden bg-gray-900 sm:pb-16 lg:pb-20 xl:pb-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center">
                    <h2 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl">About Us</h2>
                    <p className="mt-4 text-lg font-normal text-gray-300">
                        Empowering you to create customized QR codes quickly and easily with our user-friendly tools.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                        <div className="flex items-center">
                            <FaUsers className="w-12 h-12 text-indigo-600" aria-hidden="true" />
                            <h3 className="ml-4 text-2xl font-semibold text-white">Who We Are</h3>
                        </div>
                        <p className="mt-4 text-lg text-gray-300">
                            Quick QR is a leading provider of QR code generation services, enabling businesses and individuals to create 
                            unique QR codes that suit their branding and purposes. Our mission is to simplify the way people share information 
                            by making QR code generation accessible to everyone.
                        </p>
                    </div>

                    <div>
                        <div className="flex items-center">
                            <FaEye className="w-12 h-12 text-indigo-600" aria-hidden="true" />
                            <h3 className="ml-4 text-2xl font-semibold text-white">Our Vision</h3>
                        </div>
                        <p className="mt-4 text-lg text-gray-300">
                            We envision a world where sharing information is seamless and efficient. By leveraging the power of QR codes, 
                            we aim to bridge the gap between digital and physical spaces, making interactions more interactive and meaningful.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
