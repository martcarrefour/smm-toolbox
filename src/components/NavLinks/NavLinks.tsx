import NavLink from "../NavLink/NavLink";
import { NavLinksProps } from "./NavLinks.props";

const NavLinks: React.FC<NavLinksProps> = ({ links }) => (
  <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
    {links.map((link, index) => (
      <li key={index}>
        <NavLink {...link} />
      </li>
    ))}
  </ul>
);

export default NavLinks;
