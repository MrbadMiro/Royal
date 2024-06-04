import React from "react";
import { Link } from "react-scroll";
const NavLink = ({ href, link }) => {
  return (
    <li className="nav list-none cursor-pointer mr-8 ">
      <Link
        to={href}
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className="font-medium text-[14px] text-navy transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-green after:transition-all after:duration-300 hover:after:w-full hover:after:h-[3px]"
      >
        {link}
      </Link>
    </li>
  );
};

export default NavLink;
