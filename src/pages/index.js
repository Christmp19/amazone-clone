import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div>
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

      <main className='max-w-screen-2xl mx-auto'>
        {/* Banner */}
        <Banner />
        
        {/* ProductFeed */}
      </main>
    </div>
  );
}
