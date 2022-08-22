export enum WindowState {
  Open,
  Closed,
  Minimised,
  Maximised,
}

export interface IWindowChildProps {
  setIsActive: (_value: boolean) => {};
  isActive: boolean;
  windowId: string;
}

export interface Windows {
  terminal: WindowState;
  about: WindowState;
  resume: WindowState;
  projects: Project[];
  skills: WindowState;
  socials: WindowState;
  website: WindowState;
  contact: WindowState;
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
