import styles from './window.module.css';
import Image from 'next/image';
import { Rnd } from 'react-rnd';
import React from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import { WindowState } from '../../shared/interfaces';
import { useWindowSize } from '@react-hook/window-size';
import usePreviousDifferent from '@rooks/use-previous-different';

interface IWindow {
  children: React.ReactNode;
  height: number;
  width: number;
  title: string;
  icon?: string;
}

const Window = (props: IWindow) => {
  const [width, height] = useWindowSize();
  const previousWidth = usePreviousDifferent(width);
  const previousHeight = usePreviousDifferent(height);

  const [size, setSize] = React.useState({
    width: props.width,
    height: props.height,
    position: { x: width / 2 - props.width, y: height / 2 - props.height },
  });
  const { setWindowState } = React.useContext(GlobalContext);

  React.useEffect(() => {
    if (previousWidth && previousWidth > 0) {
      const xEdge = size.width + size.position.x;
      if (width < xEdge) {
        setSize((state) => ({
          ...state,
          width: size.width > width ? width : size.width,
          position: { ...state.position, x: 0 },
        }));
      }

      console.log(size);
    }
  }, [previousWidth, width]);

  React.useEffect(() => {
    if (previousHeight && previousHeight > 0) {
      console.log('heigghtt');
      if (previousHeight > height) {
        const heightDiff = previousHeight - height;
        setSize((state) => ({
          ...state,
          y: state.position.y - heightDiff,
        }));
      }
      if (height > previousHeight) {
        const heightDiff = height - previousHeight;
        setSize((state) => ({
          ...state,
          y: state.position.y + heightDiff,
        }));
      }
    }
  }, [previousHeight, height, setSize]);

  return (
    <Rnd
      size={{ width: size.width, height: size.height }}
      position={size.position}
      style={{ position: 'fixed' }}
      bounds="window"
      dragHandleClassName="handle"
      className="bg-black border border-slate-700 window"
      onDragStop={(e, d) => {
        setSize({ width: size.width, height: size.height, position: { x: d.x, y: d.y } });
      }}
      onResizeStop={(e, direction, ref, d, position) => {
        setSize({
          width: ref.style.width,
          height: ref.style.height,
          position: position,
        });
      }}
    >
      {/* TITLE BAR */}
      <div className="flex bg-slate-200 w-full">
        {/* TITLE AND ICON */}
        <div className="flex py-1 grow items-center handle cursor-grab active:cursor-grabbing">
          <div className="h-full w-7 ml-1 flex flex-col justify-center">
            <Image src="/images/terminal-icon.png" height="300" width="300" layout="responsive" />
          </div>
          <p className="ml-2 font-semibold text-black">{props.title}</p>
        </div>

        {/* WINDOW BUTTONS */}
        <div className="flex justify-end">
          <button className="flex items-center px-2 text-slate-400 hover:text-slate-600 hover:bg-gray-300 transition duration-300 ease-in-out">
            <span className="material-symbols-outlined">minimize</span>
          </button>

          <button className="flex items-center px-2 text-slate-400 hover:text-slate-600 hover:bg-gray-300 transition duration-300 ease-in-out">
            <span className="material-symbols-outlined">fullscreen</span>
          </button>

          <button
            className="flex items-center px-2 text-slate-400 hover:text-slate-200 hover:bg-red-600 transition duration-300 ease-in-out"
            onClick={() => setWindowState(WindowState.Closed)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </div>

      {/* CHILD WINDOW COMPONENT */}
      {props.children}
    </Rnd>
  );
};

export default Window;
