import classNames from "classnames";
import NavLink from "../NavLink/NavLink";
import { NavLinksProps } from "./NavLinks.props";

const NavLinks: React.FC<NavLinksProps> = ({ links, className }) => (
  <ul className={className}>
    {links.map((link, index) => (
      <li key={index}>
        <NavLink href={link.href} className={link.className}>
          {link.text}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default NavLinks;
