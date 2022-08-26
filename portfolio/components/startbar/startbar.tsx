import Image from 'next/image';
import React, { RefObject, useEffect, useRef } from 'react';
import { isNullOrUndefined } from 'util';
import GlobalContext from '../../contexts/GlobalContext';
import { StartbarAction, StartbarRef, WindowInfo, WindowState } from '../../shared/interfaces';
import styles from './startbar.module.css';

interface StartbarProps {
  startbarRefs: StartbarRef;
  setStartbarRefs: (_value: StartbarRef) => void;
}

const StartBar = (props: StartbarProps) => {
  const parentDiv = useRef<HTMLDivElement>(null);
  const rightclickMenu = useRef<HTMLUListElement>(null);

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

  const [anchorPoint, setAnchorPoint] = React.useState<StartbarAction | undefined>(undefined);

  useEffect(() => {
    document.addEventListener('contextmenu', handleRightClick, true);
    return () => {
      document.removeEventListener('contextmenu', handleRightClick, true);
    };
  }, []);

  const handleRightClick = React.useCallback(
    (event: MouseEvent) => {
      if (parentDiv.current?.contains(event.target as Node)) {
        event.preventDefault();
        //get where in start bar we clicked
        const ref = getRightClickTarget(event);

        if (ref) {
          const info = getRefWindowState(ref);

          setAnchorPoint({
            windowName: info.windowName,
            windowState: info.windowState,
            windowRef: info.windowRef,
            setState: info.setState,
          });
        }
      }
    },
    [setAnchorPoint]
  );

  const handleClick = React.useCallback(() => anchorPoint && setAnchorPoint(undefined), [anchorPoint]);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  function getRightClickTarget(e: MouseEvent) {
    if (terminalRef.current?.contains(e.target as Node)) return terminalRef;
    if (aboutRef.current?.contains(e.target as Node)) return aboutRef;
    if (resumeRef.current?.contains(e.target as Node)) return resumeRef;
    if (projectsRef.current?.contains(e.target as Node)) return projectsRef;
    if (skillsRef.current?.contains(e.target as Node)) return skillsRef;
    if (socialsRef.current?.contains(e.target as Node)) return socialsRef;
    if (websiteRef.current?.contains(e.target as Node)) return websiteRef;
    if (contactRef.current?.contains(e.target as Node)) return contactRef;

    return null;
  }

  function getRefWindowState(ref: RefObject<HTMLButtonElement>) {
    switch (ref) {
      case terminalRef:
        return {
          windowName: 'Terminal',
          windowState: windows.terminal.state,
          windowRef: terminalRef,
          setState: windows.terminal.setState,
        };
      case aboutRef:
        return {
          windowName: 'About',
          windowState: windows.about.state,
          windowRef: aboutRef,
          setState: windows.about.setState,
        };
      case resumeRef:
        return {
          windowName: 'Resume',
          windowState: windows.resume.state,
          windowRef: resumeRef,
          setState: windows.resume.setState,
        };
      case projectsRef:
        return {
          windowName: 'Projects',
          windowState: windows.projects.state,
          windowRef: projectsRef,
          setState: windows.projects.setState,
        };
      case skillsRef:
        return {
          windowName: 'Skills',
          windowState: windows.skills.state,
          windowRef: skillsRef,
          setState: windows.skills.setState,
        };
      case socialsRef:
        return {
          windowName: 'Socials',
          windowState: windows.socials.state,
          windowRef: socialsRef,
          setState: windows.socials.setState,
        };
      case websiteRef:
        return {
          windowName: 'Website',
          windowState: windows.website.state,
          windowRef: websiteRef,
          setState: windows.website.setState,
        };
      case contactRef:
        return {
          windowName: 'Contact',
          windowState: windows.contact.state,
          windowRef: contactRef,
          setState: windows.contact.setState,
        };
      default:
        return {
          windowName: 'Window',
          windowState: WindowState.Closed,
          windowRef: terminalRef,
          setState: windows.terminal.setState,
        };
    }
  }

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
    <div className={'py-1 flex justify-center ' + styles.fadeIn} ref={parentDiv}>
      {anchorPoint && (
        <ul
          ref={rightclickMenu}
          className="absolute bg-zinc-800 border border-black/[0.3] rounded-xl p-2 cursor-pointer"
          style={{
            bottom: 45,
            left:
              window.innerWidth < 500
                ? window.innerWidth / 2 - (rightclickMenu.current ? rightclickMenu.current.clientWidth / 2 : 0)
                : anchorPoint.windowRef.current!.getBoundingClientRect().x -
                  (rightclickMenu.current ? rightclickMenu.current.clientWidth / 2 : 0),
            zIndex: 10,
          }}
        >
          <li className="p-2 rounded hover:bg-blue-500/[0.06]" onClick={() => anchorPoint.setState(WindowState.Open)}>
            Open {anchorPoint.windowName}
          </li>
          <hr />
          <li className="p-2 rounded hover:bg-blue-500/[0.06]" onClick={() => anchorPoint.setState(WindowState.Closed)}>
            Exit {anchorPoint.windowName}
          </li>
        </ul>
      )}
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
        title="Terminal"
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
        title="About"
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
        title="Resume"
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
        title="Projects"
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
        title="Skills"
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
        title="Socials"
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
        title="Website"
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
        title="Contact"
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
