import { createContext, useReducer, useState } from "react";
import { Topbar, Sidebar, DisplayArea } from "../../components";
import { DecisionModal } from "../../globals";

export const DashboardContext = createContext<any>({});

const Dashboard = () => {
  // this is the state for the states anddd cities select nput
  const [selectedCountry, setSelectedCountry] = useState<any>("");
  const [selectedState, setSelectedState] = useState<any>("");

  const [selectedCountry_1, setSelectedCountry_1] = useState<any>("");
  const [selectedState_1, setSelectedState_1] = useState<any>("");

  const initialState = {
    contactInformation: {
      selectedCountry: "",
      selectedState: "",
    },
    nextOfKin: {
      selectedCountry: "",
      selectedState: "",
    },
    personalInformation: {
      selectedCountry: "",
      selectedState: "",
    },
  };

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "setSelectedCountry":
        if (action.payload.name === "contactInformation") {
          console.log("action.payload.country: ", action.payload.country);
          return {
            ...state,
            contactInformation: {
              ...state.contactInformation,
              selectedCountry: action.payload.country,
            },
          };
        }
        if (action.payload.name === "nextOfKin") {
          return {
            ...state,
            nextOfKin: {
              ...state.nextOfKin,
              selectedCountry: action.payload.country,
            },
          };
        }
        if (action.payload.name === "personalInformation")
          return {
            ...state,
            personalInformation: {
              ...state.personalInformation,
              selectedCountry: action.payload.country,
            },
          };
        break;
      case "setSelectedState":
        if (action.payload.name === "contactInformation")
          return {
            ...state,
            contactInformation: {
              ...state.contactInformation,
              selectedState: action.payload.state,
            },
          };
        if (action.payload.name === "nextOfKin")
          return {
            ...state,
            nextOfKin: {
              ...state.nextOfKin,
              selectedState: action.payload.state,
            },
          };
        if (action.payload.name === "personalInformation")
          return {
            ...state,
            personalInformation: {
              ...state.personalInformation,
              selectedState: action.payload.state,
            },
          };

        break;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

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
    state,
    dispatch,
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
