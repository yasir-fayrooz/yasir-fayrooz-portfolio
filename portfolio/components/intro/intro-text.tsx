import styles from './intro-text.module.css';

const IntroText = () => {
  return (
    <div className={styles.text + ' ' + styles.typing}>
      <p>
        \[._.]/ Hey there <span className={styles.wave}>👋</span> I'm Yasir Fayrooz
      </p>
      <p>
        <span className="text-green-300">$ </span> A "Full Stack" Engineer
      </p>
      <p>
        <span className="text-green-300">$ </span> Welcome to my world
      </p>
      <p>
        <span className="text-green-300">$ </span> Open my terminal to learn more{' '}
        <span className="text-sky-300 underline cursor-pointer">here</span>
      </p>
    </div>
  );
};

export default IntroText;
