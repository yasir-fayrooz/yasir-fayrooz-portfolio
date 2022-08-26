import styles from './website.module.css';
import React from 'react';
import { IWindowChildProps } from '../../shared/interfaces';

const WebsiteModal = (props: IWindowChildProps) => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex justify-center m-3">
        <h3>How I made this website</h3>
      </div>
      <div className="grow overflow-y-auto mx-10">
        <p>
          I made this website in a few weeks of on and off coding. I decided to make a portfolio in order to expand my
          knowledge in React since my role at Motorola Solutions was based mainly on the Angular framework for frontend
          work.
        </p>
        <p className="mt-2">
          I want to be known as a technology agnostic person. I can learn and adapt to new languages, frameworks and/or
          technologies quite quickly as seen with this website I created.
        </p>
        <h3 className="mt-2">Tech stack:</h3>
        <p>- React</p>
        <p>- Next.Js</p>
        <p>- TailwindCSS</p>
        <p>- Git</p>
        <p>- LaTeX (for resume)</p>
        <p>- latexonline.cc API (to compile my resume)</p>
      </div>
    </div>
  );
};

export default WebsiteModal;
