export const constants = {
  name: "Disciplinary", // This is the name of the tab
  url: "humanResources_personnelRecord_assessment", // This is the url of the tab
  add: "hr/pr/disciplinary/add", // This is the url for the add button
  edit: "hr/pr/disciplinary/edit", // This is the url for the edit button
};

// This is the data for the form
export const disciplinary_form_data = [
  {
    section: "Disciplinary Record",
    data: [
      {
        name: "Date",
        type: "date",
        placeholder: "Enter Date",
      },
      {
        name: "Name",
        type: "text",
        placeholder: "Enter Name",
      },
      {
        name: "Violation",
        type: "drop",
        optionList: ["Theft", "Fraud", "Bribery"],
      },
      {
        name: "Action",
        type: "drop",
        optionList: ["Dismissal", "Suspension", "Warning"],
      },
    ],
  },
];
