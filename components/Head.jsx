import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Sibusiso Nkosi's Profolio."
      />
      <meta
        name="keywords"
        content="Sibusiso Nkosi, kostas, georgiou, data scientist portfolio, machine learning engineer, Sibusiso Nkosi portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Sibusiso Nkosi's Portfolio" />
      <meta
        property="og:description"
        content="Sibusiso Nkosi's Profolio."
      />
      <meta property="og:image" content="https://imgur.com/YTNNknY.png" />
      <meta property="og:url" content="https://gkos.tech" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Sibusiso Nkosi',
};
