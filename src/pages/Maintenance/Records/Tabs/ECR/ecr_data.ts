export const constants = {
  name: "Energy Consuption Record", // This is the name of the tab
  add: "maintenance/records/ecr/add", // This is the url for the add button
  edit: "maintenance/records/ecr/edit", // This is the url for the edit button
  url: "humanResources_personnelRecord_pay", // This is the url for the api end point
};

export const ecr_form_data = [
  {
    // section: "Pay",
    data: [
      {
        name: "Date",
        type: "date",
      },
      {
        name: "Diesel Start Quantity",
        type: "text",
      },
      {
        name: "Diesel End Quantity",
        type: "text",
      },
      {
        name: "Diesel Used For The Day",
        type: "text",
      },
      {
        name: "KWH Start Quantity",
        type: "text",
      },
      {
        name: "KWH End Quantity",
        type: "text",
      },
      {
        name: "KWH Used For The Day",
        type: "text",
      },
    ],
  },
];
