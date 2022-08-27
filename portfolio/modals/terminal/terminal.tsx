import styles from './terminal.module.css';
import { title } from './commands';
import React, { ChangeEvent, useRef } from 'react';
import { setTimeout } from 'timers';
import { handleCommand } from './command-handler';
import { CommandHistory, IWindowChildProps, WindowState } from '../../shared/interfaces';
import GlobalContext from '../../contexts/GlobalContext';

const TerminalModal = (props: IWindowChildProps) => {
  const [commandInput, setCommandInput] = React.useState<string>('');
  const [commandHistory, setCommandHistory] = React.useState<CommandHistory[]>([]);

  const terminal = useRef<HTMLDivElement>(null);
  const terminalInput = useRef<HTMLInputElement>(null);

  const windows = React.useContext(GlobalContext);

  React.useEffect(() => {
    setTimeout(() => terminal.current?.click(), 50);
    new ResizeObserver((entries) => terminalSize(entries)).observe(terminal.current!);
  }, []);

  React.useEffect(() => {
    terminal.current!.scrollTop = terminal.current!.scrollHeight;
  }, [commandHistory]);

  React.useEffect(() => {
    document.addEventListener('click', clickListener, true);
    return () => {
      document.removeEventListener('click', clickListener, true);
    };
  }, []);

  React.useEffect(() => {
    if (props.windowState === WindowState.Open) {
      setTimeout(() => terminal.current?.click(), 50);
    }
  }, [props.windowState]);

  function clickListener(e: MouseEvent) {
    if (
      e.target &&
      (terminal.current?.contains(e.target as Node) || props.windowRef?.current?.contains(e.target as Node))
    ) {
      terminalInput.current?.focus();
    } else {
      terminalInput.current?.blur();
    }
  }

  function terminalSize(entries: ResizeObserverEntry[]) {
    entries.forEach((entry) => {
      if (terminal.current) {
        terminal.current.style.height = entry.contentRect.height + 'px;';
        if (entry.contentRect.width < 300) {
          terminal.current.style.fontSize = '8px';
        } else if (entry.contentRect.width < 400) {
          terminal.current.style.fontSize = '0.56em';
        } else if (entry.contentRect.width < 500) {
          terminal.current.style.fontSize = '0.75em';
        } else if (entry.contentRect.width < 600) {
          terminal.current.style.fontSize = '0.85em';
        } else if (entry.contentRect.width < 700) {
          terminal.current.style.fontSize = '0.95em';
        } else {
          terminal.current.style.fontSize = '1em';
        }
      }
    });
  }

  const onInput = async () => {
    await handleCommand(commandInput, commandHistory, setCommandHistory, windows);
    setCommandInput('');
    terminalInput.current?.blur();
    terminalInput.current?.focus();
  };

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCommandInput((e.target as HTMLInputElement).value);
  };

  return (
    <div ref={terminal} className={styles.terminal + ' h-full overflow-y-auto'}>
      {/* ASCII ART */}
      <div className="text-cyan-700">
        {title.map((el, index) => (
          <pre key={index} className="m-0 p-0">
            {el}
          </pre>
        ))}
      </div>
      {/* WELCOME TEXT */}
      <div className="ml-2">
        <p>Welcome to my interactive web terminal.</p>
        <p>
          For a list of available commands, type '<span style={{ color: 'var(--text-color)' }}>help</span>
          '.
        </p>
      </div>
      {/* COMMAND HISTORY */}
      <div className="ml-2">
        {commandHistory.map((command, index) => {
          {
            return (
              <div key={'history' + index}>
                <div className="flex">
                  <p style={{ whiteSpace: 'pre-wrap' }} className="text-bold">
                    <span className="text-rose-800">root</span>
                    <span className="neon-text">@Yasir_Fayrooz:~$</span>
                    <span className="ml-2 bg-black">{command.command}</span>
                  </p>
                </div>
                {React.cloneElement(command.element, { key: index })}
              </div>
            );
          }
        })}
      </div>
      {/* INPUT FIELD */}
      <div className="flex">
        <p style={{ whiteSpace: 'pre-wrap' }} className={`mx-2 bg-black`}>
          <span className="text-bold mr-2" style={{ color: 'var(--text-color)' }}>
            <span className="text-rose-800">root</span>
            @Yasir_Fayrooz:~$
          </span>
          <span>{commandInput}</span>
          <span className={`${props.windowState === WindowState.Open && styles.typing}`}></span>
        </p>
      </div>
      <input
        type="text"
        ref={terminalInput}
        onKeyUp={async (e) => {
          if (e.key === ' ') {
            setCommandInput((e.target as HTMLInputElement).value);
            terminalInput.current?.focus();
            const val = terminalInput.current!.value; //store the value of the element
            terminalInput.current!.value = ''; //clear the value of the element
            terminalInput.current!.value = val; //set that value back.
          } else if (e.key === 'Enter') {
            await onInput();
          }
        }}
        value={commandInput}
        onChange={(e) => inputChange(e)}
        className="outline-none border-none bg-black caret-transparent w-px h-px"
      />
    </div>
  );
};

export default TerminalModal;
