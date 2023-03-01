import { useContext, useEffect } from "react";
import { DashboardContext } from "../../Dashboard/Dashboard";
import { NavTablet } from "../../../globals";
import eor from "../assets/eor.svg";
import ecr from "../assets/ecr.svg";
import { FaWrench } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { main_sidebar_data } from "../general_data";

const Records = () => {
  const { set_topbar_value, set_sidebar_nav_data, set_show_topbar_actions } =
    useContext(DashboardContext);

  useEffect(() => {
    set_topbar_value("Records");
    set_sidebar_nav_data(main_sidebar_data);
    set_show_topbar_actions(false);
  }, [set_topbar_value, set_sidebar_nav_data, set_show_topbar_actions]);

  return (
    <div className="w-full  flex flex-col lg:gap-[6em] md:gap-[4em] gap-[2em] px-[2em]">
      <span className="md:text-hm text-tm text-pri font-[700]">
        Select Task
      </span>
      <div className="grid md:grid-cols-3 grid-cols-2 md:gap-[5em] gap-[3em] m-auto">
        <NavTablet
          name="Energy Supply Record"
          icon={<AiFillThunderbolt />}
          link={"esr"}
        />
        <NavTablet name="Energy Consumption Record" img={ecr} link={"ecr"} />
        <NavTablet name="Maintenance Record" icon={<FaWrench />} link={"mr"} />
        <NavTablet name="Equipment Operation Record" img={eor} link={"eor"} />
        <NavTablet
          name="Motor Vehicle Operation Record"
          link="mvor"
          icon={<FaTruck />}
        />
      </div>
    </div>
  );
};

export default Records;
