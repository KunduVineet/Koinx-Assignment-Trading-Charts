import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {
    const [selected, setSelected] = useState('Overview');
    const navigate = useNavigate();

    return (
        <div>
            <nav className="bg-white">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"></div>
                <div className="relative flex items-center justify-center h-16">
                    <div className="flex space-x-4">
                        <a
                            onClick={() => {
                                setSelected('Overview');
                                navigate('/overview');
                            }}
                            className={`px-3 py-2 rounded-md text-lg font-medium ${
                                selected === 'Overview' ? 'text-blue-500' : 'text-black hover:bg-blue-700 hover:text-white'
                            }`}
                        >
                            Overview
                        </a>
                        <a
                            onClick={() => {
                                setSelected('Fundamentals');
                                navigate('/fundamentals');
                            }}
                            className={`px-3 py-2 rounded-md text-lg font-medium ${
                                selected === 'Fundamentals' ? 'text-blue-500' : 'text-black hover:bg-blue-700 hover:text-white'
                            }`}
                        >
                            Fundamentals
                        </a>
                        <a
                            onClick={() => {
                                setSelected('Sentiments');
                                navigate('/sentiments');
                            }}
                            className={`px-3 py-2 rounded-md text-lg font-medium ${
                                selected === 'Sentiments' ? 'text-blue-500' : 'text-black hover:bg-blue-700 hover:text-white'
                            }`}
                        >
                            Sentiments
                        </a>
                        <a
                            onClick={() => {
                                setSelected('Team');
                                navigate('/team');
                            }}
                            className={`px-3 py-2 rounded-md text-lg font-medium ${
                                selected === 'Team' ? 'text-blue-500' : 'text-black hover:bg-blue-700 hover:text-white'
                            }`}
                        >
                            Team
                        </a>
                        <a
                            onClick={() => {
                                setSelected('About');
                                navigate('/about');
                            }}
                            className={`px-3 py-2 rounded-md text-lg font-medium ${
                                selected === 'About' ? 'text-blue-500' : 'text-black hover:bg-blue-700 hover:text-white'
                            }`}
                        >
                            About
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar2;
