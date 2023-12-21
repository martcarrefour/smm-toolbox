import Link from "next/link";
import { NavLink } from "./NavLink.props";

const NavLink: React.FC<NavLink> = ({ href, text, className }) => (
  <Link href={href} className={className}>
    {text}
  </Link>
);

export default NavLink;
