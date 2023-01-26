export const constants = {
  name: "Leave", // This is the name of the tab
  url: "humanResources_personnelRecord_leave", // This is the url of the tab
  add: "hr/pr/leave/add", // This is the url for the add button
  edit: "hr/pr/leave/edit", // This is the url for the edit button
};

// This is the data for the form
export const leave_form_data = [
  {
    section: "Leave Information",
    data: [
      {
        name: "Leave Type",
        type: "select",
        placeholder: "Select Leave Type",
        optionList: [
          "Annual Leave",
          "Sick Leave",
          "Maternity Leave",
          "Paternity Leave",
          "Study Leave",
          "Compassionate Leave",
          "Other Leave",
        ],
      },
      {
        name: "Leave Start Date",
        type: "date",
        placeholder: "Select Leave Start Date",
      },
      {
        name: "Leave End Date",
        type: "date",
        placeholder: "Select Leave End Date",
      },
      {
        name: "Leave Duration",
        type: "text",
        placeholder: "Enter Leave Duration",
      },
      {
        name: "Leave Reason",
        type: "text",
        placeholder: "Enter Leave Reason",
      },
    ],
  },
  {
    section: "Leave Approval",
    data: [
      {
        name: "Leave Approval Status",
        type: "select",
        placeholder: "Select Leave Approval Status",
        optionList: ["Approved", "Declined"],
      },
      {
        name: "Leave Approval Date",
        type: "date",
        placeholder: "Select Leave Approval Date",
      },
      {
        name: "Leave Approval Comment",
        type: "text",
        placeholder: "Enter Leave Approval Comment",
      },
    ],
  },
];
