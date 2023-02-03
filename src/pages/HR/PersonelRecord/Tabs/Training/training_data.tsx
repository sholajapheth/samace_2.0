export const constants = {
  name: "Training", // this is the name of the tab
  url: "humanResources_personnelRecord_training", // this is the url for the api end point
  add: "hr/pr/training/add", // this is the url for the add button
  edit: "hr/pr/training/edit", // this is the url for the edit button
};

export const training_form_data = [
  {
    section: "Training",
    data: [
      {
        name: "Date",
        type: "date",
        placeholder: "Select Date",
      },
      {
        name: "ID Number",
        type: "number",
        placeholder: "Enter ID NUmber",
      },
      {
        name: "Surname",
        type: "text",
        placeholder: "Enter Surname",
      },
      {
        name: "First Name",
        type: "text",
        placeholder: "Enter First Name",
      },
      {
        name: "Last Name",
        type: "text",
        placeholder: "Enter Last Name",
      },
      {
        name: "Session",
        type: "select",
        optionList: ["Quarter 1", "Quarter 2", "Quarter 3"],
      },
      {
        name: "Attendance",
        type: "select",
        optionList: ["Present", "Absent"],
      },
      {
        name: "Employee Handbook",
        type: "select",
        placeholder: "Select Attendance",
        optionList: ["Present", "Absent"],
      },
      {
        name: "Job Description",
        type: "select",
        placeholder: "Select Attendance",
        optionList: ["Present", "Absent"],
      },
      {
        name: "Good Manufacturing Practice",
        type: "select",
        placeholder: "Select Attendance",
        optionList: ["Present", "Absent"],
      },
      {
        name: "General Knowledge",
        type: "select",
        placeholder: "Select Attendance",
        optionList: ["Present", "Absent"],
      },
    ],
  },
];
