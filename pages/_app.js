import "../styles/global.css";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>White Noise Wishes</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className="main-container">
        <div className="container">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}

export default MyApp;
