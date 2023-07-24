import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="keywords"
          content="HTML5 nft community crypto xrp xrpl xrpledger xRonin xRoninFed xRoninFederation"
        />
        <meta
          name="description"
          content="xRonin | New Culture on XRP Ledger"
        />
        {/* <!-- Google Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        {/* <!-- !Google Fonts --> */}

        {/* <!-- Styles --> */}
        <link type="text/css" rel="stylesheet" href="css/plugins.css" />
        <link type="text/css" rel="stylesheet" href="css/style.css?ver=1.1" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
