import React from "react";
import { images } from "../../constants/images";
import { Link } from "react-router-dom";
import { NavLink } from "./NavLink";

const navLinks = [
  { name: "Home", icon: images.home, link: "/" },
  { name: "About", icon: images.about, link: "/about" },
  { name: "Products", icon: images.products, link: "/products" },
  { name: "Cart", icon: images.cart, link: "/cart" },
  { name: "Login", icon: images.login, link: "/login" },
  { name: "Signup", icon: images.signup, link: "/signup" },
  { name: "Logout", icon: images.logout, link: "/" },
];

const Navbar = () => {
  return (
    <nav className="bg-gray-100 flex p-4 items-center justify-between ">
      {/* Logo */}
      <Link to={"/"}>
        <img src={images.logo} width={70} height={70} />
      </Link>
      <div className="flex w-3/4  p-4" id="navbar">
        {navLinks?.map((nav, index) => (
          <NavLink
            key={index}
            icon={nav.icon}
            name={nav.name}
            link={nav.link}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
