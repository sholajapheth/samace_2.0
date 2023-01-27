import { createContext, useReducer, useState } from "react";
import { Topbar, Sidebar, DisplayArea } from "../../components";
import { DecisionModal } from "../../globals";
import { countries } from "./countries";
import { states } from "../../assets/datas/data";

export const DashboardContext = createContext<any>({});

const Dashboard = () => {
  // this is the state for the states anddd cities select nput
  const [selectedCountry, setSelectedCountry] = useState<any>("");
  const [selectedState, setSelectedState] = useState<any>("");

  const [selectedCountry_1, setSelectedCountry_1] = useState<any>("");
  const [selectedState_1, setSelectedState_1] = useState<any>("");

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
    selectedCountry,
    setSelectedCountry,
    selectedState,
    setSelectedState,
    selectedCountry_1,
    setSelectedCountry_1,
    selectedState_1,
    setSelectedState_1,
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
