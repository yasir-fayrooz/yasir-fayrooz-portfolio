import styles from './window.module.css';

interface IWindow {
  children: React.ReactNode;
  height: string;
  width: string;
}

const Window = (props: IWindow) => {
  return (
    <div style={{ width: props.width, height: props.height, position: 'fixed' }} className="bg-slate-400">
      {props.children}
    </div>
  );
};

export default Window;
