import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import Head from "next/head";

export default function Test() {
  useEffect(() => {
    // ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  function sendEvent() {
    ReactGA.event({
      category: "testing",
      action: "newaction",
      label: "test label", // optional
      value: 99, // optional, must be a number
      nonInteraction: true, // optional, true/false
      transport: "xhr", // optional, beacon/xhr/image
    });
  }

  return (
    <>
      <Head>
        <title>Test</title>
      </Head>
      <div>
        <button onClick={sendEvent}>send event</button>
      </div>
    </>
  );
}
