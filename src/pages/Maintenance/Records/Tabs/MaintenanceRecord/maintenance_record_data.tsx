export const constants = {
  name: "Maintenance Record", // This is the name of the tab
  url: "humanResources_personnelRecord_assessment", // This is the url of the tab
  add: "maintenance/records/mr/add", // This is the url for the add button
  edit: "maintenance/records/mr/edit", // This is the url for the edit button
};

// This is the data for the form
export const maintenance_record_form_data = [
  {
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
        name: "Maintenance Type",
        type: "drop",
        optionList: ["Preventive Maintenance", "Corrective Maintenance"],
      },
      {
        name: "Maintenance Subtype",
        type: "drop",
        optionList: ["Scheduled ", "Condition Based"],
      },
      {
        name: "Description",
        type: "textarea",
      },
      {
        name: "Maintenance Carried Out By",
        type: "drop",
        optionList: ["Internal Team", "External Contractor"],
      },
      {
        name: "Reported Date",
        type: "date",
      },
      {
        name: "Completed Date",
        type: "date",
      },
      {
        name: "Down Time",
        type: "text",
      },
    ],
  },
];
