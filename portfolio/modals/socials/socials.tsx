import styles from './socials.module.css';
import React from 'react';
import { IWindowChildProps } from '../../shared/interfaces';

const SocialsModal = (props: IWindowChildProps) => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex justify-center m-3">
        <h3>📲 Socials 🤳</h3>
      </div>
      <div className="grow flex flex-col overflow-y-auto">
        <a
          className="mx-auto text-sky-300 underline cursor-pointer"
          href="https://www.linkedin.com/in/yasir-fayrooz/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className="mx-auto my-4 text-sky-300 underline cursor-pointer"
          href="https://github.com/yasir-fayrooz"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default SocialsModal;
