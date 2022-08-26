import GlobalContext from '../../contexts/GlobalContext';
import { CommandHistory, Windows, WindowState } from '../../shared/interfaces';
import { help, IHelp } from './commands';
import Image from 'next/image';

export enum CommandState {
  ROOT,
  HELP,
  ABOUT,
  RESUME,
  CONTACT,
}

export let commandState: CommandState = CommandState.ROOT;

export async function handleCommand(
  commandInput: string,
  commandHistory: CommandHistory[],
  setCommandHistory: React.Dispatch<React.SetStateAction<CommandHistory[]>>,
  windows: Windows
) {
  commandInput = commandInput.trim();
  switch (commandInput) {
    case 'help':
      const helpCommand: CommandHistory = { command: commandInput, element: HelpCommand() };
      setCommandHistory([...commandHistory, helpCommand]);
      break;
    case 'about':
      const aboutCommand: CommandHistory = {
        command: commandInput,
        element: OpenWindowCommand('🚀 Opening about me window.. 🚀'),
      };
      setCommandHistory([...commandHistory, aboutCommand]);
      windows.about.setState(WindowState.Open);
      break;
    case 'resume':
    case 'cv':
      const resumeCommand: CommandHistory = {
        command: commandInput,
        element: OpenWindowCommand('🚀 Opening my current resume window.. 🚀'),
      };
      setCommandHistory([...commandHistory, resumeCommand]);
      windows.resume.setState(WindowState.Open);
      break;
    case 'projects':
      const projectsCommand: CommandHistory = {
        command: commandInput,
        element: OpenWindowCommand('🚀 Opening my projects window.. 🚀'),
      };
      setCommandHistory([...commandHistory, projectsCommand]);
      windows.projects.setState(WindowState.Open);
      break;
    case 'skills':
      const skillsCommand: CommandHistory = {
        command: commandInput,
        element: OpenWindowCommand('🚀 Opening my skills window.. 🚀'),
      };
      setCommandHistory([...commandHistory, skillsCommand]);
      windows.skills.setState(WindowState.Open);
      break;
    case 'socials':
      const socialsCommand: CommandHistory = {
        command: commandInput,
        element: OpenWindowCommand('🚀 Opening my socials window.. 🚀'),
      };
      setCommandHistory([...commandHistory, socialsCommand]);
      windows.socials.setState(WindowState.Open);
      break;
    case 'website':
      const websiteCommand: CommandHistory = {
        command: commandInput,
        element: OpenWindowCommand('🚀 Opening my website window.. 🚀'),
      };
      setCommandHistory([...commandHistory, websiteCommand]);
      windows.website.setState(WindowState.Open);
      break;
    case 'contact':
      const contactCommand: CommandHistory = {
        command: commandInput,
        element: OpenWindowCommand('🚀 Opening my contact window.. 🚀'),
      };
      setCommandHistory([...commandHistory, contactCommand]);
      windows.contact.setState(WindowState.Open);
      break;
    case 'meme':
      const memeCommand: CommandHistory = {
        command: commandInput,
        element: await MemeCommand().then((resp) => {
          return resp;
        }),
      };
      setCommandHistory([...commandHistory, memeCommand]);
      break;
    case 'cls':
    case 'clear':
      setCommandHistory([]);
      break;
    default:
      const errorCommand: CommandHistory = { command: commandInput, element: unrecognisedCommand(commandInput) };
      setCommandHistory([...commandHistory, errorCommand]);
      break;
  }
}

function HelpCommand() {
  return (
    <>
      <p className="text-cyan-300">List of commands in green:</p>
      {help.map((opt: IHelp, hindex) => {
        return (
          <div className="ml-4" key={'help' + hindex}>
            {opt.command.map((command, cindex) => {
              return (
                <span key={'c' + cindex}>
                  <span className="neon-text">{command}</span>
                  {cindex !== opt.command.length - 1 ? <span> / </span> : null}
                </span>
              );
            })}
            <p className="ml-4">- {opt.description}</p>
          </div>
        );
      })}
    </>
  );
}

async function MemeCommand() {
  const errorEl: JSX.Element = (
    <p>Oh no, an error has occurred fetching your meme. Please contact me and I will resolve this asap :(</p>
  );

  const resp = await fetch('https://meme-api.herokuapp.com/gimme');

  if (resp.ok) {
    const data: any = await resp.json();
    return (
      <div className="max-w-md max-h-md my-3">
        <Image src={data.preview.pop()} width="300" height="300" layout="responsive" />
      </div>
    );
  } else {
    return <p>Oh no, an error has occurred fetching your meme. Please contact me and I will resolve this asap :(</p>;
  }
}

function OpenWindowCommand(text: string) {
  return <p>{text}</p>;
}

function unrecognisedCommand(command: string) {
  return (
    <p>
      '<span className="neon-text">{command}</span>' is not recognized as an internal or external command.
    </p>
  );
}
