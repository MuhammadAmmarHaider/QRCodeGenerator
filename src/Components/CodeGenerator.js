import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

export default function QrCodeGenerator({ url }) {
    return (
        <div className="flex flex-col items-center mt-8 p-5">
            <h2 className="text-3xl font-bold text-pink-500 mb-4">Your QR Code is:</h2>
            <div className="border-4 border-indigo-600 p-6 rounded-lg shadow-lg mb-4">
                <QRCodeCanvas value={url} size={256} />
            </div>
            <button className="bg-pink-500 text-white py-2 px-4 rounded mt-4 hover:bg-pink-600 transition duration-300">
                Download QR Code
            </button>
        </div>
    );
}
