export const constants = {
  name: "Training Record", // this is the name of the tab
  url: "humanResources_personnelRecord_training", // this is the url for the api end point
  add: "hr/pr/training/add", // this is the url for the add button
  edit: "hr/pr/training/edit", // this is the url for the edit button
};

export const training_form_data = [
  {
    // section: "Training",
    data: [
      {
        name: "Date",
        type: "date",
        placeholder: "Select Date",
      },
      {
        name: "ID Number",
        type: "number",
        placeholder: "Enter ID Number",
      },

      {
        name: "Session",
        type: "drop",
        optionList: ["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"],
      },

      {
        name: "Employee Handbook",
        type: "drop",
        placeholder: "Select Attendance",
        optionList: ["Present", "Absent"],
      },
      {
        name: "Job Description",
        type: "drop",
        placeholder: "Select Attendance",
        optionList: ["Present", "Absent"],
      },
      {
        name: "Good Manufacturing Practice",
        type: "drop",
        placeholder: "Select Attendance",
        optionList: ["Present", "Absent"],
      },
      {
        name: "General Knowledge",
        type: "drop",
        placeholder: "Select Attendance",
        optionList: ["Present", "Absent"],
      },
    ],
  },
];
