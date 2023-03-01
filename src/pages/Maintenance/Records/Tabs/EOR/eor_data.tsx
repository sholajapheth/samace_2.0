export const constants = {
  name: " Equipment Operation Record", // This is the name of the tab
  add: "maintenance/records/eor/add", // This is the url for the add button
  edit: "maintenance/records/eor/edit", // This is the url for the edit button
  url: "humanResources_personnelRecord_assessment", // This is the url for the api end point
};

// This is the data for the form
export const eor_form_data = [
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
        name: "Line",
        type: "drop",
        optionList: ["ORS", "Dry Syrup", "Capsule"],
      },
      {
        name: "Start Time",
        type: "time",
      },
      {
        name: "End Time",
        type: "time",
      },
      {
        name: "Run Time",
        type: "time",
      },
      {
        name: "Operator",
        type: "text",
      },
      {
        name: "Product Name",
        type: "drop",
        optionList: [
          "ORS X 5",
          "ORS X 3",
          "Astapicin 60ML",
          "Astaclox 60ML",
          "Astamocil 60ML",
          "Astametin 70ML",
          "Astapicin 100ML",
          "Astaclox 100ML",
          "Astamocil 100ML",
          "Astaclox 500ML Capsule",
          "Astamocil 500ML Capsule",
        ],
      },
      {
        name: "Batch Number",
        type: "text",
      },
      {
        name: "Output",
        type: "number",
      },
    ],
  },
];
