import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useRef, useState } from 'react';
import Intro from '../components/intro/intro';
import TerminalModal from '../modals/terminal/terminal';
import { IEntered, StartbarRef, Windows, WindowState } from '../shared/interfaces';
import Window from '../modals/window/window';
import StartBar from '../components/startbar/startbar';
import AboutModal from '../modals/about/about';
import { GlobalProvider } from '../contexts/GlobalContext';
import ResumeModal from '../modals/resume/resume';
import SkillsModal from '../modals/skills/skills';
import ProjectsModal from '../modals/projects/projects';
import SocialsModal from '../modals/socials/socials';
import WebsiteModal from '../modals/website/website';
import ContactModal from '../modals/contact/contact';
import { EnteredProvider } from '../contexts/EnteredContext';

const Home: NextPage = () => {
  const [entered, setEntered] = React.useState<boolean>(false);

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
  const [resumeState, setResumeState] = React.useState<WindowState>(WindowState.Closed);
  const [projectsState, setProjectsState] = React.useState<WindowState>(WindowState.Closed);
  const [skillsState, setSkillsState] = React.useState<WindowState>(WindowState.Closed);
  const [socialsState, setSocialsState] = React.useState<WindowState>(WindowState.Closed);
  const [websiteState, setWebsiteState] = React.useState<WindowState>(WindowState.Closed);
  const [contactState, setContactState] = React.useState<WindowState>(WindowState.Closed);

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
      state: resumeState,
      setState: setResumeState,
      startbarRef: undefined,
    },
    projects: {
      state: projectsState,
      setState: setProjectsState,
      startbarRef: startbarRefs.projects,
    },
    skills: {
      state: skillsState,
      setState: setSkillsState,
      startbarRef: startbarRefs.skills,
    },
    socials: {
      state: socialsState,
      setState: setSocialsState,
      startbarRef: startbarRefs.socials,
    },
    website: {
      state: websiteState,
      setState: setWebsiteState,
      startbarRef: startbarRefs.website,
    },
    contact: {
      state: contactState,
      setState: setContactState,
      startbarRef: startbarRefs.contact,
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
        <EnteredProvider value={{ entered: entered, setEntered: setEntered }}>
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
                    return window.innerWidth / 1.5 >= 400 ? window.innerWidth / 1.5 : window.innerWidth;
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

              {/* RESUME WINDOW */}
              {resumeState !== WindowState.Closed && (
                <Window
                  calcHeight={() => {
                    return window.innerHeight;
                  }}
                  calcWidth={() => {
                    return window.innerWidth / 1.5 >= 500 ? window.innerWidth / 1.5 : window.innerWidth;
                  }}
                  title="Current CV"
                  icon="/images/resume-icon.png"
                  state={resumeState}
                  setState={setResumeState}
                  startbarRef={startbarRefs.resume}
                >
                  <ResumeModal windowState={resumeState} setWindowState={setResumeState} />
                </Window>
              )}

              {/* PROJECTS WINDOW */}
              {projectsState !== WindowState.Closed && (
                <Window
                  calcHeight={() => {
                    return window.innerHeight / 1.5 >= 450 ? window.innerHeight / 1.5 : window.innerHeight;
                  }}
                  calcWidth={() => {
                    return window.innerWidth >= 600 ? 600 : window.innerWidth;
                  }}
                  title="Projects"
                  icon="/images/projects-icon.png"
                  state={projectsState}
                  setState={setProjectsState}
                  startbarRef={startbarRefs.projects}
                >
                  <ProjectsModal windowState={projectsState} setWindowState={setProjectsState} />
                </Window>
              )}

              {/* SKILLS WINDOW */}
              {skillsState !== WindowState.Closed && (
                <Window
                  calcHeight={() => {
                    return window.innerHeight / 1.5 >= 450 ? window.innerHeight / 1.5 : window.innerHeight;
                  }}
                  calcWidth={() => {
                    return window.innerWidth / 3 >= 250 ? window.innerWidth / 3 : window.innerWidth;
                  }}
                  title="Skills"
                  icon="/images/skills-icon.png"
                  state={skillsState}
                  setState={setSkillsState}
                  startbarRef={startbarRefs.skills}
                >
                  <SkillsModal windowState={skillsState} setWindowState={setSkillsState} />
                </Window>
              )}

              {/* SOCIALS WINDOW */}
              {socialsState !== WindowState.Closed && (
                <Window
                  calcHeight={() => {
                    return window.innerHeight >= 250 ? 250 : window.innerHeight;
                  }}
                  calcWidth={() => {
                    return window.innerWidth >= 200 ? 200 : window.innerWidth;
                  }}
                  title="Socials"
                  icon="/images/socials-icon.png"
                  state={socialsState}
                  setState={setSocialsState}
                  startbarRef={startbarRefs.socials}
                >
                  <SocialsModal windowState={socialsState} setWindowState={setSocialsState} />
                </Window>
              )}

              {/* WEBSITE WINDOW */}
              {websiteState !== WindowState.Closed && (
                <Window
                  calcHeight={() => {
                    return window.innerHeight >= 500 ? 500 : window.innerHeight;
                  }}
                  calcWidth={() => {
                    return window.innerWidth >= 700 ? 700 : window.innerWidth;
                  }}
                  title="Website"
                  icon="/images/website-icon.png"
                  state={websiteState}
                  setState={setWebsiteState}
                  startbarRef={startbarRefs.website}
                >
                  <WebsiteModal windowState={websiteState} setWindowState={setWebsiteState} />
                </Window>
              )}

              {/* CONTACT WINDOW */}
              {contactState !== WindowState.Closed && (
                <Window
                  calcHeight={() => {
                    return window.innerHeight >= 500 ? 500 : window.innerHeight;
                  }}
                  calcWidth={() => {
                    return window.innerWidth >= 700 ? 700 : window.innerWidth;
                  }}
                  title="Contact me"
                  icon="/images/contact-icon.png"
                  state={contactState}
                  setState={setContactState}
                  startbarRef={startbarRefs.contact}
                >
                  <ContactModal windowState={contactState} setWindowState={setContactState} />
                </Window>
              )}
            </main>

            <footer>
              <div className="pt-1 w-full bg-blue-500/[0.03] border-t border-black/[0.3]">
                <StartBar startbarRefs={startbarRefs} setStartbarRefs={setstartbarRefs} />
              </div>
            </footer>
          </GlobalProvider>
        </EnteredProvider>
      </div>
    </div>
  );
};

export default Home;
