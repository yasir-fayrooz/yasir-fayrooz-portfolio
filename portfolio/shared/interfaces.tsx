import { RefObject } from 'react';

export enum WindowState {
  Open,
  Inactive,
  Closed,
  Minimised,
  Maximised,
}

export interface IWindowChildProps {
  setWindowState: (_value: WindowState) => void;
  windowState: WindowState;
  windowRef?: RefObject<HTMLDivElement>;
}

export interface Windows {
  terminal: WindowInfo;
  about: WindowInfo;
  resume: WindowInfo;
  projects: WindowInfo;
  skills: WindowInfo;
  socials: WindowInfo;
  website: WindowInfo;
  contact: WindowInfo;
}

export interface StartbarRef {
  terminal: RefObject<HTMLButtonElement>;
  about: RefObject<HTMLButtonElement>;
  resume: RefObject<HTMLButtonElement>;
  projects: RefObject<HTMLButtonElement>;
  skills: RefObject<HTMLButtonElement>;
  socials: RefObject<HTMLButtonElement>;
  website: RefObject<HTMLButtonElement>;
  contact: RefObject<HTMLButtonElement>;
}

export interface WindowInfo {
  state: WindowState;
  setState: (_value: WindowState) => void;
  startbarRef?: RefObject<HTMLButtonElement>;
}

export interface Project {
  key: string;
  name: string;
  markdownFile: string;
  state: WindowState;
}

export interface CommandHistory {
  command: string;
  element: React.ReactElement;
}
