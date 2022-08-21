import styles from './terminal.module.css';
import { title } from './commands';
import React from 'react';
import { setTimeout } from 'timers';

interface ITerminalModal {
  isActive: boolean;
}

const TerminalModal = (props: ITerminalModal) => {
  const [commandInput, setCommandInput] = React.useState('');

  let terminal: HTMLElement;

  React.useLayoutEffect(() => {
    terminal = document.getElementById('terminal')!;
    setTimeout(() => terminal?.click(), 50);
    new ResizeObserver((entries) => terminalSize(entries)).observe(terminal);
  }, []);

  React.useEffect(() => {
    if (props.isActive) {
      let terminalInput = document.getElementById('terminal-input')! as HTMLInputElement;
      setTimeout(() => terminalInput.focus(), 50);
    }
  }, [props.isActive]);

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

  return (
    <div id="terminal">
      {/* ASCII ART */}
      <div>
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
      {/* INPUT FIELD */}
      <div className="flex ml-2">
        <p style={{ color: 'var(--text-color)' }} className="text-bold">
          <span className="text-rose-800">root</span>@Yasir_Fayrooz:~$
        </p>
        <p className={`ml-2 bg-black ${props.isActive && styles.typing}`}>{commandInput}</p>
      </div>
      <input
        id="terminal-input"
        type="text"
        onChange={(e) => setCommandInput(e.target.value)}
        className="outline-none border-none bg-black caret-transparent w-0"
      />
    </div>
  );
};

export default TerminalModal;
