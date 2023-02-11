export const constants = {
  name: "Leave", // This is the name of the tab
  url: "humanResources_personnelRecord_leave", // This is the url of the tab
  add: "hr/pr/leave/add", // This is the url for the add button
  edit: "hr/pr/leave/edit", // This is the url for the edit button
};

// This is the data for the form
export const leave_form_data = [
  {
    // section: "Leave Information",
    data: [
      {
        name: "Date",
        type: "date",
      },
      {
        name: "ID Number",
        type: "number",
      },
      {
        name: "Type of leave",
        type: "drop",
        optionList: [
          "Annual Leave",
          "Shift Swap",
          "Parental Leave",
          "Sick Leave",
          "Study Leave",
          "Compassionate Leave",
        ],
      },
      {
        name: "Comments",
        type: "textarea",
      },
      {
        name: "Start Date",
        type: "date",
        placeholder: "Select Leave Start Date",
      },
      {
        name: "End Date",
        type: "date",
        placeholder: "Select Leave End Date",
      },
      {
        name: "Number of days",
        type: "text",
      },
    ],
  },
];
