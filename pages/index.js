import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/test">
          <a>Test</a>
        </Link>
      </div>
    </>
  );
}
