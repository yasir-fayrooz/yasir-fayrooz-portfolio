import styles from './window.module.css';
import Image from 'next/image';
import { Rnd } from 'react-rnd';
import React, { useId } from 'react';
import { WindowState } from '../../shared/interfaces';
import { useWindowSize } from '@react-hook/window-size';
import usePreviousDifferent from '@rooks/use-previous-different';

interface IWindow {
  children: React.ReactElement;
  calcHeight: () => number;
  calcWidth: () => number;
  title: string;
  icon?: string;
  state: WindowState;
  setWindowState: (_value: WindowState) => void;
}

const Window = (props: IWindow) => {
  const windowId = useId();
  const [width, height] = useWindowSize();
  const previousWidth = usePreviousDifferent(width);
  const previousHeight = usePreviousDifferent(height);

  const [size, setSize] = React.useState({
    width: props.calcWidth(),
    height: props.calcHeight(),
    position: { x: width / 2 - props.calcWidth() / 2, y: height / 2 - props.calcHeight() / 2 },
  });
  const [isActive, setIsActive] = React.useState(false);

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
    }
  }, [previousWidth, width]);

  React.useEffect(() => {
    if (previousHeight && previousHeight > 0) {
      const yEdge = size.height + size.position.y;
      if (height < yEdge) {
        setSize((state) => ({
          ...state,
          height: size.height > height ? height : size.height,
          position: { ...state.position, y: 0 },
        }));
      }
    }
  }, [previousHeight, height]);

  function toggleFullScreen() {
    if (size.width === width && size.height === height) {
      const defaultSize = {
        width: props.calcWidth(),
        height: props.calcHeight(),
        position: { x: width / 2 - props.calcWidth() / 2, y: height / 2 - props.calcHeight() / 2 },
      };
      setSize(defaultSize);
    } else {
      setSize({ width: width, height: height, position: { x: 0, y: 0 } });
    }
  }

  return (
    <Rnd
      id={windowId}
      size={{ width: size.width, height: size.height }}
      position={size.position}
      style={{ position: 'fixed' }}
      bounds="window"
      minWidth={280}
      minHeight={200}
      dragHandleClassName="handle"
      className={
        (props.state === WindowState.Minimised ? styles.minimised : styles.maximised) +
        ` bg-black border ${isActive ? 'border-slate-500 z-[2]' : 'border-slate-700 z-[1]'} rnd`
      }
      onDragStop={(e, d) => {
        setSize({ width: size.width, height: size.height, position: { x: d.x, y: d.y } });
      }}
      onResizeStop={(e, direction, ref, d, position) => {
        setSize({
          width: parseInt(ref.style.width),
          height: parseInt(ref.style.height),
          position: position,
        });
      }}
    >
      <div className="flex flex-col w-full h-full">
        {/* TITLE BAR */}
        <div className={`flex ${isActive ? 'bg-slate-200' : 'bg-slate-600'} w-full`}>
          {/* TITLE AND ICON */}
          <div className="flex min-w-0 py-1 grow items-center handle cursor-grab active:cursor-grabbing">
            <div className="h-full w-7 ml-1 flex flex-col justify-center">
              <Image
                src={props.icon ? props.icon : '/images/start-icon.png'}
                height="300"
                width="300"
                layout="responsive"
              />
            </div>
            <p className={styles.window + ' ml-2 text-black'}>{props.title}</p>
          </div>

          {/* WINDOW BUTTONS */}
          <div className="flex justify-end">
            <button
              className="flex items-center px-2 text-slate-400 hover:text-slate-600 hover:bg-gray-300 transition duration-300 ease-in-out"
              onClick={() => props.setWindowState(WindowState.Minimised)}
            >
              <span className="material-symbols-outlined">minimize</span>
            </button>

            <button
              className="flex items-center px-2 text-slate-400 hover:text-slate-600 hover:bg-gray-300 transition duration-300 ease-in-out"
              onClick={() => toggleFullScreen()}
            >
              <span className="material-symbols-outlined">
                {width === size.width && height === size.height ? 'close_fullscreen' : 'fullscreen'}
              </span>
            </button>

            <button
              className="flex items-center px-2 text-slate-400 hover:text-slate-200 hover:bg-red-600 transition duration-300 ease-in-out"
              onClick={() => props.setWindowState(WindowState.Closed)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>

        {/* CHILD WINDOW COMPONENT */}
        <div className="grow min-h-0">
          {React.cloneElement(props.children, { isActive: isActive, setIsActive: setIsActive, windowId: windowId })}
        </div>
      </div>
    </Rnd>
  );
};

export default Window;
