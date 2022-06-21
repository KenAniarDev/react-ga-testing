import React, { useEffect } from "react";
import ReactGA from "react-ga4";

export default function Test() {
  useEffect(() => {
    ReactGA.initialize("G-WDNY0C9LKJ");
    ReactGA.send("pageview");
  }, []);

  return <div>test</div>;
}
