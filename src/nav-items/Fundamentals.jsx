import React, { useEffect } from "react";

const Fundamentals = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      isTransparent: false,
      largeChartUrl: "",
      displayMode: "regular",
      width: "100%",
      height: "100%",
      colorTheme: "light",
      symbol: "BITSTAMP:BTCUSD",
      locale: "en",
    });

    script.onload = () => {
      console.log("TradingView script loaded successfully.");
    };

    script.onerror = (err) => {
      console.error("Error loading TradingView script:", err);
    };

    const container = document.querySelector(
      ".tradingview-widget-container__widget"
    );

    if (container) {
      container.appendChild(script);
    } else {
      console.error("Container element not found.");
    }

    return () => {
      // Cleanup on unmount
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="tradingview-widget-container__widget w-full max-w-4xl h-full bg-white shadow-lg rounded-lg p-4">
        {/* The TradingView widget will be embedded here */}
      </div>
    </div>
  );
};

export default Fundamentals;
