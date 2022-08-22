import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import Intro from '../components/intro/intro';
import { GlobalProvider } from '../contexts/GlobalContext';
import TerminalModal from '../modals/terminal/terminal';
import { Windows, WindowState } from '../shared/interfaces';
import Window from '../modals/window/window';
import StartBar from '../components/startbar/startbar';
import AboutModal from '../modals/about/about';

const Home: NextPage = () => {
  const [windowStates, setWindowsStates] = useState({
    terminal: WindowState.Closed,
    about: WindowState.Closed,
    resume: WindowState.Closed,
    projects: [],
    skills: WindowState.Closed,
    socials: WindowState.Closed,
    website: WindowState.Closed,
    contact: WindowState.Closed,
  } as Windows);

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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap"
        />
      </Head>

      <div className="flex flex-col w-full h-full bg-zinc-900">
        <GlobalProvider
          value={{
            windowStates: windowStates,
            setWindowsStates: setWindowsStates,
          }}
        >
          <main className="grow">
            <div className="container mx-auto flex h-full">
              <Intro />
            </div>

            {/* TERMINAL WINDOW */}
            {windowStates.terminal !== WindowState.Closed && (
              <Window
                calcHeight={() => {
                  return window.innerHeight / 2 >= 250 ? window.innerHeight / 2 : window.innerHeight;
                }}
                calcWidth={() => {
                  return window.innerWidth / 2 >= 350 ? window.innerWidth / 2 : window.innerWidth;
                }}
                title="Command Prompt"
                icon="/images/terminal-icon.png"
                state={windowStates.terminal}
                setWindowState={(_value: WindowState) => {
                  setWindowsStates({ ...windowStates, terminal: _value });
                }}
              >
                <TerminalModal
                  isActive={false}
                  setIsActive={(_value: boolean) => {
                    return false;
                  }}
                  windowId=""
                />
              </Window>
            )}

            {/* ABOUT WINDOW */}
            {windowStates.about !== WindowState.Closed && (
              <Window
                calcHeight={() => {
                  return window.innerHeight / 2 >= 250 ? window.innerHeight / 2 : window.innerHeight;
                }}
                calcWidth={() => {
                  return window.innerWidth / 2 >= 250 ? window.innerWidth / 2 : window.innerWidth;
                }}
                title="About me"
                icon="/images/about-icon.png"
                state={windowStates.about}
                setWindowState={(_value: WindowState) => {
                  setWindowsStates({ ...windowStates, about: _value });
                }}
              >
                <AboutModal />
              </Window>
            )}
          </main>

          <footer>
            <div className="pt-1 w-full bg-blue-500/[0.03] border-t border-black/[0.3]">
              <StartBar />
            </div>
          </footer>
        </GlobalProvider>
      </div>
    </div>
  );
};

export default Home;
