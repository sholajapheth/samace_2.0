export const constants = {
  name: "Daily Yield Record", // This is the name of the tab
  add: "production/records/dyr/add", // This is the url for the add button
  edit: "production/records/dyr/edit", // This is the url for the edit button
  url: "production_record_dailyYieldRecord", // This is the url for the api end point
};

export const dyr_form_data = [
  {
    section: "Daily Yeild Record Form",
    data: [
      {
        name: "Product End Date",
        type: "date",
        placeholder: "Enter prodcution end date",
      },
      {
        name: "Product",
        type: "drop",
        optionList: ["prod1", "prod2", "prod3"],
      },
      {
        name: "Batch Number",
        type: "number",
        placeholder: "Enter Batch Number",
      },
      {
        name: "Filling Equipement",
        type: "drop",
        optionList: ["prod1", "prod2", "prod3"],
      },
      {
        name: "Filling Operator",
        type: "drop",
        optionList: ["prod1", "prod2", "prod3"],
      },
      {
        name: "Packing Supervisor",
        type: "drop",
        optionList: ["supervisor1", "supervisor2", "supervisor3"],
      },
      {
        name: "Shift Supervisor",
        type: "drop",
        optionList: ["supervisor1", "supervisor2", "supervisor3"],
      },
      {
        name: "Officers Name",
        type: "drop",
        optionList: ["supervisor1", "supervisor2", "supervisor3"],
      },
      {
        name: "Total Yeild ",
        type: "number",
        placeholder: "Enter Total Yeild",
      },
    ],
  },
];
