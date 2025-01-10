import React from 'react'

const Navbar2 = () => {
const [selected, setSelected] = React.useState('Overview');

return (
    <div>
        <nav className="bg-white">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"></div>
            <div className="relative flex items-center justify-center h-16">
                <div className="flex space-x-4">
                    {['Overview', 'Fundamentals', 'News Insights', 'Sentiments', 'Team', 'Technicals', 'Tokenomics'].map((item) => (
                        <a
                            key={item}
                            href="#"
                            onClick={() => setSelected(item)}
                            className={`px-3 py-2 rounded-md text-sm font-medium ${
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
}


export default Navbar2;