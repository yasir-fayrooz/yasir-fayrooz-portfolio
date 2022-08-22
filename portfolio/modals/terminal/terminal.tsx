import styles from './terminal.module.css';
import { title } from './commands';
import React from 'react';
import { setTimeout } from 'timers';
import { handleCommand } from './command-handler';
import { CommandHistory, IWindowChildProps } from '../../shared/interfaces';

const TerminalModal = (props: IWindowChildProps) => {
  const [commandInput, setCommandInput] = React.useState('');
  const [commandHistory, setCommandHistory] = React.useState([] as CommandHistory[]);

  let terminal: HTMLElement;
  let parentWindow: HTMLElement;
  let terminalInput: HTMLInputElement;

  React.useLayoutEffect(() => {
    terminal = document.getElementById('terminal')!;
    terminalInput = document.getElementById('terminal-input')! as HTMLInputElement;
    setTimeout(() => terminal?.click(), 50);
    new ResizeObserver((entries) => terminalSize(entries)).observe(terminal);
  }, []);

  React.useLayoutEffect(() => {
    terminal = document.getElementById('terminal')!;
    terminal.scrollTop = terminal.scrollHeight;
  }, [commandHistory]);

  React.useLayoutEffect(() => {
    parentWindow = document.getElementById(props.windowId)!;
    window.addEventListener('click', clickListener);

    //unmount cleanup
    return () => {
      window.removeEventListener('click', clickListener);
    };
  }, []);

  React.useLayoutEffect(() => {
    window.addEventListener('click', clickListener);

    //unmount cleanup
    return () => {
      window.removeEventListener('click', clickListener);
    };
  }, []);

  function clickListener(e: MouseEvent) {
    if (e.target && (terminal?.contains(e.target as Node) || parentWindow?.contains(e.target as Node))) {
      props.setIsActive(true);
      terminalInput.focus();
    } else {
      props.setIsActive(false);
      terminalInput.blur();
    }
  }

  function terminalSize(entries: ResizeObserverEntry[]) {
    entries.forEach((entry) => {
      terminal.style.height = entry.contentRect.height + 'px;';
      if (entry.contentRect.width < 300) {
        terminal.style.fontSize = '8px';
      } else if (entry.contentRect.width < 400) {
        terminal.style.fontSize = '0.56em';
      } else if (entry.contentRect.width < 500) {
        terminal.style.fontSize = '0.75em';
      } else if (entry.contentRect.width < 600) {
        terminal.style.fontSize = '0.85em';
      } else if (entry.contentRect.width < 700) {
        terminal.style.fontSize = '0.95em';
      } else {
        terminal.style.fontSize = '1em';
      }
    });
  }

  function onInput(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter') {
      handleCommand((e.target as HTMLTextAreaElement).value, commandHistory, setCommandHistory);
      (e.target as HTMLTextAreaElement).value = '';
      setCommandInput('');
    }
  }

  function onChangeInput(e: any) {
    setCommandInput((e.target as HTMLTextAreaElement).value);
  }

  return (
    <div id="terminal" className={styles.terminal + ' h-full overflow-y-auto'}>
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
                  <p className="text-bold">
                    <span className="text-rose-800">root</span>
                    <span className="neon-text">@Yasir_Fayrooz:~$</span>
                    <span style={{ whiteSpace: 'pre-wrap' }} className="ml-2 bg-black">
                      {command.command}
                    </span>
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
        <p style={{ whiteSpace: 'pre-wrap' }} className={`ml-2 bg-black`}>
          <span className="text-bold mr-2" style={{ color: 'var(--text-color)' }}>
            <span className="text-rose-800">root</span>
            @Yasir_Fayrooz:~$
          </span>
          {commandInput}
          <span className={`${props.isActive && styles.typing}`}></span>
        </p>
      </div>
      <textarea
        id="terminal-input"
        onKeyUp={(e) => onInput(e)}
        onChange={(e) => onChangeInput(e)}
        className="outline-none border-none bg-black caret-transparent w-0 h-0"
      ></textarea>
    </div>
  );
};

export default TerminalModal;
