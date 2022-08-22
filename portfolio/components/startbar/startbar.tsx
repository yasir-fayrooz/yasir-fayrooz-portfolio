import Image from 'next/image';
import React from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import { WindowState } from '../../shared/interfaces';
import styles from './startbar.module.css';

const StartBar = () => {
  const { windowStates, setWindowsStates } = React.useContext(GlobalContext);

  function openTerminal() {
    switch (windowStates.terminal) {
      case WindowState.Minimised:
        setWindowsStates({ ...windowStates, terminal: WindowState.Maximised });
        const terminal = document.getElementById('terminal');
        setTimeout(() => terminal?.click(), 50);
        break;
      case WindowState.Maximised:
      case WindowState.Open:
        setWindowsStates({ ...windowStates, terminal: WindowState.Minimised });
        break;
      case WindowState.Closed:
        setWindowsStates({ ...windowStates, terminal: WindowState.Open });
        break;
    }
  }

  function openAbout() {
    switch (windowStates.about) {
      case WindowState.Minimised:
        setWindowsStates({ ...windowStates, about: WindowState.Maximised });
        const about = document.getElementById('about');
        setTimeout(() => about?.click(), 50);
        break;
      case WindowState.Maximised:
      case WindowState.Open:
        setWindowsStates({ ...windowStates, about: WindowState.Minimised });
        break;
      case WindowState.Closed:
        setWindowsStates({ ...windowStates, about: WindowState.Open });
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
        id="terminalStartBar"
        className={
          styles.startbarIcon +
          ' ml-5 hover:bg-gray-700 ' +
          (windowStates.terminal !== WindowState.Closed && 'border-blue-700 border-b-2 ') +
          ((windowStates.terminal === WindowState.Maximised || windowStates.terminal === WindowState.Open) &&
            'bg-gray-600/[0.9]')
        }
        onClick={() => openTerminal()}
      >
        <Image src="/images/terminal-start-icon.png" height="348" width="348" layout="responsive" />
      </button>

      {/* ABOUT */}
      <button
        id="aboutStartBar"
        className={
          styles.startbarIcon +
          ' ml-5 hover:bg-gray-700 ' +
          (windowStates.about !== WindowState.Closed && 'border-blue-700 border-b-2 ') +
          ((windowStates.about === WindowState.Maximised || windowStates.about === WindowState.Open) &&
            'bg-gray-600/[0.9]')
        }
        onClick={() => openAbout()}
      >
        <Image src="/images/about-icon.png" height="348" width="348" layout="responsive" />
      </button>
    </div>
  );
};

export default StartBar;
