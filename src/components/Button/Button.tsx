import { ButtonProps } from "./Button.props";
import cn from "classnames";

export const Button = ({
  children,
  className,
  appearance = "primary",
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={cn(className, {
        ["text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"]:
          appearance === "accent",
        ["text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"]:
          appearance === "ghost",
        ["text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"]:
          appearance === "primary",
      })}
      {...props}
    >
      {children}
    </button>
  );
};

//? Add loading option
