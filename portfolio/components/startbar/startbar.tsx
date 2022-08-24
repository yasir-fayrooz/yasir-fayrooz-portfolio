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

  const windows = React.useContext(GlobalContext);

  useEffect(() => {
    props.setStartbarRefs({
      ...props.startbarRefs,
      terminal: terminalRef,
      about: aboutRef,
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
      <button disabled className={styles.startbarIcon + ' ml-2'}>
        <Image src="/images/start-icon.png" height="348" width="348" layout="responsive" />
      </button>
      <button disabled className={styles.startbarIcon + ' xxxs:hidden ml-5'}>
        <Image src="/images/search-icon.png" height="348" width="348" layout="responsive" />
      </button>
      <button disabled className={styles.startbarIcon + ' xxxs:hidden ml-5'}>
        <Image src="/images/folder-icon.png" height="348" width="348" layout="responsive" />
      </button>

      {/* TERMINAL */}
      <button
        ref={terminalRef}
        className={
          styles.startbarIcon +
          ' ml-5 hover:bg-gray-700 ' +
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
          ' ml-5 hover:bg-gray-700 ' +
          (windows.about.state !== WindowState.Closed && 'border-blue-700 border-b-2 ') +
          ((windows.about.state === WindowState.Maximised || windows.about.state === WindowState.Open) &&
            'bg-gray-600/[0.9]')
        }
        onClick={() => onClickWindow(windows.about)}
      >
        <Image src="/images/about-icon.png" height="348" width="348" layout="responsive" />
      </button>
    </div>
  );
};

export default StartBar;
