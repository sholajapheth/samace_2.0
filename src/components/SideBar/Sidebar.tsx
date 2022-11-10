import { useContext } from "react";
import logo from "../../assets/svgs/logo.svg";
import settings from "../../assets/svgs/settings.svg";
import { logout } from "../../assets/svgs";
import { DashboardContext } from "../../pages/Dashboard/Dashboard";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  const { sidebar_nav_data } = useContext(DashboardContext);

  return (
    <div className="lg:w-[120px] w-full lg:h-screen lg:sticky  lg:inset-0 bg-pri lg:py-[2em] flex lg:flex-col flex-row items-center  justify-between px-[1em] lg:overflow-auto overflow-scroll scrollbar-hide  fixed bottom-0 z-[555] right-0  left-0 ">
      <img className="lg:inline hidden" src={logo} alt="megabox_logo" />
      <div className="flex lg:flex-col flex-row lg:items-center items-end ">
        {sidebar_nav_data?.map((data: any) => (
          <SidebarButton name={data.name} img={data.img} link={data.link} />
        ))}
      </div>
      <div className="text-tm font-[700] text-white flex lg:flex-col flex-row  gap-4 ">
        <button className="flex flex-col gap-1 items-center">
          <img className="md:w-[1.5em] " src={settings} alt="settings" />
          <span className="text-lm font-[700]">Settings</span>
        </button>
        <button className="flex flex-col gap-1 items-center">
          <img
            className="md:w-[1.5em] min-w-[1em]  "
            src={logout}
            alt="logout"
          />
          <button className="text-lm font-[700] text-[#FF5552] ">Logout</button>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
