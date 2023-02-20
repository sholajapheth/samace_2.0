export const constants = {
  name: "Prduction Order Record", // this is the name of the tab
  url: "humanResources_personnelRecord_training", // this is the url for the api end point
  add: "hr/pr/training/add", // this is the url for the add button
  edit: "hr/pr/training/edit", // this is the url for the edit button
};

const por_form_data = [
  {
    name: "Order Date",
    type: "date",
    placeholder: "Select date",
  },
  {
    name: "Product",
    type: "drop",
    optionList: [
      "Astamocil(60ML)",
      "Astamocil(100ML)",
      "Astaclox Capsule",
      "Astamentine",
    ],
  },
  {
    name: "Batch Number Starts",
    type: "number",
    placeholder: "Enter Batch Number (Starts)",
  },
  {
    name: "Batch Number Ends",
    type: "number",
    placeholder: "Enter Batch Number (Ends)",
  },
  {
    name: "Total Quantity",
    type: "number",
  },
  {
    name: "Schedule Start Date",
    type: "date",
    placeholder: "Select Start Date",
  },
  {
    name: "Schedule End Date",
    type: "date",
    placeholder: "Select End Date",
  },
  {
    name: "Officer Name",
    type: "text",
    placeholder: "Enter Officer's Name",
  },
];
