import { createContext, useState } from "react";
import { Topbar, Sidebar, DisplayArea } from "../../components";
import { hr, qa, qc, maintenance, production } from "../../assets/svgs";
import { HiOutlineArrowLeft } from "react-icons/hi";

export const DashboardContext = createContext<any>({});

type sidebar_nav_type = Array<{
  name: string;
  img: string;
  link: string;
}>;

const data: sidebar_nav_type = [
  { name: "Human Resources", img: hr, link: "/dashboard/hr" },
  { name: "Quality Assurance", img: qa, link: "/dashboard/qa" },
  { name: "Quality Control", img: qc, link: "/dashboard/qc" },
  { name: "Maintenance", img: maintenance, link: "/dashboard/maintenance" },
  { name: "Production", img: production, link: "/dashboard/production" },
];

const Dashboard = () => {
  const [topbar_value, set_topbar_value] = useState();
  const [sidebar_nav_data, set_sidebar_nav_data] = useState(data);

  return (
    <DashboardContext.Provider
      value={{
        topbar_value,
        set_topbar_value,
        sidebar_nav_data,
        set_sidebar_nav_data,
      }}
    >
      <div className="flex w-full">
        <Sidebar />
        <div className="w-full  pl-[1.5em] pr-[2em] flex items-start gap-4 py-[1.5em]">
          <button className="hover:bg-[#283E6C] rounded-full h-[1.8rem] w-[1.8rem]  flex items-center">
            <HiOutlineArrowLeft className="text-2xl" />
          </button>
          <div className="w-full">
            <Topbar />
            <DisplayArea />
          </div>
        </div>
      </div>
    </DashboardContext.Provider>
  );
};

export default Dashboard;
