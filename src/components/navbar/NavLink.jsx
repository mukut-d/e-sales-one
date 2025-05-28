import { Link } from "react-router-dom";

export const NavLink = ({
  icon,
  name,
  link,
  className,
  target = null,
  ...res
}) => {
  return (
    <div className={`flex  px-5 items-center ${className}`} {...res}>
      <Link target={target} to={link} className=" flex items-center">
        <img src={icon} width={20} height={20} />
        <p className="px-2 ">{name}</p>
      </Link>
    </div>
  );
};
