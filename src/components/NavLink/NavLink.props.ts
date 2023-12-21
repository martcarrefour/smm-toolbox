import { type DetailedHTMLProps, type HTMLAttributes } from "react";

export interface NavLink
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  href: string;
  text: string;
}
