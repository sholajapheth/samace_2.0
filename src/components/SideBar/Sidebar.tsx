import { useContext } from "react";
import logo from "../../assets/svgs/logo.svg";
import settings from "../../assets/svgs/settings.svg";
import { logout } from "../../assets/svgs";
import { DashboardContext } from "../../pages/Dashboard/Dashboard";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  const { sidebar_nav_data } = useContext(DashboardContext);

  return (
    <div className="w-[120px] h-screen bg-pri py-[2em] flex flex-col justify-between ">
      <img src={logo} alt="megabox_logo" />
      <div className="flex flex-col items-center ">
        {sidebar_nav_data?.map((data: any) => (
          <SidebarButton name={data.name} img={data.img} link={data.link} />
        ))}
      </div>
      <div className="text-tm font-[700] text-white flex flex-col gap-4 ">
        <div className="flex flex-col gap-1 items-center">
          <img className="w-[1.5em] " src={settings} alt="settings" />
          <span className="text-lm font-[700]">Settings</span>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <img className="w-[1.5em] " src={logout} alt="logout" />
          <span className="text-lm font-[700] text-[#FF5552] ">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
