import React from "react";
import cn from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "bordered" | "error";
  size?: "small" | "medium" | "large";
  rounded?: boolean;
  text: string;
  testId?: string;
}

export const Button = ({
  variant = "primary",
  size = "large",
  type = "submit", // native button type
  rounded = false,
  text,
  disabled = false,
  testId,
  className,
  ...rest
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center w-full transition-all duration-300 whitespace-nowrap break-words";

  const typeClasses = {
    primary: "bg-purple-500 text-white border-none hover:bg-purple-100",
    secondary: "bg-grey-500 text-purple-50 border-none hover:bg-grey-100",
    bordered: "bg-white text-blue-200 border border-blue-200",
    error: "bg-red-100 text-white border-none hover:bg-red-200",
  };

  const disabledTypeClasses = {
    primary: "bg-grey-100 text-grey-300 border border-grey-100",
    secondary: "bg-grey-100 text-grey-300 border border-grey-100",
    bordered: "bg-grey-100 text-grey-300 border border-grey-100",
    error: "bg-grey-100 text-grey-300 border border-grey-100",
  };

  const sizeClasses =
    size === "small"
      ? "h-24 px-8 font-text-s-semibold"
      : size === "medium"
        ? "h-30 px-16 font-text-m-semibold"
        : "h-30 px-16 font-text-l-semibold";

  const radiusClasses = rounded ? "rounded-full" : "rounded-md";

  const interactionClasses = disabled
    ? "cursor-not-allowed pointer-events-none"
    : "cursor-pointer";

  return (
    <button
      type={type}
      disabled={disabled}
      data-testid={testId}
      className={cn(
        baseClasses,
        sizeClasses,
        radiusClasses,
        interactionClasses,
        disabled ? disabledTypeClasses[variant] : typeClasses[variant],
        className, // allow user override
      )}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
