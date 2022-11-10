import { useContext } from "react";
import { DashboardContext } from "../../Dashboard/Dashboard";
import { NavTablet } from "../../../globals";
import disciplinary from "../assets/disciplinary.svg";
import medical from "../assets/medical.svg";
import pay from "../assets/pay.svg";
import assessment from "../assets/assessment.svg";
import training from "../assets/training.svg";
import { hr_nav } from "../utils/sidebar_nav_data";

const PersonelRecord = () => {
  const { set_topbar_value, set_sidebar_nav_data } =
    useContext(DashboardContext);
  set_topbar_value("Personnel Record");
  set_sidebar_nav_data(hr_nav);

  return (
    <div className="w-full  flex flex-col lg:gap-[6em] md:gap-[4em] gap-[2em]">
      <span className="md:text-hm text-tm text-pri font-[700]">Select Task</span>
      <div className="grid md:grid-cols-3 grid-cols-2 md:gap-[5em] gap-[3em] m-auto">
        <NavTablet name="Training" img={training} link={"training"} />
        <NavTablet name="Assessment" img={assessment} link={"assessment"} />
        <NavTablet name="Pay" img={pay} link={"pay"} />
        <NavTablet
          name="Diciplinary"
          img={disciplinary}
          link={"disciplinary"}
        />
        <NavTablet name="Medcial" img={medical} link={"medical"} />
      </div>
    </div>
  );
};

export default PersonelRecord;
