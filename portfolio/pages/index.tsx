import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useRef, useState } from 'react';
import Intro from '../components/intro/intro';
import TerminalModal from '../modals/terminal/terminal';
import { StartbarRef, Windows, WindowState } from '../shared/interfaces';
import Window from '../modals/window/window';
import StartBar from '../components/startbar/startbar';
import AboutModal from '../modals/about/about';
import { GlobalProvider } from '../contexts/GlobalContext';

const Home: NextPage = () => {
  const [startbarRefs, setstartbarRefs] = useState<StartbarRef>({
    terminal: useRef(null),
    about: useRef(null),
    resume: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    socials: useRef(null),
    website: useRef(null),
    contact: useRef(null),
  });

  const [terminalState, setTerminalState] = React.useState<WindowState>(WindowState.Closed);
  const [aboutState, setAboutState] = React.useState<WindowState>(WindowState.Closed);

  const windows: Windows = {
    terminal: {
      state: terminalState,
      setState: setTerminalState,
      startbarRef: startbarRefs.terminal,
    },
    about: {
      state: aboutState,
      setState: setAboutState,
      startbarRef: startbarRefs.about,
    },
    resume: {
      state: WindowState.Closed,
      setState: (_value: WindowState) => {},
      startbarRef: undefined,
    },
    projects: {
      state: WindowState.Closed,
      setState: (_value: WindowState) => {},
      startbarRef: undefined,
    },
    skills: {
      state: WindowState.Closed,
      setState: (_value: WindowState) => {},
      startbarRef: undefined,
    },
    socials: {
      state: WindowState.Closed,
      setState: (_value: WindowState) => {},
      startbarRef: undefined,
    },
    website: {
      state: WindowState.Closed,
      setState: (_value: WindowState) => {},
      startbarRef: undefined,
    },
    contact: {
      state: WindowState.Closed,
      setState: (_value: WindowState) => {},
      startbarRef: undefined,
    },
  };

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
        <GlobalProvider value={windows}>
          <main className="grow">
            <div className="container mx-auto flex h-full">
              <Intro />
            </div>

            {/* TERMINAL WINDOW */}
            {terminalState !== WindowState.Closed && (
              <Window
                calcHeight={() => {
                  return window.innerHeight / 2 >= 250 ? window.innerHeight / 2 : window.innerHeight;
                }}
                calcWidth={() => {
                  return window.innerWidth / 2 >= 350 ? window.innerWidth / 2 : window.innerWidth;
                }}
                title="Command Prompt"
                icon="/images/terminal-icon.png"
                state={terminalState}
                setState={setTerminalState}
                startbarRef={startbarRefs.terminal}
              >
                <TerminalModal windowState={terminalState} setWindowState={setTerminalState} />
              </Window>
            )}

            {/* ABOUT WINDOW */}
            {aboutState !== WindowState.Closed && (
              <Window
                calcHeight={() => {
                  return window.innerHeight / 1.5 >= 250 ? window.innerHeight / 1.5 : window.innerHeight;
                }}
                calcWidth={() => {
                  return window.innerWidth / 1.5 >= 250 ? window.innerWidth / 1.5 : window.innerWidth;
                }}
                title="About me"
                icon="/images/about-icon.png"
                state={aboutState}
                setState={setAboutState}
                startbarRef={startbarRefs.about}
              >
                <AboutModal windowState={aboutState} setWindowState={setAboutState} />
              </Window>
            )}
          </main>

          <footer>
            <div className="pt-1 w-full bg-blue-500/[0.03] border-t border-black/[0.3]">
              <StartBar startbarRefs={startbarRefs} setStartbarRefs={setstartbarRefs} />
            </div>
          </footer>
        </GlobalProvider>
      </div>
    </div>
  );
};

export default Home;
