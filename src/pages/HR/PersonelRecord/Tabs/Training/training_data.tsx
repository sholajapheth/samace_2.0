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
        placeholder: "Enter Date",
      },
      {
        name: "Name",
        type: "text",
        placeholder: "Enter Name",
      },
      {
        name: "Email",
        type: "email",
        placeholder: "Enter Email",
      },
      {
        name: "JD SOP",
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
