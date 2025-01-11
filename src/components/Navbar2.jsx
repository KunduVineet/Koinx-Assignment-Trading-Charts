import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {
    const [selected, setSelected] = React.useState('Overview');
    const navigate = useNavigate();

    const handleNavigation = (item) => {
        setSelected(item);
        navigate(`/${item.toLowerCase()}`); // Navigate to the appropriate route
    };

    return (
        <div>
            <nav className="bg-white">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"></div>
                <div className="relative flex items-center justify-center h-16">
                    <div className="flex space-x-4">
                        {['Overview', 'Fundamentals', 'News Insights', 'Sentiments', 'Team', 'About','Technicals', 'Tokenomics'].map((item) => (
                            <a
                                key={item}
                                onClick={() => handleNavigation(item)}
                                className={`px-3 py-2 rounded-md text-lg font-medium ${
                                    selected === item ? 'text-blue-500' : 'text-black hover:bg-blue-700 hover:text-white'
                                }`}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar2;
