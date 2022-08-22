export const title = [
  '     ___________',
  '    |.---------.|',
  '    ||         ||      __   __       _          ',
  '    ||         ||      \\ \\ / /_ _ __(_)_ _ ___',
  "    ||         ||       \\ V / _` (_-< | '_(_-< ",
  "    |'---------'|        |_|\\__,_/__/_|_| /__/ ",
  `     \`)__ ____('                       © ${new Date().getFullYear()}`,
  '     [=== -- o ]--.      _____              _           _ ',
  "   __'---------'__ \\    |_   _|__ _ _ _ __ (_)_ _  __ _| |",
  "  [::::::::::: :::] )     | |/ -_) '_| '  \\| | ' \\/ _` | |",
  `   \`""'"""""'""""\`/T\\     |_|\\___|_| |_|_|_|_|_||_\\__,_|_|`,
  '                  \\_/',
];

export interface IHelp {
  command: string[];
  description: string;
}

export const help: IHelp[] = [
  {
    command: ['about'],
    description: 'My whole biography 😎',
  },
  {
    command: ['resume', 'cv'],
    description: 'Check out my CV made in the typesetting language LaTeX!',
  },
  {
    command: ['projects'],
    description: "Yeah, I've made some cool stuff before",
  },
  {
    command: ['skills'],
    description: "I'm pretty good at some things",
  },
  {
    command: ['socials'],
    description: 'Stop stalking me',
  },
  {
    command: ['website'],
    description: 'How I built this',
  },
  {
    command: ['contact'],
    description: 'Bring on the spam',
  },
  {
    command: ['clear', 'cls'],
    description: "When there's too much info in the terminal ugh!!",
  },
];
