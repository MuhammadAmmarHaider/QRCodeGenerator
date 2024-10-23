import { Link } from 'react-router-dom';
import logo from "../Assets/logo.jpg";

export default function Header({ onLogin }) {
    return (
        <header>
            <nav className="bg-[#1E1F36] border-gray-700 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img src={logo} className="mr-3 h-6 sm:h-9 rounded-lg" alt="Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-[#E0E0E0]">Quick QR</span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link to="/login" className="text-[#E0E0E0] hover:bg-[#23243C] focus:ring-4 focus:ring-[#4FD1C5] font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none" onClick={onLogin}>
                            Log in
                        </Link>
                        <Link to="/signup" className="text-white bg-[#9F7AEA] hover:bg-[#F473B9] focus:ring-4 focus:ring-[#FFB6B9] font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                            Sign Up
                        </Link>
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-[#A3A3A3] rounded-lg lg:hidden hover:bg-[#23243C] focus:outline-none focus:ring-2 focus:ring-[#4FD1C5]" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link to="/" className="block py-2 pr-4 pl-3 text-white rounded bg-[#9F7AEA] lg:bg-transparent lg:text-[#9F7AEA] lg:p-0">Home</Link>
                            </li>
                            <li>
                                <Link to="/features" className="block py-2 pr-4 pl-3 text-[#A3A3A3] border-b border-gray-700 hover:bg-[#23243C] lg:hover:bg-transparent lg:border-0 lg:hover:text-[#F473B9] lg:p-0">Features</Link>
                            </li>
                            <li>
                                <Link to="/company" className="block py-2 pr-4 pl-3 text-[#A3A3A3] border-b border-gray-700 hover:bg-[#23243C] lg:hover:bg-transparent lg:border-0 lg:hover:text-[#F473B9] lg:p-0">Company</Link>
                            </li>
                            <li>
                                <Link to="/team" className="block py-2 pr-4 pl-3 text-[#A3A3A3] border-b border-gray-700 hover:bg-[#23243C] lg:hover:bg-transparent lg:border-0 lg:hover:text-[#F473B9] lg:p-0">Team</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="block py-2 pr-4 pl-3 text-[#A3A3A3] border-b border-gray-700 hover:bg-[#23243C] lg:hover:bg-transparent lg:border-0 lg:hover:text-[#F473B9] lg:p-0">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
