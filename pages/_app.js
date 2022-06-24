import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ReactGA from "react-ga4";
import TagManager from "react-gtm-module";
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.initialize("G-WDNY0C9LKJ");
    TagManager.initialize({ gtmId: "GTM-KB72NGP" });
    // ReactGA.send("pageview");
  }, []);

  const router = useRouter();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    const handleRouteChange = (url, { shallow }) => {
      // REACTGA
      // Send pageview with a custom path
      ReactGA.send({ hitType: "pageview", page: url });

      console.log(
        `App is changing to ${url} ${
          shallow ? "with" : "without"
        } shallow routing`
      );
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return <Component {...pageProps} />;
}
