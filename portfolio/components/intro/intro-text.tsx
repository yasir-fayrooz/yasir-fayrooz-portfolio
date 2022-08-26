import styles from './intro-text.module.css';
import React from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import { WindowState } from '../../shared/interfaces';
import EnteredContext from '../../contexts/EnteredContext';

const IntroText = () => {
  const windows = React.useContext(GlobalContext);
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
              windows.terminal.setState(WindowState.Open);
            }}
          >
            here
          </span>
        </p>
      </div>

      {entered && (
        <div className={'text-sky-300 underline ' + styles.fadeIn}>
          <div className="grid grid-cols-12 mt-5">
            <div className="col-span-6">
              <button
                onClick={() => {
                  windows.about.setState(WindowState.Open);
                }}
              >
                /About
              </button>
            </div>
            <div className="col-span-6">
              <button
                className="cursor-pointer"
                onClick={() => {
                  windows.resume.setState(WindowState.Open);
                }}
              >
                /Resume
              </button>
            </div>
            <div className="col-span-6 mt-3">
              <button
                className="cursor-pointer"
                onClick={() => {
                  windows.projects.setState(WindowState.Open);
                }}
              >
                /Projects
              </button>
            </div>
            <div className="col-span-6 mt-3">
              <button
                className="cursor-pointer"
                onClick={() => {
                  windows.skills.setState(WindowState.Open);
                }}
              >
                /Skills
              </button>
            </div>
            <div className="col-span-6 mt-3">
              <button
                className="cursor-pointer"
                onClick={() => {
                  windows.socials.setState(WindowState.Open);
                }}
              >
                /Socials
              </button>
            </div>
            <div className="col-span-6 mt-3">
              <button
                className="cursor-pointer"
                onClick={() => {
                  windows.website.setState(WindowState.Open);
                }}
              >
                /Website
              </button>
            </div>
            <div className="col-span-6 mt-3">
              <button
                className="cursor-pointer"
                onClick={() => {
                  windows.contact.setState(WindowState.Open);
                }}
              >
                /Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IntroText;
