export const constants = {
  name: "Medical Record", // this is the name of the tab
  url: "humanResources_personnelRecord_medical", // this is the url for the api endpoint
  add: "hr/pr/medical/add", // this is the url for the add button
  edit: "hr/pr/medical/edit", // this is the url for the edit button
};

export const medical_form_data = [
  {
    // section: "Medical",
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
        name: "Height",
        type: "number",
      },
      {
        name: "Weight",
        type: "number",
      },
      {
        name: "Body Mass Index",
        type: "number",
      },
      {
        name: "Blood Pressure",
        type: "number",
      },
      {
        name: "Blood Glucose",
        type: "number",
      },
      {
        name: "Blood Group",
        type: "drop",
        optionList: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      },
      {
        name: "Genotype",
        type: "drop",
        optionList: ["AA", "AS", "SS"],
      },
      {
        name: "Visuals",
        type: "drop",
        optionList: ["Clear", "Short Sighted", "Long Sighted", "Others"],
      },
      {
        name: "Penicillin Allergy",
        type: "drop",
        optionList: ["Yes", "No"],
      },
      {
        name: "Other Allergy",
        type: "textarea",
      },

      {
        name: "Test Location",
        type: "textarea",
      },
    ],
  },
];
