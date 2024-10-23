import {FaPencilAlt} from 'react-icons/fa';


export default function Team()
{
    return (
        <div className="pb-10 mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="lg:col-span-2 flex flex-col items-center">
            <div className="flex items-center justify-center">
                <FaPencilAlt className="w-12 h-12 text-indigo-600" aria-hidden="true" />
                <h3 className="ml-4 text-2xl font-semibold text-white">Our Team</h3>
            </div>
            <p className="mt-4 text-lg text-gray-300 text-center max-w-2xl">
                Our dedicated team of developers, designers, and support staff work tirelessly to ensure that Quick QR delivers the best QR code generation experience. We are passionate about technology and committed to continuous improvement.
            </p>
        </div>
    </div>
    );
}