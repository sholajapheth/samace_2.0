import { DashboardContext } from "../Dashboard/Dashboard";
import { useContext } from "react";

// type sidebar_nav_type = Array<{
//   name: string;
//   img: string;
//   link: string;
// }>;

// const data: sidebar_nav_type = [
//   { name: "Human Resources", img: hr, link: "/dashboard/hr" },
// ];

const HR = () => {
  const { set_topbar_value } =
    useContext(DashboardContext);
  set_topbar_value("Human Resource Department");
  // set_sidebar_nav_data(data);

  return <div>HR</div>;
};

export default HR;
