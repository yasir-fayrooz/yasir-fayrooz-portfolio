export enum WindowState {
  Open,
  Closed,
  Minimised,
  Maximised,
}

export interface CommandHistory {
  command: string;
  element: React.ReactElement;
}
