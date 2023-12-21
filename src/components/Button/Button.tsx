import { ButtonProps } from "./Button.props";
import cn from "classnames";

export const Button = ({
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={cn(
        "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
