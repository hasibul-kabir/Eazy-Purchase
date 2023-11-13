"use client";

const disabledStyle =
  "flex items-center justify-center rounded-md px-4 py-2 text-center text-sm font-bold shadow-sm bg-white border border-gray-300 text-gray-300";
const defaultStyle =
  "flex items-center justify-center rounded-md border px-4 py-2 text-sm font-bold text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2";
const variants = {
  primary: "border-transparent bg-primary text-white focus:ring-primary",
  secondary: "border-transparent bg-secondary text-white  focus:ring-secondary",
  tertiary: "border-transparent bg-tertiary text-white focus:ring-tertiary",
};

const AnimatingSpinner = () => (
  <svg
    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

const Button = ({
  children,
  extraClassName = "",
  variant = "primary",
  type = "button",
  onClick,
  isLoading = false,
  disabled,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${defaultStyle} ${extraClassName} ${
        disabled ? disabledStyle : variants[variant]
      }`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <AnimatingSpinner /> : <>{children}</>}
    </button>
  );
};

export default Button;
