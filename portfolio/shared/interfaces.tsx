export interface GlobalState {
  terminal: WindowState;
  theme: string;
}

export enum WindowState {
  Open,
  Closed,
  Minimised,
  Maximised,
}
