export const constants = {
  name: "Disciplinary Record", // This is the name of the tab
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
        name: "ID Number",
        type: "number",
      },

      {
        name: "Offence",
        type: "drop",
        optionList: [
          "Lateness to Work",
          "Absence from Work",
          "Theft",
          "Disorderliness",
          "Unsactisfactory Work Performance",
          "Refusal to Adhere to Rules and Processes",
          "Possession of Illegal Items",
          "Sexual Harrasment",
          "Innappropriate/Unauthorized use of Company property",
          "Negligence",
          "Others",
        ],
      },
      {
        name: "If Others",
        placeholder: "Please Describe",
        type: "textarea",
      },
      {
        name: "Disciplinary Action",
        type: "drop",
        optionList: [
          "Written Warning",
          "Salary Deduction",
          "Suspension",
          "Demotion",
          "Termination",
          "Dismissal",
        ],
      },
      {
        name: "Comment",
        type: "textarea",
      },
    ],
  },
];
