import React, { useEffect } from "react";
import ReactGA from "react-ga4";

export default function Test() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return <div>test</div>;
}
