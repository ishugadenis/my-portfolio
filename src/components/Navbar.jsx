import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  //const [navItems, setNavItems] = useState([]);

  const navItems = [
    { component: "Home", link: "/" },
    { component: "Projects", link: "/projects" },
    { component: "About us", link: "/aboutus" },
    { component: "Contact us", link: "/contactus" },
  ];

  return (
   <div >
      <nav className="navbar">
        <ul className="nav-list">
          {navItems.map((navItem) => (
            <li key={navItem.link} className="nav-items">
              <Link to={navItem.link} smooth={true} duration={500}>{navItem.component}</Link>
            </li>
          ))}
        </ul>
      </nav>
  </div>
  );
};

export default Navbar;
