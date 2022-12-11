import React, { useEffect, useRef, useState } from 'react';
import EnteredContext from '../../contexts/EnteredContext';
import Blinker from '../blinker/blinker';
import IntroText from './intro-text';

const Intro = () => {
  const hasEntered = React.useContext(EnteredContext);
  let [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const skipDiv = useRef<HTMLDivElement>(null);
  const skipIntro = React.useRef<() => void>(() => {});

  useEffect(() => {
    setAudio(new Audio('./audio/typing.m4a'));
  }, []);

  function openWebsite() {
    audio!.play();

    audio!.onplaying = (e) => {
      hasEntered.setEntered(true);
    };

    setTimeout(() => {
      skipDiv.current!.style.display = 'none';
    }, 11500);
  }

  function skipIntroFunc() {
    audio!.pause();
    skipDiv.current!.style.display = 'none';
    const startbar = document.getElementsByClassName('fadeInStartbar');
    if (startbar.item(0)) {
      startbar.item(0)?.classList.remove('fadeInStartbar');
    }
  }

  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <div>
        {/* TITLE */}
        <div className="flex">
          <h1>
            <span className="text-rose-800">root</span>@Yasir_Fayrooz:~$
          </h1>

          {/* BLINKER */}
          <div className="ml-2 flex flex-col justify-center">
            <Blinker />
          </div>
        </div>

        {/* INTRO TEXT */}
        <div>
          {!hasEntered.entered ? (
            <button
              onClick={() => openWebsite()}
              className="flex mx-auto mt-20 xxxs:mt-16 font-bold p-3 px-12 rounded-xl bg-blue-500/75 hover:bg-blue-600/75 shadow-lg shadow-gray-500/25 hover:shadow-gray-400/25 animate-bounce transition-all ease-in-out delay-150"
            >
              Click me!
            </button>
          ) : (
            <>
              <IntroText skipIntroRef={skipIntro} />
              <div
                className="flex justify-center mt-3"
                ref={skipDiv}
                onClick={() => {
                  skipIntro.current();
                  skipIntroFunc();
                }}
              >
                <button>Skip intro</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
