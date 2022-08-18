import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import Intro from '../components/intro/intro';
import { GlobalProvider } from '../contexts/GlobalContext';
import TerminalModal from '../modals/terminal/terminal';
import { WindowState } from '../shared/interfaces';
import Window from '../modals/window/window';

const Home: NextPage = () => {
  const [terminalState, setTerminalState] = useState(WindowState.Closed);

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
          <GlobalProvider value={{ terminalState: terminalState, setTerminalState: setTerminalState }}>
            <Intro />
          </GlobalProvider>
        </div>

        {terminalState !== WindowState.Closed ? (
          <Window height="50%" width="70%">
            <TerminalModal />
          </Window>
        ) : null}
      </main>
    </div>
  );
};

export default Home;
