import Button from "../button/button";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import React from "react";
import type { stepControlProps } from "./stepControl.type";

const StepControl: React.FC<stepControlProps> = ({
  step,
  increseSteps,
  decreaseSteps,
}) => {
  return (
    <div>
      {
        <div className="justify-center items-center mt-4 text-center">
          <Button
            variant="background"
            disabled={step <= 1}
            onClick={decreaseSteps}
            className={`
              ${step <= 1 ? "cursor-not-allowed" : ""}
              `}
          >
            <MinusIcon className="w-5 h-5" />
          </Button>
          <span className="mx-3"> گام: {step}</span>
          <Button
            variant="background"
            disabled={step >= 5}
            onClick={increseSteps}
            className={`
              ${step >= 5 ? "cursor-not-allowed" : ""}`}
          >
            <PlusIcon className="w-5 h-5" />
          </Button>
        </div>
      }
    </div>
  );
};

export default StepControl;
