import React, { useState, useEffect } from 'react';

const About = () => {
  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const [error, setError] = useState(null);

  // Fetch Bitcoin price from a public API
  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
        if (!response.ok) {
          throw new Error('Error fetching Bitcoin price');
        }
        const data = await response.json();
        setBitcoinPrice(data.bpi.USD.rate);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBitcoinPrice();
  }, []);

  return (
    <div className="w-full h-full p-8 bg-white shadow-lg rounded-lg text-sm sm:text-base">
      <h1 className="text-4xl font-bold text-left text-blue-700 mb-8">Bitcoin Pricing Today</h1>
      <div className="mb-6">
        <p className="text-base text-left text-gray-800 leading-relaxed">
          Bitcoin (BTC) is a decentralized digital currency that has been gaining worldwide attention for its volatility
          and potential for significant returns. As the first cryptocurrency, Bitcoin has led the way for others to follow.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-left text-gray-800">Current Bitcoin Price:</h2>
        {error ? (
          <p className="text-red-500 text-left">{error}</p>
        ) : bitcoinPrice ? (
          <p className="text-xl text-left text-gray-700">
            The current price of Bitcoin is <span className="font-bold text-green-600">{bitcoinPrice}</span> USD.
          </p>
        ) : (
          <p className="text-left text-gray-700">Loading price...</p>
        )}
      </div>
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-left text-gray-800">Why is Bitcoin Price Volatile?</h3>
        <p className="text-base text-left text-gray-800 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum expedita sunt illum, corporis eligendi nobis dolores veritatis. Dolore vel, eius voluptate omnis eveniet perferendis molestiae, repellat vitae sunt aliquam quod enim cupiditate voluptas architecto. Laudantium, ex? Sit labore quod, ad voluptas sapiente veniam totam corporis assumenda odio vel iusto, fugiat ipsam vero nulla, tenetur harum rem. Accusantium, placeat reprehenderit. Tenetur culpa ut id consequuntur velit quisquam, quidem, minima repellat ducimus ab, dolore delectus maiores? Quo eos modi possimus tempore voluptas. Dolorum temporibus alias cumque perferendis et totam dolor dolore doloribus fugit corporis est atque fuga, repudiandae quidem, repellendus, quibusdam necessitatibus?
        </p>
      </div>
      <div>
        <h3 className="text-base text-left text-gray-800 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum impedit veritatis cum sunt necessitatibus sapiente repellat odit consequuntur vel, nemo tempore architecto odio molestiae ipsa, voluptate delectus sit, voluptates labore sed ratione dicta reiciendis itaque nulla! Sed, esse iusto ducimus nesciunt voluptas, labore distinctio enim sit quasi dignissimos debitis id.
        </h3>
       
      </div>
    </div>
  );
};

export default About;
