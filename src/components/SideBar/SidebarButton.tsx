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
        isActive ? "bg-[#040a17] w-full " : "bg-none w-full"
      }
    >
      <div className="flex flex-col gap-1 text-lm font-[700] items-center text-white  hover:bg-[#283E6C]  p-[1em] text-center justify-center h-[7em]">
        <img className="lg:w-[24px] md:w-[18px] w-[14px] " src={img} alt={name} />
        <span className="md:text-[12px] md:inline hidden">{name}</span>
      </div>
    </NavLink>
  );
};

export default SidebarButton;
