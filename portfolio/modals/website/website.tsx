import styles from './website.module.css';
import React from 'react';
import { IWindowChildProps } from '../../shared/interfaces';

const WebsiteModal = (props: IWindowChildProps) => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex justify-center m-3">
        <h3>How I made this website</h3>
      </div>
      <div className="grow overflow-y-auto">
        <p>test</p>
      </div>
    </div>
  );
};

export default WebsiteModal;
