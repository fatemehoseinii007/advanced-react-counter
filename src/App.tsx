import { useState } from "react";
import {
  PlusIcon,
  MinusIcon,
  ArrowPathIcon,
  PlayIcon,
  CursorArrowRippleIcon,
} from "@heroicons/react/24/outline";

const App: React.FC = () => {
  const [counter, setcounter] = useState<number>(5);

  function increment(): void {
    setcounter((prev) => Math.min(20, prev + 1));
  }

  function decrement(): void {
    setcounter((prev) => Math.max(0, prev - 1));
  }

  function reset(): void {
    setcounter(5);
  }

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-background">
        <div className="h-auto p-9 rounded-sm bg-card shadow-shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)]">
          <div>
            <p className="text-3xl text-center text-header-text vazirmatn mb-7">
              کانتر من
            </p>
            <p className="font-extrabold text-8xl text-center text-head-number">
              {counter}
            </p>
            <div className="items-center justify-center flex gap-10 mt-10">
              <button
                onClick={decrement}
                className="rounded-full p-5 bg-first-button"
              >
                <MinusIcon className="w-10 h-10"></MinusIcon>
              </button>
              <button
                onClick={reset}
                className="bg-second-button rounded-full py-6 px-8"
              >
                <ArrowPathIcon className="inline w-7 h-7"></ArrowPathIcon>
                <span className="vazirmatn text-xl ml-1.5">ریست</span>
              </button>
              <button
                onClick={increment}
                className="bg-third-button rounded-full p-5 "
              >
                <PlusIcon className=" w-10 h-10 "></PlusIcon>
              </button>
            </div>

            <div className="flex justify-between items-center mt-16">
              <button className="bg-gradient-to-tr from-gridient-start to-gridient-end rounded-md p-5 flex justify-center items-center">
                <PlayIcon className="w-6 h-6 mr-1"></PlayIcon>
                <span className="vazirmatn text-xl">شروع خودکار</span>
              </button>
              <button className="flex justify-center items-center bg-gradient-to-tr from-gridient-end to-gridient-start rounded-md py-5 px-7">
                <CursorArrowRippleIcon className="w-6 h-6 mr-1"></CursorArrowRippleIcon>
                <span className="vazirmatn text-xl">عدد تصادفی</span>
              </button>
            </div>

            <div className="bg-secondry-background mt-8 rounded-md p-3">
              <p className="text-center mb-4 vazirmatn text-xl text-primary-text">
                آخرین مقادیر:
              </p>
              <div className="text-center">
                <p className=" justify-center inline rounded-full py-1 px-2.5 bg-gradient-to-tr from-gridient-tag-start to-gridient-tag-end text-primary-text">
                  5
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <small className="vazirmatn text-small-tag">
                محدوده: 0 تا 20 | گام: 2
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
