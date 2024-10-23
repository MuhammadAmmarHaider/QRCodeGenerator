import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import landing from "../Assets/landing.jpg";

export default function LandingPage({ setQrCodeUrl }) {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
    const handleGenerate = (event) => {
        event.preventDefault(); 
        setQrCodeUrl(inputValue);
        navigate("/generate");
    };

    return (
        <section className="relative py-12 overflow-hidden bg-gray-900 sm:pb-16 lg:pb-20 xl:pb-24">
            <div className="px-4 mx-auto relative sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
                    <div>
                        <h1 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">Free QR Code Generator.</h1>
                        <p className="mt-4 text-lg font-normal text-gray-300 sm:mt-8">
                            Create and customize QR codes in just a few clicks with Quick QR...
                        </p>

                        <form onSubmit={handleGenerate} className="relative mt-8 rounded-full sm:mt-12">
                            <div className="relative">
                                <div className="absolute rounded-full -inset-px bg-gradient-to-r from-indigo-600 to-purple-600"></div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        placeholder="E.g. https://www.myweb.com/"
                                        className="block w-full py-4 pr-6 text-white placeholder-gray-500 bg-gray-800 border border-transparent rounded-full pl-5 sm:py-5 focus:border-transparent focus:ring-0"
                                    />
                                </div>
                            </div>
                            <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0">
                                <button type="submit" className="inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-white uppercase transition-all duration-200 bg-indigo-600 rounded-full sm:w-auto sm:py-4 hover:bg-indigo-700" >
                                    Generate
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="flex justify-center">
                        <img src={landing} alt="Landing" className="w-3/4 h-auto rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
}
