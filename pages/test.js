import React, { useEffect } from "react";
import ReactGA from "react-ga4";

export default function test() {
  useEffect(() => {
    ReactGA.initialize("your GA measurement id");
    ReactGA.send("pageview");
  }, []);

  return <div>test</div>;
}
