import styles from './about.module.css';
import React, { useEffect } from 'react';
import { IWindowChildProps, WindowState } from '../../shared/interfaces';

const AboutModal = (props: IWindowChildProps) => {
  function calculateAge() {
    var today = new Date();
    var birthDate = new Date(1996, 2, 22);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex justify-center m-3">
        <h3>Who is Yasir Fayrooz?</h3>
      </div>
      <div className="grow m-10 mb-1 overflow-auto">
        <p>Well, I'm glad you have asked..or I have asked..wait what? UGH</p>
        <p className="mt-4">
          I'm currently <span className="neon-text">{calculateAge()}</span> years old (age updates automatically 😉)!
        </p>
        <p className="mt-4">
          I was born and raised in <span className="neon-text">Melbourne, Australia</span> to an Iraqi family. I lived
          the majority of my childhood in a country Victorian town named Shepparton. I’ve always been a great problem
          solver, an independent learner and a technophile obsessed with the latest devices and tech. Today, I’m working
          as a software engineer and I get to show off all the elements of who I am.
        </p>
        <p className="mt-4">
          I started learning to code when I was a teenager, though it was always more of a hobby than a career focus.
          After a college education in Criminology/IT Security, I continued to pursue my hobby and finished a degree in
          Computer Science. I realised software engineering was the right field for me.
        </p>
        <p className="mt-4">
          Since then, I have worked on a countless number of projects and experienced hands on work with clients while
          making some great work buddies along the way. I love to learn, love to teach others and love to solve complex
          tasks which have never been tackled before. I describe myself as a technology agnostic person who can adapt to
          new tech super quickly.
        </p>
        <p className="mt-4">
          I’m familiar with a variety of programming languages, including Javascript/Typescript, HTML, CSS, a variety of
          the latest JS Frameworks (Angular/React etc.), .NET & C#, Python, C++ but I’m always adding new skills to my
          repertoire. I'm a fanboy for automating manual tasks and most of all, I adore making a difference and being
          recognised as a passionate worker.
        </p>
      </div>
    </div>
  );
};

export default AboutModal;
