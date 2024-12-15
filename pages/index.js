import Head from 'next/head';
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div
    // className="container"
    >
      <Head>
        <title>Kalong Project</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Redacted+Script:wght@300;400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/warung-kopi" rel="stylesheet" />
      </Head>

      <Header />

      <main>
        <Hero />
        <About />
      </main>

      <Footer />
    </div>
  )
}
