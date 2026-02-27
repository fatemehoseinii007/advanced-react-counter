import { useEffect, useState } from "react";
import {
  PlusIcon,
  MinusIcon,
  ArrowPathIcon,
  PlayIcon,
  CursorArrowRippleIcon,
  StopIcon,
} from "@heroicons/react/24/outline";
import Button from "./components/button/button";
import StepControl from "./components/stepControl/stepControl";

const App: React.FC = () => {
  const [counter, setcounter] = useState<number>(5);
  const [isAuto, setIsAuto] = useState<boolean>(false);
  const [history, setHistory] = useState<number[]>([5]);
  const [step, setStep] = useState<number>(1);

  const randomMutedColors = () => {
    const mutedColors = [
      "from-amber-200 to-amber-300 text-amber-900",
      "from-rose-200 to-rose-300 text-rose-900",
      "from-emerald-200 to-emerald-300 text-emerald-900",
      "from-sky-200 to-sky-300 text-sky-900",
      "from-violet-200 to-violet-300 text-violet-900",
    ];
    return mutedColors[Math.floor(Math.random() * mutedColors.length)];
  };

  const historyElements = history.map((value, index) => {
    const colorClass = randomMutedColors();
    return (
      <span
        key={index}
        className={`inline justify-center items-center rounded-full ml-0.5 py-1 px-2.5 ${colorClass}`}
      >
        {value}
      </span>
    );
  });

  function increment(): void {
    setcounter((prev) => Math.min(20, prev + step));
  }

  function decrement(): void {
    setcounter((prev) => Math.max(0, prev - step));
  }

  function reset(): void {
    setcounter(5);
  }

  function randomNumber(): void {
    setcounter(Math.floor(Math.random() * 21));
  }

  function toggleAuto() {
    setIsAuto(!isAuto);
  }

  useEffect(() => {
    if (!isAuto) return;
    const timer = setInterval(() => {
      setcounter((prev) => {
        if (prev == 20) {
          setIsAuto(false);
          return 20;
        }
        return prev + step;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isAuto, step]);

  useEffect(() => {
    setHistory((prev) => [...prev, counter].slice(-5));
  }, [counter]);

  // about steps
  function increaseSteps(): void {
    setStep((prev) => Math.floor(Math.min(5, prev + 1)));
  }

  function decreaseSteps(): void {
    setStep((prev) => Math.floor(Math.max(1, prev - 1)));
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-background">
      <div className="h-auto p-6 rounded-sm bg-card shadow-shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)]">
        <div>
          <p className="text-3xl text-center text-header-text vazirmatn mb-7">
            کانتر من
          </p>
          <p className="font-extrabold text-8xl text-center text-head-number">
            {counter}
          </p>
          <div className="items-center justify-center flex gap-10 mt-10">
            <Button onClick={decrement} disabled={counter <= 0} variant="first">
              <MinusIcon className="w-10 h-10" />
            </Button>
            <Button onClick={reset} disabled={counter === 5} variant="second">
              <ArrowPathIcon className="inline w-7 h-7" />
              <span className="vazirmatn text-xl ml-1.5">ریست</span>
            </Button>
            <Button
              onClick={increment}
              disabled={counter >= 20}
              variant="third"
            >
              <PlusIcon className="w-10 h-10" />
            </Button>
          </div>

          <StepControl 
          step={step}
          increseSteps={increaseSteps}
          decreaseSteps={decreaseSteps}
          />

          <div className="flex justify-between items-center mt-16">
            <Button onClick={toggleAuto} variant="gradient-forward">
              {!isAuto ? (
                <PlayIcon className="w-6 h-6 mr-1" />
              ) : (
                <StopIcon className="w-6 h-6 mr-1" />
              )}
              <span className="vazirmatn text-xl">
                {isAuto ? "توقف" : "شروع خودکار"}
              </span>
            </Button>
            <Button onClick={randomNumber} variant="gradient-reverse">
              <CursorArrowRippleIcon className="w-6 h-6 mr-1" />
              <span className="vazirmatn text-xl">عدد تصادفی</span>
            </Button>
          </div>

          <div className="bg-secondry-background mt-8 rounded-md p-3">
            <p className="text-center mb-4 vazirmatn text-xl text-primary-text">
              آخرین مقادیر:
            </p>
            <div className="text-center">{historyElements}</div>
          </div>

          <div className="text-center mt-8">
            <small className="vazirmatn text-small-tag">
              محدوده: 0 تا 20 | گام: {step}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
