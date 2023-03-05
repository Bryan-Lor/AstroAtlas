import Head from "next/head";

export default function HtmlHead() {
  return (
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Megrim&display=swap"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <title>AstroAtlas</title>
      <meta
        name="description"
        content="A website that educates you about our solar system!"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
