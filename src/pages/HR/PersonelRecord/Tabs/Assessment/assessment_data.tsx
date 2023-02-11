export const constants = {
  name: "Assessment Record", // This is the name of the tab
  add: "hr/pr/assessment/add", // This is the url for the add button
  edit: "hr/pr/assessment/edit", // This is the url for the edit button
  url: "humanResources_personnelRecord_assessment", // This is the url for the api end point
};

// This is the data for the form
export const assessment_form_data = [
  {
    // section: "Assessment",

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
        name: "Session",
        type: "drop",
        optionList: ["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"],
      },
      {
        name: "Employee Handbook",
        type: "number",
        placeholder: "Enter Score",
      },
      {
        name: "Job Description",
        type: "number",
        placeholder: "Enter Score",
      },
      {
        name: "Good Manufacturing Practice",
        type: "number",
        placeholder: "Enter Score",
      },
      {
        name: "General Knowledge",
        type: "number",
        placeholder: "Enter Score",
      },
      {
        name: "Punctuality",
        type: "number",
        placeholder: "Enter Score",
      },
      {
        name: "Disciplinary",
        type: "number",
        placeholder: "Enter Score",
      },
      {
        name: "Supervisor Review",
        type: "number",
        placeholder: "Enter Score",
      },
    ],
  },
];
