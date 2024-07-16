import styles from './resume.module.css';
import React, { useEffect, useRef, useState } from 'react';
import { IWindowChildProps } from '../../shared/interfaces';

const ResumeModal = (props: IWindowChildProps) => {
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    console.log(iframeRef.current?.src);
    if (!iframeRef.current!.src || iframeRef.current!.src === '') {
      fetch('https://api.github.com/repositories/528450278/contents/cv.pdf')
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          iframeRef.current!.src = 'data:application/pdf;base64,' + encodeURIComponent(data['content']);
          setLoaded(true);
        });
    } else {
      setLoaded(true);
    }
  }, []);

  return (
    <div className={`flex flex-col w-full h-full overflow-y-auto ${styles.iframeLoader}`}>
      {!loaded && (
        <div className="flex justify-center mt-10">
          <p className="text-[1em] animate-ping">Loading resume</p>
        </div>
      )}

      <iframe className="grow" title="Resume" ref={iframeRef}></iframe>

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
              rel="noreferrer"
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
