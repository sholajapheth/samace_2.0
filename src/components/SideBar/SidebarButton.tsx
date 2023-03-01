import { NavLink } from "react-router-dom";

type sideBarProps = {
  img: string;
  name: string;
  link: string;
  icon?: any;
};
const SidebarButton = ({ img, name, link, icon }: sideBarProps) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive ? "bg-[#040a17] w-full mb-[1em]" : "bg-none w-full mb-[1em]"
      }
    >
      <div className="flex flex-col gap-1 text-lm font-[700] items-center text-white  hover:bg-[#283E6C]  p-[1em] text-center justify-center lg:h-[7em] ">
        {img && (
          <img
            className="lg:w-[24px] md:w-[18px] w-[16px] "
            src={img}
            alt={name}
          />
        )}
        {icon && (
          <p className="md:text-[3em] text-[1.8em] text-white">{icon}</p>
        )}
        <span className="md:text-[12px] lg:inline hidden">{name}</span>
      </div>
    </NavLink>
  );
};

export default SidebarButton;
