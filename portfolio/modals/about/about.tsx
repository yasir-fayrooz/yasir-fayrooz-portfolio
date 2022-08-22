import styles from './about.module.css';
import React from 'react';
import { IWindowChildProps } from '../../shared/interfaces';

const AboutModal = (props: IWindowChildProps) => {
  let about: HTMLElement;
  let parentWindow: HTMLElement;
  React.useLayoutEffect(() => {
    about = document.getElementById('about')!;
    parentWindow = document.getElementById(props.windowId)!;
    window.addEventListener('click', clickListener);

    //unmount cleanup
    return () => {
      window.removeEventListener('click', clickListener);
    };
  }, []);

  function clickListener(e: MouseEvent) {
    if (e.target && (about?.contains(e.target as Node) || parentWindow?.contains(e.target as Node))) {
      props.setIsActive(true);
    } else {
      props.setIsActive(false);
    }
  }

  return (
    <div id="about">
      <p>About me!</p>
    </div>
  );
};

export default AboutModal;
