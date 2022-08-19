import Image from 'next/image';
import React from 'react';
import WindowsContext from '../../contexts/WindowsContext';
import { WindowState } from '../../shared/interfaces';
import styles from './startbar.module.css';

const StartBar = () => {
  const { terminalState, setTerminalState } = React.useContext(WindowsContext);

  function openTerminal() {
    switch (terminalState) {
      case WindowState.Minimised:
        setTerminalState(WindowState.Maximised);
        break;
      case WindowState.Maximised:
      case WindowState.Open:
        setTerminalState(WindowState.Minimised);
        break;
      case WindowState.Closed:
        setTerminalState(WindowState.Open);
        break;
    }
  }

  return (
    <div className="py-1 flex justify-center">
      <button disabled className={styles.startbarIcon + ' ml-2'}>
        <Image src="/images/start-icon.png" height="348" width="348" layout="responsive" />
      </button>
      <button disabled className={styles.startbarIcon + ' ml-5'}>
        <Image src="/images/search-icon.png" height="348" width="348" layout="responsive" />
      </button>
      <button disabled className={styles.startbarIcon + ' ml-5'}>
        <Image src="/images/folder-icon.png" height="348" width="348" layout="responsive" />
      </button>
      <button
        className={
          styles.startbarIcon +
          ' ml-5 hover:bg-gray-700 ' +
          (terminalState !== WindowState.Closed && 'border-blue-700 border-b-2 ') +
          ((terminalState === WindowState.Maximised || terminalState === WindowState.Open) && 'bg-gray-600/[0.9]')
        }
        onClick={() => openTerminal()}
      >
        <Image src="/images/terminal-start-icon.png" height="348" width="348" layout="responsive" />
      </button>
    </div>
  );
};

export default StartBar;
