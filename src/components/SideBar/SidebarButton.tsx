import { NavLink } from "react-router-dom";

type sideBarProps = {
  img: string;
  name: string;
  link: string;
};
const SidebarButton = ({ img, name, link }: sideBarProps) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive ? "bg-[#040a17] w-full h-full" : "bg-none w-full h-full"
      }
    >
      <button className="flex flex-col gap-1 text-lm font-[700] items-center text-white  hover:bg-[#283E6C] h-full w-full  p-[1em] ">
        <img className="md:w-[24px] min-w-[20px]  " src={img} alt={name} />
        <span>{name}</span>
      </button>
    </NavLink>
  );
};

export default SidebarButton;
