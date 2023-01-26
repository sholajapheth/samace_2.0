export const constants = {
  name: "Assessment", // This is the name of the tab
  add: "hr/pr/assessment/add", // This is the url for the add button
  edit: "hr/pr/assessment/edit", // This is the url for the edit button
  url: "humanResources_personnelRecord_assessment", // This is the url for the api end point
};

// This is the data for the form
export const assessment_form_data = [
  {
    section: "Assessment",

    data: [
      {
        name: "Date",
        type: "date",
        placeholder: "Enter Date",
      },
      {
        name: "ID Number",
        type: "number",
        placeholder: "Enter ID",
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
        name: "Session",
        type: "drop",
        optionList: [
          "session1",
          "session2",
          "session3",
          "session4",
          "session5",
        ],
      },
      {
        name: "Employee Handbook",
        type: "text",
        placeholder: "Enter Score",
      },
      {
        name: "Job Decription",
        type: "drop",
        optionList: ["Present", "Absent"],
      },
      {
        name: "GMP",
        type: "drop",
        optionList: ["Present", "Absent"],
      },
      {
        name: "GK",
        type: "drop",
        optionList: ["Present", "Absent"],
      },
      {
        name: "EH",
        type: "drop",
        optionList: ["Present", "Absent"],
      },
    ],
  },
];
