import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BitcoinChart = () => {
  const [barPosition, setBarPosition] = useState("");
  const [currentPrice, setCurrentPrice] = useState(null);

  // Manually defined Bitcoin data (time and price)
  const data = [
    { time: "00:00", price: 42000 },
    { time: "01:00", price: 42250 },
    { time: "02:00", price: 42500 },
    { time: "03:00", price: 43000 },
    { time: "04:00", price: 42800 },
    { time: "05:00", price: 43500 },
    { time: "06:00", price: 44000 },
    { time: "07:00", price: 43800 },
    { time: "08:00", price: 44500 },
    { time: "09:00", price: 45000 },
  ];

  // Handle bar movement and update the displayed price
  const handleMouseMove = (e) => {
    if (e && e.activePayload) {
      setBarPosition(e.activeLabel);
      setCurrentPrice(e.activePayload[0].value);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Bitcoin Price Tracker</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          onMouseMove={handleMouseMove}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <XAxis dataKey="time" />
          <YAxis domain={["dataMin", "dataMax"]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="price"
            stroke="url(#gradient)"
            strokeWidth={3}
            dot={{ r: 5 }}
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF0000" />
              <stop offset="50%" stopColor="#FFFF00" />
              <stop offset="100%" stopColor="#00FF00" />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
      {currentPrice !== null && (
        <div className="mt-4 text-lg">
          <p>Time: {barPosition}</p>
          <p>Bitcoin Price: ${currentPrice.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default BitcoinChart;
