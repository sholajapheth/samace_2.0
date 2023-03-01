import { FaTruck } from "react-icons/fa";
import ecr from "./assets/ecr.svg";
import store from "../../store/configureStore";
import { AiFillSetting } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaWrench } from "react-icons/fa";
import eor from "./assets/eor.svg";

export let { loading, message } = store.getState().hr;

export const main_sidebar_data: any = [
  {
    id: 0,
    name: "Equipement List",
    icon: <AiFillSetting />,
    link: "maintenance/el",
  },
  {
    id: 1,
    name: "Records",
    icon: <BiBookBookmark />,
    link: "maintenance/records",
  },
];

export const sidebar_data: any = [
  {
    id: 0,
    name: "Energy Supply Record",
    icon: <AiFillThunderbolt />,
    link: "maintenance/records/esr",
  },

  {
    id: 4,
    name: "Energy Consumption Record",
    img: ecr,
    link: "maintenance/records/ecr",
  },
  {
    id: 3,
    name: "Maintenance Record",
    icon: <FaWrench />,
    link: "maintenance/records/mr",
  },
  {
    id: 1,
    name: "Equipment Operation Record",
    img: eor,
    link: "maintenance/records/eor",
  },
  {
    id: 2,
    name: "Motor Vehicle Operation Record",
    icon: <FaTruck />,
    link: "maintenance/records/mvor",
  },
];
