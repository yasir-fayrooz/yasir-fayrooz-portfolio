import { useEffect, useRef, RefObject } from 'react';
import { Rnd } from 'react-rnd';
import { WindowState } from '../shared/interfaces';

export default function useClickOutside(
  startbarRef: RefObject<HTMLButtonElement>,
  state: WindowState,
  setWindowState: (_value: WindowState) => void,
  maximisedStyle: string
) {
  const windowRef = useRef<HTMLDivElement>(null);
  const windowChildRef = useRef<HTMLDivElement>(null);
  const rndRef = useRef<Rnd>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (windowRef?.current?.contains(e.target as Node) || windowChildRef?.current?.contains(e.target as Node)) {
      setWindowState(WindowState.Open);
    } else {
      if (startbarRef.current?.contains(e.target as Node)) {
        if (state === WindowState.Minimised || state === WindowState.Inactive) {
          setWindowState(WindowState.Open);
        }
      } else if (rndRef.current?.resizableElement.current?.classList.contains(maximisedStyle)) {
        setWindowState(WindowState.Inactive);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { windowRef, windowChildRef, rndRef };
}
