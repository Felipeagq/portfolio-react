import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Felipe Gonzalez-Profile 🚀</title>
        <meta name="description" content="FullStack en desarrollo con conocimiento en Python, docker, aws y react" />
        <meta name="keyboard" content="react, nextjs, redux, ingenieria, feanware" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
