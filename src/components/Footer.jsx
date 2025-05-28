import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "./navbar/NavLink";
import { images } from "../constants/images";

const navLinks = [
  {
    icon: images.linkedin,
    link: "https://www.linkedin.com/in/mukut-das/",
    name: "Linkedin",
  },
  {
    icon: images.github,
    link: "https://github.com/mukut-d",
    name: "Github",
  },
  {
    icon: images.leetcode,
    link: "https://leetcode.com/u/mukut-d/",
    name: "Leetcode",
  },
  {
    icon: images.codeforces,
    link: "https://codeforces.com/profile/Trouble_shooter",
    name: "Codeforces",
  },
  {
    icon: images.codechef,
    link: "https://www.codechef.com/users/the_cubi5t2",
    name: "Codechef",
  },
  {
    icon: images.geekforgeeks,
    link: "https://www.geeksforgeeks.org/user/mukutmdas2000/",
    name: "GeekForGeeks",
  },
];

const Footer = () => {
  return (
    <div className="flex bg-neutral-50 text-stone-900 py-4 px-4 items-center justify-center">
      <div className="flex">
        <div className="flex flex-col m-2 p-2 ">
          <h4>More About Us</h4>
          <Link to={"/about"} className="underline">
            About
          </Link>
        </div>
        <div className="flex flex-col m-2 p-2 ">
          <h4 className="px-5">Socials</h4>
          {navLinks?.slice(0, 2)?.map((item, index) => (
            <NavLink
              target={"_blank"}
              key={index}
              icon={item.icon}
              link={item.link}
              name={item.name}
              className={"my-2"}
            />
          ))}
        </div>
        <div className="flex flex-col m-2 p-2 ">
          <h4 className="px-5">Profiles</h4>
          {navLinks.slice(2)?.map((item, index) => (
            <NavLink
              key={index}
              icon={item.icon}
              link={item.link}
              name={item.name}
              className={"my-1"}
            />
          ))}
        </div>
      </div>
      <div>
        <div>All rights reserved &copy;</div>
        <div>
          <p>1st Lane Netaji Nagar</p>
          <p> Kantatoli Colony Ranchi-1, 834001</p>
          <p>Jharkhand, India</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
