import personel_list from "../assets/personel_list.svg";
import personel_record from "../assets/personel_record.svg";

export const sidebar_data: any = [
  { id: 0, name: "Personel List", img: personel_list, link: "hr/pl" },
  { id: 1, name: "Personel Record", img: personel_record, link: "hr/pr" },
];

export const constants = {
  name: "Personel List",
  url: "humanResources_personnelList",
  add: "hr/pl/add",
  edit: "hr/pl/edit",
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
        name: "Nationality",
        type: "specialDrop",
        dropType: "country",
        section: "Personal Information",
      },
      {
        name: "State of Origin",
        type: "specialDrop",
        dropType: "state",
        section: "Personal Information",
      },
      {
        name: "LGA",
        type: "specialDrop",
        dropType: "city",
        section: "Personal Information",
      },
      {
        name: "Place of Birth",
        type: "text",
        placeholder: "Enter Place of Birth",
      },

      {
        name: "Marital Status",
        type: "drop",
        optionList: ["single", "married", "divorced", "widowed"],
      },
      {
        name: "Number of Children",
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
        name: "Country",
        type: "specialDrop",
        dropType: "country",
        section: "Contact Information",
      },
      {
        name: "State",
        type: "specialDrop",
        dropType: "state",
        section: "Contact Information",
      },
      {
        name: "City",
        type: "specialDrop",
        dropType: "city",
        section: "Contact Information",
      },
      {
        name: "Address",
        type: "textarea",
        placeholder: "Enter Address",
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
        name: "Next of Kin Name",
        type: "text",
        placeholder: "Enter Name",
      },
      {
        name: "Next of Kin Gender ",
        type: "drop",
        optionList: ["male", "female"],
      },
      {
        name: "Next of Kin Phone Number",
        type: "phone",
        placeholder: "Enter Phone Number",
        maxLength: 11,
      },
      {
        name: "Next of Kin Email",
        type: "email",
        placeholder: "Enter Email",
      },
      {
        name: "Next of Kin Relationship",
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
        name: "Next of Kin Country",
        type: "specialDrop",
        dropType: "country",
        section: "next of kin",
      },
      {
        name: "Next of Kin State",
        type: "specialDrop",
        dropType: "state",
        section: "next of kin",
      },
      {
        name: "Next of Kin City",
        type: "specialDrop",
        dropType: "city",
        section: "next of kin",
      },
      {
        name: "Next of Kin Address",
        type: "textarea",
        placeholder: "Enter Address",
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
