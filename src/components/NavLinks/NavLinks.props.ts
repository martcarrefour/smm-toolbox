import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface NavLinksProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  links: { href: string; text: string; className: string }[];
}
