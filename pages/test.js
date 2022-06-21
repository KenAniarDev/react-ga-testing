import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import Script from "next/script";
export default function Test() {
  useEffect(() => {
    ReactGA.initialize("G-WDNY0C9LKJ");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  function sendEvent() {
    ReactGA.event({
      category: "page_view",
      action: "your action",
      label: "your label", // optional
      value: 99, // optional, must be a number
      nonInteraction: true, // optional, true/false
      transport: "xhr", // optional, beacon/xhr/image
    });
  }

  return (
    <div>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WDNY0C9LKJ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WDNY0C9LKJ');
        `}
      </Script>
      <button onClick={sendEvent}>send event</button>
    </div>
  );
}
