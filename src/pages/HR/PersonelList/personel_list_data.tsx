import { states } from "../../../assets/datas/data";

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
        required: true,
      },
      {
        name: "Start Date",
        type: "date",
        placeholder: "Enter Start Date",
        required: true,
      },
      {
        name: "Surname",
        type: "text",
        placeholder: "Surname",
        required: true,
      },
      {
        name: "First Name",
        type: "text",
        placeholder: "First Name",
        required: true,
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
        required: true,
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
        required: true,
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
        type: "text",
        placeholder: "Enter Address",
        required: true,
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
        required: true,
      },
      {
        name: "Country",
        type: "drop",
        optionList: ["nigeria", "others"],
        required: true,
      },
      {
        name: "Phone Number",
        type: "number",
        placeholder: "Enter Phone Number",
        required: true,
      },
      {
        name: "Email",
        type: "email",
        placeholder: "Enter Email",
        required: true,
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
        name: "next of kin Relationship",
        type: "drop",
        optionList: ["FATHER", "MOTHER", "BROTHER", "SISTER", "UNCLE", "AUNT"],
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
      {
        name: "next of kin Phone Number",
        type: "number",
        placeholder: "Enter Phone Number",
      },
      {
        name: "next of kin Email",
        type: "email",
        placeholder: "Enter Email",
      },
    ],
  },

  {
    section: "Employment Information",
    data: [
      {
        name: "Employment Status",
        type: "drop",
        optionList: ["permanent", "temporary", "internship", "student"],
      },
      {
        name: "Employment Type",
        type: "drop",
        optionList: ["full time", "part time"],
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
          "ENTRY LEVEL",
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
        name: "Bank Name",
        type: "drop",
        optionList: [
          "ACCESS BANK",
          "CITIBANK",
          "DIAMOND BANK",
          "ECOBANK",
          "ENTERPRISE BANK",
          "FIDELITY BANK",
          "FIRST BANK",
          "FIRST CITY MONUMENT BANK",
          "GUARANTY TRUST BANK",
          "HERITAGE BANK",
          "KEYSTONE BANK",
          "MAINSTREET BANK",
          "SKYE BANK",
          "STANBIC IBTC BANK",
          "STANDARD CHARTERED BANK",
          "STERLING BANK",
          "UNION BANK",
          "UNITED BANK FOR AFRICA",
          "UNITY BANK",
          "WEMA BANK",
          "ZENITH BANK",
        ],
      },
      {
        name: "PFA Name",
        type: "drop",
        optionList: [
          "AXA Mansard",
          "Custodian and Allied",
          "Leadway Assurance",
          "NPF Pensions",
          "Nigerian Police Pension Fund",
          "ARM Pensions",
          "Crusader Sterling Pensions",
          "FCMB Pensions",
        ],
      },
      {
        name: "PFA Number",
        type: "number",
        placeholder: "Enter PFA Number",
      },
      {
        name: "Account Name",
        type: "text",
        placeholder: "Enter Account Name",
      },
      {
        name: "Account Number",
        type: "number",
        placeholder: "Enter Account Number",
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
