import { DashboardContext } from "../Dashboard/Dashboard";
import { useContext, useEffect } from "react";
import { NavTablet } from "../../globals";
import { main_nav } from "../utils/sidebar_nav_data";
import me from "./assets/me.svg";
import pe from "./assets/pe.svg";

const SettingsNav = () => {
  const { set_topbar_value, set_sidebar_nav_data } =
    useContext(DashboardContext);

  useEffect(() => {
    set_sidebar_nav_data(main_nav);
    set_topbar_value("Settings");
  }, [set_sidebar_nav_data, set_topbar_value]);
  return (
    <div className="w-full  flex flex-col gap-[6em] px-[4em]">
      <span className="text-hm text-pri font-[700]">Select Task</span>
      <div className="flex gap-[5em] m-auto">
        <NavTablet name="Maintenance Equipment" img={me} link={"me"} />
        <NavTablet name="Production Equipment" img={pe} link={"pe"} />
      </div>
    </div>
  );
};

export default SettingsNav;
