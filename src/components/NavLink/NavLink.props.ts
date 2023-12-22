import { ReactNode, type DetailedHTMLProps, type HTMLAttributes } from "react";

export interface NavLinkProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  href: string;
  children: ReactNode;
}
