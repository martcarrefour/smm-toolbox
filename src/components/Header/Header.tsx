import Logo from "../Logo/Logo";
import NavLink from "../NavLink/NavLink";
import NavLinks from "../NavLinks/NavLinks";

import { HeaderProps } from "./Header.props";
import { Button } from "../Button/Button";
import AuthMenu from "../AuthMenu/AuthMenu";

const links = [
  {
    href: "/vk/comments",
    text: "VK Comments",
    className:
      "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white",
  },
];

const Header: React.FC<HeaderProps> = ({ className, ...props }) => (
  <header>
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Logo />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-8 lg:mt-0">
          <NavLinks links={links} className="font-medium" />
        </div>

        <div className="flex items-center min-w-48 justify-end">
          <AuthMenu />
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
