import styles from './resume.module.css';
import React, { useEffect, useState } from 'react';
import { IWindowChildProps } from '../../shared/interfaces';

const ResumeModal = (props: IWindowChildProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`flex flex-col w-full h-full overflow-y-auto ${styles.iframeLoader}`}>
      {!loaded && (
        <div className="flex justify-center mt-10">
          <p className="text-[1em] animate-ping">Loading resume</p>
        </div>
      )}

      <iframe
        className="grow"
        onLoad={() => setLoaded(true)}
        title="Resume"
        src="https://texlive2020.latexonline.cc/compile?git=https://github.com/yasir-fayrooz/yasir-fayrooz-resume&target=resume.tex&command=xelatex&force=true" //&force=true to force re-compile
      ></iframe>

      {!loaded && (
        <div
          className={`grow flex flex-col w-full h-full content-center items-center justify-end mb-5 invisible ${styles.notLoaded}`}
        >
          <p>
            If the resume takes too long to load, click{' '}
            <a
              href="https://drive.google.com/file/d/1o6YPnILHA6p40K7_DyDjkOWIim6-a91t/view"
              target="_blank"
              className="text-blue-400 underline"
            >
              here
            </a>{' '}
            to view a manual version.
          </p>
        </div>
      )}

      {/**/}
    </div>
  );
};

export default ResumeModal;
