import Logo from "../Logo/Logo";
import NavLink from "../NavLink/NavLink";
import NavLinks from "../NavLinks/NavLinks";
import MobileMenu from "../MobileMenu/MobileMenu";
import { HeaderProps } from "./Header.props";
import { Button } from "../Button/Button";
import AuthMenu from "../AuthMenu/AuthMenu";

const links = [
  {
    href: "vk_comments",
    text: "VK Comments",
    className:
      "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white",
  },
];

const Header: React.FC<HeaderProps> = ({ className, ...props }) => (
  <header>
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div className="  px-4 md:flex flex flex-wrap justify-between items-center mx-auto">
        <Logo />
        <div className="flex items-center lg:order-2">
          <AuthMenu />

          <MobileMenu />
        </div>
        <div
          className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <NavLinks
            links={links}
            className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
          />
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
