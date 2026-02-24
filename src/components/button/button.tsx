import React from "react";
import type { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled = false,
  className = "",
  variant = "first",
}) => {
  const variantClasses = {
    'first': 'rounded-full p-5 bg-first-button',
    'second': 'bg-second-button rounded-full py-6 px-8',
    'third': 'bg-third-button rounded-full p-5',
    'background': 'p-3 rounded-full bg-background',
    'gradient-forward':
      'bg-gradient-to-tr from-gridient-start to-gridient-end rounded-md p-5 flex justify-center items-center',
    'gradient-reverse':
      'flex justify-center items-center bg-gradient-to-tr from-gridient-end to-gridient-start rounded-md py-5 px-7',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
                ${variantClasses[variant]}
                ${disabled ? "opacity-50" : "opacity-100"}
                ${className}
                `}
    >
      {children}
    </button>
  );
};

export default Button;
