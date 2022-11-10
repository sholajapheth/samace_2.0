import { createContext, useState } from "react";
import { Topbar, Sidebar, DisplayArea } from "../../components";
import { DecisionModal } from "../../globals";




export const DashboardContext = createContext<any>({});

const Dashboard = () => {

  
  const [topbar_value, set_topbar_value] = useState();

  // topbar actions links
  const [sidebar_nav_data, set_sidebar_nav_data] = useState();

  //toggles the decision modal
  const [show_decision_modal, set_show_decision_modal] = useState(false);

  //returns 1 or 0 depending on the decision made
  const [decision_modal_value, set_decision_modal_value] = useState();

  //this section allows to dynamically set the topbar actions routes
  const [topbar_actions_links, set_topbar_actions_links] = useState({add:"", edit:"" });
  

  const context = {
    topbar_value,
    set_topbar_value,
    sidebar_nav_data,
    set_sidebar_nav_data,
    show_decision_modal,
    set_show_decision_modal,
    decision_modal_value,
    set_decision_modal_value,
    topbar_actions_links,
    set_topbar_actions_links,
  };

  return (
    <DashboardContext.Provider value={context}>
      <div className="lg:flex w-full ">
        {show_decision_modal && <DecisionModal />}
        <Sidebar />
        <div className="w-full  pl-[1.5em] pr-[2em] flex  items-start gap-4 py-[1.5em] ">
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
