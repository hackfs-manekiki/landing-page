import Head from "next/head";

// prettier-ignore
export const CommonHTMLHeaders = () => {
  return (
    <Head>
      <title>Manekiki</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta name="keywords" content="web3, accounting, operation, management" />.

      {/* OpenGraph metadata */}
      <meta
        property="og:title"
        key="og:title"
        content="Manekiki"
      />
      <meta
        property="og:description"
        key="og:description"
        content="One-stop Web3 accounting and operation management solution"
      />
      <meta
        property="og:image"
        key="og:image"
        content="https://manekiki.xyz/static/banners/summary.png?v=0.1"
      />
      <meta 
        property="og:image:type" 
        key="og:image:type" 
        content="image/png" 
      />
      <meta
        property="og:image:width"
        key="og:image:width"
        content="1200"
      />
      <meta
        property="og:image:height"
        key="og:image:height"
        content="630"
      />
      <meta
        property="og:type"
        key="og:type"
        content="website"
      />
      <meta
        property="og:url"
        key="og:url"
        content="https://manekiki.xyz"
      />

      {/* Twitter metadata */}
      <meta
        name="twitter:title"
        key="twitter:title"
        content="Manekiki"
      />
      <meta
        name="twitter:description"
        key="twitter:description"
        content="One-stop Web3 accounting and operation management solution"
      />
      <meta
        name="twitter:image"
        key="twitter:image"
        content="https://manekiki.xyz/static/banners/summary.png?v=0.1"
      />
      <meta
        name="twitter:card"
        key="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:site"
        key="twitter:site"
        content="@Manekiki_"
      />
      <meta
        name="twitter:creator"
        key="twitter:creator"
        content="@Manekiki_"
      />
    </Head>
  );
};
