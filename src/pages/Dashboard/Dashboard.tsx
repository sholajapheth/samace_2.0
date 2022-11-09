import { createContext, useState } from "react";
import { Topbar, Sidebar, DisplayArea } from "../../components";
import { DecisionModal } from "../../globals";

export const DashboardContext = createContext<any>({});

const Dashboard = () => {
  const [topbar_value, set_topbar_value] = useState();
  const [sidebar_nav_data, set_sidebar_nav_data] = useState();

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
        <DecisionModal />
        <div className="w-full  pl-[1.5em] pr-[2em] flex items-start gap-4 py-[1.5em] ">
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
