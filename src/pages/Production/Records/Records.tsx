import { useContext, useEffect } from "react";
import { DashboardContext } from "../../Dashboard/Dashboard";
import { NavTablet } from "../../../globals";
import por from "../assets/por.svg";
import dyr from "../assets/dyr.svg";
import ssr from "../assets/ssr.svg";
import { maintenance_nav } from "../../utils/sidebar_nav_data";

const Records = () => {
  const { set_topbar_value, set_sidebar_nav_data, set_show_topbar_actions } =
    useContext(DashboardContext);

  useEffect(() => {
    set_topbar_value("Mechanical & Electrical");
    set_sidebar_nav_data(maintenance_nav);
    set_show_topbar_actions(false);
  }, [set_topbar_value, set_sidebar_nav_data, set_show_topbar_actions]);

  return (
    <div className="w-full  flex flex-col lg:gap-[6em] md:gap-[4em] gap-[2em] px-[2em]">
      <span className="md:text-hm text-tm text-pri font-[700]">
        Select Task
      </span>
      <div className="grid md:grid-cols-3 grid-cols-2 md:gap-[5em] gap-[3em] m-auto">
        <NavTablet name="Production Order Record" img={por} link={"por"} />
        <NavTablet name="Daily Yeild Record" img={dyr} link={"dyr"} />
        <NavTablet name="Scratch Sticker Record" img={ssr} link={"ssr"} />
      </div>
    </div>
  );
};

export default Records;
