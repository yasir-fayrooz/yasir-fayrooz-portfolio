import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import Intro from '../components/intro/intro';
import { GlobalProvider } from '../contexts/GlobalContext';
import { WindowsProvider } from '../contexts/WindowsContext';
import TerminalModal from '../modals/terminal/terminal';
import { WindowState } from '../shared/interfaces';
import Window from '../modals/window/window';
import StartBar from '../components/startbar/startbar';

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

      <div className="flex flex-col w-full h-full bg-zinc-900">
        <main className="grow">
          <GlobalProvider value={{ windowState: terminalState, setWindowState: setTerminalState }}>
            <div className="container mx-auto flex h-full">
              <Intro />
            </div>

            {terminalState !== WindowState.Closed ? (
              <Window
                calcHeight={() => {
                  return window.innerHeight / 2 >= 250 ? window.innerHeight / 2 : window.innerHeight;
                }}
                calcWidth={() => {
                  return window.innerWidth / 2 >= 350 ? window.innerWidth / 2 : window.innerWidth;
                }}
                title="Command Prompt"
              >
                <TerminalModal />
              </Window>
            ) : null}
          </GlobalProvider>
        </main>

        <footer>
          <WindowsProvider value={{ terminalState: terminalState, setTerminalState: setTerminalState }}>
            <div className="pt-1 w-full bg-blue-500/[0.03] border-t border-black/[0.3]">
              <StartBar />
            </div>
          </WindowsProvider>
        </footer>
      </div>
    </div>
  );
};

export default Home;
