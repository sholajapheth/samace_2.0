import { useContext, memo } from "react";
import logo from "../../assets/svgs/logo.svg";
import settings from "../../assets/svgs/settings.svg";
import { logout } from "../../assets/svgs";
import { DashboardContext } from "../../pages/Dashboard/Dashboard";
import SidebarButton from "./SidebarButton";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/slices/auth/loginSlice";

const Sidebar = () => {
  const { sidebar_nav_data } = useContext(DashboardContext);
  const dispatch = useDispatch<any>();

  return (
    <div className="lg:w-[110px]  w-full lg:h-screen fixed  lg:inset-0 bg-pri lg:py-[2em] flex lg:flex-col flex-row items-center lg:px-0 px-[1em]  lg:overflow-auto overflow-scroll scrollbar-hide  bottom-0 z-[555] right-0  left-0 justify-between">
      <div className="">
        <Link to={"/"}>
          <img
            className="lg:inline hidden min-w-[3em]"
            src={logo}
            alt="megabox_logo"
          />
        </Link>
        <div className="flex lg:flex-col flex-row lg:items-center items-center  mt-[1em] ">
          {sidebar_nav_data?.map((data: any) => (
            <SidebarButton
              key={data.id}
              name={data.name}
              img={data.img}
              link={data.link}
              icon={data.icon}
            />
          ))}
        </div>
      </div>

      <div className="flex lg:flex-col flex-row lg:items-center items-center  mt-[1em] mb-0  ">
        <SidebarButton name="Settings" img={settings} link="settings" />
        <button
          onClick={() => dispatch(logOut())}
          className="flex flex-col gap-1 items-center"
        >
          <img className="md:w-[1.5em] w-[16px]  " src={logout} alt="logout" />
          <span className="text-lm font-[700] text-[#FF5552] lg:inline hidden">
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default memo(Sidebar);
