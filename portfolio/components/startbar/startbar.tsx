import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import { StartbarRef, WindowInfo, WindowState } from '../../shared/interfaces';
import styles from './startbar.module.css';

interface StartbarProps {
  startbarRefs: StartbarRef;
  setStartbarRefs: (_value: StartbarRef) => void;
}

const StartBar = (props: StartbarProps) => {
  const terminalRef = useRef<HTMLButtonElement>(null);
  const aboutRef = useRef<HTMLButtonElement>(null);
  const resumeRef = useRef<HTMLButtonElement>(null);
  const projectsRef = useRef<HTMLButtonElement>(null);
  const skillsRef = useRef<HTMLButtonElement>(null);
  const socialsRef = useRef<HTMLButtonElement>(null);
  const websiteRef = useRef<HTMLButtonElement>(null);
  const contactRef = useRef<HTMLButtonElement>(null);

  const windows = React.useContext(GlobalContext);

  useEffect(() => {
    props.setStartbarRefs({
      ...props.startbarRefs,
      terminal: terminalRef,
      about: aboutRef,
      resume: resumeRef,
      projects: projectsRef,
      skills: skillsRef,
      socials: socialsRef,
      website: websiteRef,
      contact: contactRef,
    });
  }, []);

  function onClickWindow(window: WindowInfo) {
    switch (window.state) {
      case WindowState.Minimised:
      case WindowState.Inactive:
      case WindowState.Closed:
        window.setState(WindowState.Open);
        break;
      case WindowState.Maximised:
      case WindowState.Open:
        window.setState(WindowState.Minimised);
        break;
    }
  }

  return (
    <div className="py-1 flex justify-center">
      <button disabled className={styles.startbarIcon}>
        <Image src="/images/start-icon.png" height="348" width="348" layout="responsive" />
      </button>
      <button disabled className={styles.startbarIcon + ' xxxs:hidden ml-2'}>
        <Image src="/images/search-icon.png" height="348" width="348" layout="responsive" />
      </button>
      <button disabled className={styles.startbarIcon + ' xxxs:hidden ml-2'}>
        <Image src="/images/folder-icon.png" height="348" width="348" layout="responsive" />
      </button>

      {/* TERMINAL */}
      <button
        ref={terminalRef}
        className={
          styles.startbarIcon +
          ' ml-2 hover:bg-gray-700 ' +
          (windows.terminal.state !== WindowState.Closed && 'border-blue-700 border-b-2 ') +
          ((windows.terminal.state === WindowState.Maximised || windows.terminal.state === WindowState.Open) &&
            'bg-gray-600/[0.9]')
        }
        onClick={() => onClickWindow(windows.terminal)}
      >
        <Image src="/images/terminal-start-icon.png" height="348" width="348" layout="responsive" />
      </button>

      {/* ABOUT */}
      <button
        ref={aboutRef}
        className={
          styles.startbarIcon +
          ' ml-2 hover:bg-gray-700 ' +
          (windows.about.state !== WindowState.Closed && 'border-blue-700 border-b-2 ') +
          ((windows.about.state === WindowState.Maximised || windows.about.state === WindowState.Open) &&
            'bg-gray-600/[0.9]')
        }
        onClick={() => onClickWindow(windows.about)}
      >
        <Image src="/images/about-icon.png" height="348" width="348" layout="responsive" />
      </button>

      {/* RESUME */}
      <button
        ref={resumeRef}
        className={
          styles.startbarIcon +
          ' ml-2 hover:bg-gray-700 ' +
          (windows.resume.state !== WindowState.Closed && 'border-blue-700 border-b-2 ') +
          ((windows.resume.state === WindowState.Maximised || windows.resume.state === WindowState.Open) &&
            'bg-gray-600/[0.9]')
        }
        onClick={() => onClickWindow(windows.resume)}
      >
        <Image src="/images/resume-icon.png" height="348" width="348" layout="responsive" />
      </button>

      {/* PROJECTS */}
      <button
        ref={projectsRef}
        className={
          styles.startbarIcon +
          ' ml-2 hover:bg-gray-700 ' +
          (windows.projects.state !== WindowState.Closed && 'border-blue-700 border-b-2 ') +
          ((windows.projects.state === WindowState.Maximised || windows.projects.state === WindowState.Open) &&
            'bg-gray-600/[0.9]')
        }
        onClick={() => onClickWindow(windows.projects)}
      >
        <Image src="/images/projects-icon.png" height="348" width="348" layout="responsive" />
      </button>

      {/* SKILLS */}
      <button
        ref={skillsRef}
        className={
          styles.startbarIcon +
          ' ml-2 hover:bg-gray-700 ' +
          (windows.skills.state !== WindowState.Closed && 'border-blue-700 border-b-2 ') +
          ((windows.skills.state === WindowState.Maximised || windows.skills.state === WindowState.Open) &&
            'bg-gray-600/[0.9]')
        }
        onClick={() => onClickWindow(windows.skills)}
      >
        <Image src="/images/skills-icon.png" height="348" width="348" layout="responsive" />
      </button>

      {/* SOCIALS */}
      <button
        ref={socialsRef}
        className={
          styles.startbarIcon +
          ' ml-2 hover:bg-gray-700 ' +
          (windows.socials.state !== WindowState.Closed && 'border-blue-700 border-b-2 ') +
          ((windows.socials.state === WindowState.Maximised || windows.socials.state === WindowState.Open) &&
            'bg-gray-600/[0.9]')
        }
        onClick={() => onClickWindow(windows.socials)}
      >
        <Image src="/images/socials-icon.png" height="348" width="348" layout="responsive" />
      </button>

      {/* WEBSITE */}
      <button
        ref={websiteRef}
        className={
          styles.startbarIcon +
          ' ml-2 hover:bg-gray-700 ' +
          (windows.website.state !== WindowState.Closed && 'border-blue-700 border-b-2 ') +
          ((windows.website.state === WindowState.Maximised || windows.website.state === WindowState.Open) &&
            'bg-gray-600/[0.9]')
        }
        onClick={() => onClickWindow(windows.website)}
      >
        <Image src="/images/website-icon.png" height="348" width="348" layout="responsive" />
      </button>

      {/* CONTACT */}
      <button
        ref={contactRef}
        className={
          styles.startbarIcon +
          ' ml-2 hover:bg-gray-700 ' +
          (windows.contact.state !== WindowState.Closed && 'border-blue-700 border-b-2 ') +
          ((windows.contact.state === WindowState.Maximised || windows.contact.state === WindowState.Open) &&
            'bg-gray-600/[0.9]')
        }
        onClick={() => onClickWindow(windows.contact)}
      >
        <Image src="/images/contact-icon.png" height="348" width="348" layout="responsive" />
      </button>
    </div>
  );
};

export default StartBar;
