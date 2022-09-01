import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bosses Academy</title>
        <meta name="description" content="Bosses Academy LLC" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
