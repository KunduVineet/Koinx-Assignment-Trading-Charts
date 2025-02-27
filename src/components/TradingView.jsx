import React, { useEffect, useRef, memo } from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Overview from '../nav-items/Overview';

function TradingViewWidget() {
    const container = useRef();

    useEffect(() => {
        if (container.current && !container.current.querySelector("script")) {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
        {
          "width": "100%",
          "height": "610",        
          "symbol": "BINANCE:BTCUSDT",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
            container.current.appendChild(script);
        }
    }, []);

    return (
        <>
            <Navbar />
            <div
                className="tradingview-widget-container"
                ref={container}
                style={{ height: "100%", width: "100%" }}
            >
                <div
                    className="tradingview-widget-container__widget"
                    style={{ height: "calc(100% - 32px)", width: "100%" }}
                ></div>
            </div>
            <Navbar2 />
            <Overview />
           
        </>
    );
}

export default memo(TradingViewWidget);
