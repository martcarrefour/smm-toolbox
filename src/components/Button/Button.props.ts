import {
  type DetailedHTMLProps,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}
