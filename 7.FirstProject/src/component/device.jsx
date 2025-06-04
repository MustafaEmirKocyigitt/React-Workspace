import React from 'react'

function device({ device }) {
    const { name, price, description, link, image } = device;
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 p-4 flex flex-col justify-between border border-gray-200">
            <img
                src={image}
                alt={name}
                className="w-full h-48 object-contain mb-4 rounded-xl"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-1 text-center">{name}</h3>
            <p className="text-gray-600 text-sm mb-2 text-center">{description}</p>
            <p className="text-gray-900 font-bold text-center mb-4">{price} $</p>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-500 text-white text-m font-medium text-center py-2 px-4 rounded-xl hover:bg-white hover:text-blue-600 transition"
            >
                Ürünü İncele
            </a>
        </div>
    );
}

export default device