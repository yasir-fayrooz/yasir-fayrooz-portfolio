import styles from './intro-text.module.css';
import React from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import { WindowState } from '../../shared/interfaces';
import EnteredContext from '../../contexts/EnteredContext';

const IntroText = () => {
  const { terminal } = React.useContext(GlobalContext);
  const { entered } = React.useContext(EnteredContext);

  return (
    <>
      <div className={styles.text + ' ' + styles.typing}>
        <p>
          \[._.]/ Hey there <span className={styles.wave}>👋</span> I'm Yasir Fayrooz
        </p>
        <p>
          <span className="text-green-300">$ </span> A "Full Stack" Engineer
        </p>
        <p>
          <span className="text-green-300">$ </span> Welcome to my world
        </p>
        <p>
          <span className="text-green-300">$ </span> Open my terminal to learn more{' '}
          <span
            className="text-sky-300 underline cursor-pointer"
            onClick={() => {
              terminal.setState(WindowState.Open);
            }}
          >
            here
          </span>
        </p>
      </div>

      {entered && (
        <div className="text-sky-300 underline cursor-pointer">
          <div className="flex absolute top-[25%]">
            <p className="grow">/About</p>
            <p className="grow">/Resume</p>
          </div>
        </div>
      )}
    </>
  );
};

export default IntroText;
