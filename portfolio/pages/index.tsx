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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap');
        </style>
      </Head>

      <main className="flex grow flex-row w-full h-full bg-zinc-900">
        <GlobalProvider value={{ windowState: terminalState, setWindowState: setTerminalState }}>
          <div className="container mx-auto">
            <Intro />
          </div>

          {terminalState !== WindowState.Closed ? (
            <Window
              height={window.innerHeight / 2.5 >= 200 ? window.innerHeight / 2.5 + '' : window.innerHeight + ''}
              width={window.innerWidth / 2 >= 350 ? window.innerWidth / 2 + '' : window.innerWidth + ''}
              title="Command Prompt"
            >
              <TerminalModal />
            </Window>
          ) : null}
        </GlobalProvider>
      </main>
    </div>
  );
};

export default Home;
