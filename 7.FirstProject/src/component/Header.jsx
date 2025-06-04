import React from 'react'
import '../../css/Header.css'

function Header() {
    return (
        <header class="bg-gray-900 text-white text-lg">
            <div class="max-w-7xl mx-auto px-4">
                <nav class="flex justify-center h-15 items-center space-x-4 md:space-x-6">
                    <ul class="flex flex-wrap justify-center items-center space-x-4 md:space-x-6 overflow-x-auto whitespace-nowrap py-2">
                        <li>
                            <a href="#" class="hover:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2C6.134 2 3 5.134 3 9c0 2.84 1.757 5.268 4.243 6.24-.059-.532-.093-1.116-.093-1.716 0-1.213.332-2.116.89-2.828-2.626-.3-3.243-1.745-3.243-3.162 0-.702.259-1.34.675-1.836.067-.08.224-.057.271.037.348.675 1.004 1.34 1.811 1.34.548 0 1.035-.208 1.383-.567.347-.358.563-.843.563-1.433 0-.701-.348-1.265-.837-1.663-.49-.398-1.128-.59-1.82-.59C6.582 3.9 8.16 3 10 3s3.418.9 4.131 2.29c-.692 0-1.33.192-1.82.59-.49.398-.837.962-.837 1.663 0 .59.216 1.075.5s63 1.433.348.359.835.567 1.383.567.807 0 1.463-.665 1.811-1.34.047-.094.204-.117.271-.037.416.496.675 1.134.675 1.836 0 1.417-.617 2.862-3.243 3.162.558.712.89 1.615.89 2.828 0 .6-.034 1.184-.093 1.716C15.243 14.268 17 11.84 17 9c0-3.866-3.134-7-7-7z" />
                                </svg>
                            </a>
                        </li>
                        <li><a href="#" class="hover:text-gray-400">iPhone</a></li>
                        <li><a href="#" class="hover:text-gray-400">Store</a></li>
                        <li><a href="#" class="hover:text-gray-400">Mac</a></li>
                        <li><a href="#" class="hover:text-gray-400">iPad</a></li>
                        <li>
                            <a href="#" class="hover:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header