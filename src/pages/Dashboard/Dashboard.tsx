import { createContext, useState } from "react";
import { Topbar, Sidebar, DisplayArea } from "../../components";
import { DecisionModal } from "../../globals";

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "editData":
      return { ...state, editData: action.payload };
    case "topbar_value":
      return { ...state, topbar_value: action.payload };
    case "sidebar_nav_data":
      return { ...state, sidebar_nav_data: action.payload };
    case "show_decision_modal":
      return { ...state, show_decision_modal: action.payload };
    case "show_topbar_actions":
      return { ...state, show_topbar_actions: action.payload };
    case "inputValue":
      return { ...state, inputValue: action.payload };
    case "selectedItem":
      return { ...state, selectedItem: action.payload };
    case "searchDatas":
      return { ...state, searchDatas: action.payload };
    default:
      return state;
  }
};


export const DashboardContext = createContext<any>({});

const Dashboard = () => {
  const [editData, setEditData] = useState<any>([]);

  const [topbar_value, set_topbar_value] = useState();

  // topbar actions links
  const [sidebar_nav_data, set_sidebar_nav_data] = useState();

  //toggles the decision modal
  const [show_decision_modal, set_show_decision_modal] = useState();

 
  //this section allows to dynamically set the topbar actions routes

  const [show_topbar_actions, set_show_topbar_actions] = useState();
  const [inputValue, setInputValue] = useState<any>({});

  const [selectedItem, setSelectedItem] = useState<any>([]);

  // this sets data needed by the searchbar
  const [searchDatas, setSearchDatas] = useState<any>();


// for table pagination
  const [prevNext, setPrevNext] = useState<any>({ prev: 0, next: 10 });

  const context = {
    editData,
    setEditData,
    prevNext,
    setPrevNext,
    topbar_value,
    set_topbar_value,
    sidebar_nav_data,
    set_sidebar_nav_data,
    show_decision_modal,
    set_show_decision_modal,
    show_topbar_actions,
    set_show_topbar_actions,
    inputValue,
    setInputValue,
    selectedItem,
    setSelectedItem,
    searchDatas,
    setSearchDatas,
  };

  return (
    <DashboardContext.Provider value={context}>
      <div className="lg:flex relative ">
        {show_decision_modal && <DecisionModal />}
        <Sidebar />
        <div
          className={`py-[1.5em] lg:w-[100%] ${
            show_topbar_actions === true && " h-screen"
          }`}
        >
          <div className=" lg:ml-[122px] ">
            <Topbar />
            <DisplayArea />
          </div>
        </div>
      </div>
    </DashboardContext.Provider>
  );
};

export default Dashboard;
