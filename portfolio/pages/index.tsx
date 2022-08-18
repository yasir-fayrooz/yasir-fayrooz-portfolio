import type { NextPage } from 'next';
import Head from 'next/head';
import Intro from '../components/intro/intro';

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Yasir Fayrooz - Portfolio</title>
        <meta name="description" content="Yasir Fayrooz Portfolio - Resume, Git, LinkedIn, Contact, Projects, About" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap');
        </style>
      </Head>

      <main className="flex grow flex-row w-full h-full bg-zinc-900">
        <div className="container mx-auto">
          <Intro />
        </div>
      </main>
    </div>
  );
};

export default Home;
