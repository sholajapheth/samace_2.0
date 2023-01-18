import { states } from "../../../assets/datas/data";
import personel_list from "../assets/personel_list.svg";
import personel_record from "../assets/personel_record.svg";

export const constants = {
  url: "humanResources_personnelList",
};

export const personel_list_formData = [
  {
    section: "Personal Information",
    data: [
      {
        name: "ID",
        type: "number",
        placeholder: "Enter ID",
        maxLength: 10,
      },
      {
        name: "Start Date",
        type: "date",
        placeholder: "Enter Start Date",
      },
      {
        name: "Surname",
        type: "text",
        placeholder: "Surname",
      },
      {
        name: "First Name",
        type: "text",
        placeholder: "First Name",
      },
      {
        name: "Other Name",
        type: "text",
        placeholder: "Other Name",
      },
      {
        name: "Gender",
        type: "drop",
        optionList: ["male", "female"],
      },
      {
        name: "DOB",
        type: "date",
        placeholder: "Enter DOB",
      },
      {
        name: "Place of Birth",
        type: "drop",
        optionList: states,
      },
      {
        name: "State of Origin",
        type: "drop",
        optionList: states,
      },
      {
        name: "LGA",
        type: "text",
        placeholder: "Enter LGA",
      },
      {
        name: "Nationality",
        type: "drop",
        optionList: ["nigerian", "others"],
      },
      {
        name: "Marital Status",
        type: "drop",
        optionList: ["single", "married", "divorced", "widowed"],
      },
      {
        name: "No. of Children",
        type: "number",
        placeholder: "Enter No. of Children",
      },
      {
        name: "Religion",
        type: "drop",
        optionList: ["christianity", "islam", "others"],
      },
      {
        name: "Means of Identification",
        type: "drop",
        optionList: [
          "voters card",
          "drivers license",
          "international passport",
          "national id",
          "others",
        ],
      },
    ],
  },
  {
    section: "Contact Information",
    data: [
      {
        name: "Address",
        type: "textarea",
        placeholder: "Enter Address",
      },
      {
        name: "City",
        type: "text",
        placeholder: "Enter City",
      },
      {
        name: "State",
        type: "drop",
        optionList: states,
      },
      {
        name: "Country",
        type: "drop",
        optionList: ["nigeria", "others"],
      },
      {
        name: "Phone Number",
        type: "number",
        placeholder: "Enter Phone Number",
        maxLength: 11,
      },
      {
        name: "Email",
        type: "email",
        placeholder: "Enter Email",
      },
    ],
  },
  {
    section: "Next of Kin",
    data: [
      {
        name: "next of kin Name",
        type: "text",
        placeholder: "Enter Name",
      },
      {
        name: "next of kin gender ",
        type: "drop",
        optionList: ["male", "female"],
      },
      {
        name: "next of kin Phone Number",
        type: "phone",
        placeholder: "Enter Phone Number",
        maxLength: 11,
      },
      {
        name: "next of kin Email",
        type: "email",
        placeholder: "Enter Email",
      },
      {
        name: "next of kin Relationship",
        type: "drop",
        optionList: [
          "FATHER",
          "MOTHER",
          "BROTHER",
          "SISTER",
          "UNCLE",
          "AUNT",
          "HUSBAND",
          "WIFE",
          "CHILD",
          "GUARDIAN",
        ],
      },
      {
        name: "next of kin Address",
        type: "text",
        placeholder: "Enter Address",
      },
      {
        name: "next of kin City",
        type: "text",
        placeholder: "Enter City",
      },
      {
        name: "next of kin State",
        type: "drop",
        optionList: states,
      },
      {
        name: "next of kin Country",
        type: "drop",
        optionList: ["nigeria", "others"],
      },
    ],
  },

  {
    section: "Employment Information",
    data: [
      {
        name: "Employment Type",
        type: "drop",
        optionList: ["permanent", "temporary/internship", "student it"],
      },
      {
        name: "Department",
        type: "drop",
        optionList: [
          "ACCOUNTING",
          "ADMINISTRATION",
          "COSTING",
          "FINANCE",
          "HUMAN RESOURCES",
          "INTERNAL AUDIT",
          "LEGAL",
          "LOGISTICS",
          "MAINTENANCE",
          "MARKETING",
          "PROCUREMENT",
          "PRODUCTION",
          "PROJECT",
          "QUALITY ASSURANCE",
          "QUALITY CONTROL",
          "SALES",
          "SECURITY",
          "STORE",
          "TAX",
        ],
      },
      {
        name: "Grade Level",
        type: "drop",
        optionList: [
          "ASSISTANT",
          "SENIOR ASSISTANT",
          "OFFICER",
          "SENIOR OFFICER",
          "ASSISTANT MANAGER",
          "MANAGER",
          "GENERAL MANAGER",
          "EXECUTIVE DIRECTOR",
          "MANAGING DIRECTOR",
        ],
      },
      {
        name: "Step",
        type: "drop",
        optionList: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      },
    ],
  },
  {
    section: "Bank Information",
    data: [
      {
        name: "Account Number",
        type: "number",
        placeholder: "Enter Account Number",
      },
      {
        name: "Bank Name",
        type: "drop",
        optionList: [
          "ACCESS BANK",
          "FIRST BANK",
          "FCMB",
          "GTB",
          "UBA",
          "ZENITH BANK",
        ],
      },
      {
        name: "PFA Name",
        type: "drop",
        optionList: ["ARM Pensions", "Crusader Sterling Pensions"],
      },
      {
        name: "Pension ID no",
        type: "number",
        placeholder: "Enter Pension id no",
      },
    ],
  },
  {
    section: "Uniform Information",
    data: [
      {
        name: "Uniform Size",
        type: "drop",
        optionList: ["S", "M", "L", "XL", "XXL"],
      },
      {
        name: "Shoe Size",
        type: "drop",
        optionList: ["39", "40", "41", "42", "43", "44", "45", "46", "47"],
      },
    ],
  },
];

export const sidebar_data: any = [
  { id: 0, name: "Personel List", img: personel_list, link: "hr/pl" },
  { id: 1, name: "Personel Record", img: personel_record, link: "hr/pr" },
];
