import styles from './terminal.module.css';
import { title } from './commands';
import React from 'react';

const TerminalModal = () => {
  let terminal: HTMLElement;

  React.useLayoutEffect(() => {
    terminal = document.getElementById('terminal')!;
    new ResizeObserver((entries) => terminalSize(entries)).observe(terminal);
  }, []);

  function terminalSize(entries: ResizeObserverEntry[]) {
    entries.forEach((entry) => {
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
    <div id="terminal" className="w-full h-full">
      <div className={styles.responsiveMobileText}>
        {title.map((el, index) => (
          <pre key={index} className="m-0 p-0">
            {el}
          </pre>
        ))}
      </div>
    </div>
  );
};

export default TerminalModal;
