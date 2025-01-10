import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="bg-white shadow-md">
                <div className="container mx-2 py-1 flex justify-between items-center">
                    {/* Logo */}
                    <img src="./koinx.svg" alt="BTCUSD" className="h-15 w-15" />

                    {/* Right-side navigation links */}
                    <div className="ml-auto hidden md:flex space-x-6 px-2">
                        <a className="text-gray-700 hover:text-gray-900" aria-current="page" href="#">Crypto Taxes</a>
                        <a className="text-gray-700 hover:text-gray-900" href="#">Free Tools</a>
                        <a className="text-gray-700 hover:text-gray-900" href="#">Resource Centre</a>
                    </div>

                    {/* Right-side button */}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-md font-bold py-2 px-4">
                        Get Started
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
