export const constants = {
  name: "Energy Supply Record", // this is the name of the tab
  url: "humanResources_personnelRecord_training", // this is the url for the api end point
  add: "maintenance/records/esr/add", // this is the url for the add button
  edit: "maintenance/records/esr/add", // this is the url for the edit button
};

export const esr_form_data = [
  {
    data: [
      {
        name: "Date",
        type: "date",
        placeholder: "Select Date",
      },
      {
        name: "Energy Source",
        type: "drop",
        optionList: [
          "National Grid",
          "Diesel Generator 1",
          "Diesel Generator 2",
          "Diesel Generator 1 & 2",
        ],
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
        name: "Stop Time",
        type: "time",
      },
    ],
  },
];
