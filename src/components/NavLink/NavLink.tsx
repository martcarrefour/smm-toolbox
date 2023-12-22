import Link from "next/link";
import { NavLinkProps } from "./NavLink.props";

const NavLink: React.FC<NavLinkProps> = ({ href, className, children }) => (
  <Link href={href} className={className}>
    {children}
  </Link>
);

export default NavLink;
