import { NavLink } from "react-router-dom";

type sideBarProps = {
  img: string;
  name: string;
  link: string;
};
const SidebarButton = ({ img, name, link }: sideBarProps) => {
  return (
    <NavLink to={link}>
      <button className="flex flex-col gap-1 text-lm font-[700] items-center text-white  hover:bg-[#283E6C] w-full p-[1em] ">
        <img className="w-[24px] " src={img} alt={name} />
        <span>{name}</span>
      </button>
    </NavLink>
  );
};

export default SidebarButton;
