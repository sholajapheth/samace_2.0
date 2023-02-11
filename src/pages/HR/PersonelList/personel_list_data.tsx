import personel_list from "../assets/personel_list.svg";
import personel_record from "../assets/personel_record.svg";

export const sidebar_data: any = [
  { id: 0, name: "Personel List", img: personel_list, link: "hr/pl" },
  { id: 1, name: "Personel Record", img: personel_record, link: "hr/pr" },
];

export const constants = {
  name: "Personnel List",
  url: "humanResources_personnelList",
  add: "hr/pl/add",
  edit: "hr/pl/edit",
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
        name: "Start Date",
        type: "date",
      },
      {
        name: "Surname",
        type: "text",
      },
      {
        name: "First Name",
        type: "text",
      },
      {
        name: "Other Name",
        type: "text",
      },
      {
        name: "Gender",
        type: "drop",
        optionList: ["Male", "Female"],
      },
      {
        name: "Date of Birth",
        type: "date",
      },
      {
        name: "Place of Birth",
        type: "text",
        placeholder: "Enter Place of Birth",
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
        name: "Marital Status",
        type: "drop",
        optionList: ["Single", "Married", "Divorced", "Widowed"],
      },
      {
        name: "Number of Children",
        type: "number",
        placeholder: "Enter No. of Children",
      },
      {
        name: "Religion",
        type: "drop",
        optionList: ["Christianity", "Islam", "Others"],
      },
      {
        name: "Means of Identification",
        type: "drop",
        optionList: [
          "Voters Card",
          "Drivers License",
          "International Passport",
          "National ID",
          "Others",
        ],
      },
    ],
  },

  {
    section: "Contact Information",
    data: [
      {
        name: "Home Address",
        type: "textarea",
      },
      {
        name: "Phone Number",
        type: "number",
        maxLength: 11,
      },
      {
        name: "Email Address",
        type: "email",
      },
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
        name: "Next of Kin Name",
        type: "text",
        placeholder: "Enter Name",
      },
      {
        name: "Next of Kin Relationship",
        type: "drop",
        optionList: [
          "Father",
          "Mother",
          "Brother",
          "Sister",
          "Uncle",
          "Aunt",
          "Husband",
          "Wife",
          "Child",
          "Guardian",
        ],
      },
      {
        name: "Next of Kin Gender ",
        type: "drop",
        optionList: ["Male", "Female"],
      },
      {
        name: "Next of Kin Home Address",
        type: "textarea",
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
    ],
  },

  {
    section: "Job Information",
    data: [
      {
        name: "Employment Type",
        type: "drop",
        optionList: ["Permanent", "Temporary/Internship", "Student IT"],
      },
      {
        name: "Department",
        type: "drop",
        optionList: [
          "Accounting",
          "Administration",
          "Costing",
          "Finance",
          "Human Resources",
          "Internal Audit",
          "Legal",
          "Logistics",
          "Maintenance",
          "Marketing",
          "Procurement",
          "Production",
          "Project",
          "Quality Assurance",
          "Quality Control",
          "Sales",
          "Security",
          "Store",
          "Tax",
        ],
      },

      {
        name: "Job Role",
        type: "text",
      },

      {
        name: "Grade Level",
        type: "drop",
        optionList: [
          "Assistant",
          "Senior Assistant",
          "Officer",
          "Senior Officer",
          "Assistant Manager",
          "Manager",
          "General Manager",
          "Executive Director",
          "Managing Director",
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
    section: "Account Information",
    data: [
      {
        name: "Bank Name",
        type: "drop",
        optionList: [
          "Access Bank",
          "First Bank",
          "FCMB",
          "GTB",
          "UBA",
          "Zenith Bank",
        ],
      },
      {
        name: "Account Number",
        type: "number",
        placeholder: "Enter Account Number",
      },
      {
        name: "PFA Name",
        type: "drop",
        optionList: ["ARM Pensions", "Crusader Sterling Pensions"],
      },
      {
        name: "Pension ID No",
        type: "number",
      },
    ],
  },
  {
    section: "Uniform Information",
    data: [
      {
        name: "Top Size",
        type: "drop",
        optionList: ["S", "M", "L", "XL", "XXL"],
      },
      {
        name: "Trouser Size",
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
