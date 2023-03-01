import { AiFillSetting } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";

export const sidebar_data: any = [
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

export const constants = {
  name: "Equipement List",
  url: "humanResources_personnelList",
  add: "maintenance/el/add",
  edit: "maintenance/el/edit",
};

export const personel_list_formData = [
  {
    section: "Personal Information",
    data: [
      {
        name: "ID Number",
        type: "number",
        maxLength: 10,
      },
      {
        name: "Equipement Name",
        type: "text",
      },
      {
        name: "Category",
        type: "drop",
        optionList: [
          "Production",
          "Quality Control",
          "Utilities",
          "Logistics",
          "Others",
        ],
      },
      {
        name: "Make",
        type: "text",
      },
      {
        name: "Model",
        type: "text",
      },
      {
        name: "Energy Source",
        placeholder: "Select Energy Source",
        type: "drop",
        optionList: [
          "Single Phase Electricity",
          "Three Phase Electricity",
          "Petrol Engine",
          "Diesel Engine",
        ],
      },
      {
        name: "Power",
        type: "text",
        placeholder: "Enter Power Value",
      },
      {
        name: "Power Unit",
        type: "drop",
        optionList: ["KW", "HP", "TON", "Not Applicable"],
      },
      {
        name: "Breaker Capacity",
        type: "text",
      },
    ],
  },
];
