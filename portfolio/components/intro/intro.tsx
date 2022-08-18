import Blinker from '../blinker/blinker';
import IntroText from './intro-text';

const Intro = () => {
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
          <IntroText />
        </div>
      </div>
    </div>
  );
};

export default Intro;
