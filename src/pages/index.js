import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
        <meta charset="utf-8" />
        <link rel="icon" href="/amazon_icon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-next-app"
        />
      </Head>

      {/* Header */}
      <Header />

      <main className="max-w-screen-lg mx-auto">
        {/* Banner */}
        <Banner />
        
        {/* ProductFeed */}
        <ProductFeed products={products} />
       
      </main>
    </div>
  );
}

export async function getServerSideProps(content) {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
