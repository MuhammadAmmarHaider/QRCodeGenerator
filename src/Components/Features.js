import {FaMousePointer,FaMagic,FaShieldAlt} from 'react-icons/fa'

export default function Features()
{
    return (
        <div className="pb-10 mt-12">
        <h3 className="text-2xl font-semibold text-white text-center">Why Choose Us?</h3>
        <div className="grid grid-cols-1 gap-12 mt-8 lg:grid-cols-3">
            <div className="text-center">
                <FaMousePointer className="w-12 h-12 mx-auto text-indigo-600" aria-hidden="true" />
                <h4 className="mt-4 text-xl font-semibold text-indigo-600">User-Friendly</h4>
                <p className="mt-2 text-lg text-gray-300">
                    Our platform is designed for ease of use, allowing anyone to generate QR codes in just a few clicks.
                </p>
            </div>

            <div className="text-center">
                <FaMagic className="w-12 h-12 mx-auto text-indigo-600" aria-hidden="true" /> 
                <h4 className="mt-4 text-xl font-semibold text-indigo-600">Customizable</h4>
                <p className="mt-2 text-lg text-gray-300">
                    Personalize your QR codes with colors, logos, and other features to fit your brand identity.
                </p>
            </div>
            <div className="text-center">
                <FaShieldAlt className="w-12 h-12 mx-auto text-indigo-600" aria-hidden="true" />
                <h4 className="mt-4 text-xl font-semibold text-indigo-600">Secure</h4>
                <p className="mt-2 text-lg text-gray-300">
                    We prioritize your privacy and security, ensuring that your data is protected while you create QR codes.
                </p>
            </div>
        </div>
    </div>
    );
}