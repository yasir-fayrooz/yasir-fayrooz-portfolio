import { CommandHistory } from '../../shared/interfaces';
import { help, IHelp } from './commands';

export enum CommandState {
  ROOT,
  HELP,
  ABOUT,
  RESUME,
  CONTACT,
}

export let commandState: CommandState = CommandState.ROOT;

export function handleCommand(
  commandInput: string,
  commandHistory: CommandHistory[],
  setCommandHistory: React.Dispatch<React.SetStateAction<CommandHistory[]>>
) {
  commandInput = commandInput.trim();
  switch (commandInput) {
    case 'help':
      const helpCommand: CommandHistory = { command: commandInput, element: HelpCommand() };
      setCommandHistory([...commandHistory, helpCommand]);
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

function unrecognisedCommand(command: string) {
  return (
    <p>
      '<span className="neon-text">{command}</span>' is not recognized as an internal or external command.
    </p>
  );
}
