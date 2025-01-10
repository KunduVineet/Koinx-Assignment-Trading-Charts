// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';

function TradingViewWidget() {
    const container = useRef();

    useEffect(() => {
        if (!container.current.querySelector("script")) {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
        {
          "width": "100%",
          "height": "610",     
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "180",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "allow_symbol_change": true,
          "calendar": true,
          "support_host": "https://www.tradingview.com"
        }`;
            container.current.appendChild(script);
        }
    }, []);


    return (
        <>
        <Navbar />
        <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
            <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
        </div>
        <Navbar2 />
        </>
        
    );
}

export default memo(TradingViewWidget);
