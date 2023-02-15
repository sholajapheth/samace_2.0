import { DashboardContext } from "../Dashboard/Dashboard";
import { useContext, useEffect } from "react";
import { NavTablet } from "../../globals";
import personel_list from "./assets/personel_list.svg";
import personel_record from "./assets/personel_record.svg";
import { main_nav } from "../utils/sidebar_nav_data";

const HRNav = () => {
  const { set_topbar_value, set_sidebar_nav_data, set_show_topbar_actions } =
    useContext(DashboardContext);

  useEffect(() => {
    set_sidebar_nav_data(main_nav);
    set_topbar_value("Human Resources Department");
    set_show_topbar_actions("");
  }, [set_sidebar_nav_data, set_topbar_value]);

  return (
    <div className="w-full  flex flex-col gap-[6em] px-[4em]">
      <span className="text-hm text-pri font-[700]">Select Task</span>
      <div className="flex gap-[5em] m-auto">
        <NavTablet name="Personnel List" img={personel_list} link={"pl"} />
        <NavTablet name="Personnel Record" img={personel_record} link={"pr"} />
      </div>
    </div>
  );
};

export default HRNav;
