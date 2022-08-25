import React from 'react';
import { useRef } from 'react';
import styles from './project.module.css';

interface IProjectProps {
  title: string;
  description: string;
  fromDate: string;
  toDate: string;
}

const Project = (props: IProjectProps) => {
  const projectDiv = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    new ResizeObserver((entries) => skillsTableSize(entries)).observe(projectDiv.current!);
  }, []);

  function skillsTableSize(entries: ResizeObserverEntry[]) {
    entries.forEach((entry) => {
      if (text.current) {
        if (entry.contentRect.width < 350) {
          text.current.style.fontSize = '0.8em';
        } else {
          text.current.style.fontSize = '1em';
        }
      }
    });
  }

  return (
    <div className="flex justify-center" ref={projectDiv}>
      <div className="grow max-w-lg mx-2 bg-sky-900/50 hover:bg-sky-900/75 hover:cursor-pointer rounded-lg">
        <div className="flex flex-col mx-4">
          <h2 className="neon-text">{props.title}</h2>
          <div ref={text}>
            <p>
              {props.fromDate} - {props.toDate}
            </p>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
