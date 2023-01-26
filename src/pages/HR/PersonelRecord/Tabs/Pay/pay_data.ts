export const constants = {
  name: "Pay", // This is the name of the tab
  add: "hr/pr/pay/add", // This is the url for the add button
  edit: "hr/pr/pay/edit", // This is the url for the edit button
  url: "humanResources_personnelRecord_pay", // This is the url for the api end point
};

export const pay_form_data = [
  {
    section: "Pay",
    data: [
      {
        name: "Date",
        type: "date",
      },
      {
        name: "Name",
        type: "text",
      },
      {
        name: "Grade Level",
        type: "drop",
        optionList: ["Grade 1", "Grade 2", "Grade 3"],
      },
      {
        name: "Step",
        type: "drop",
        optionList: ["Step 1", "Step 2", "Step 3"],
      },
      {
        name: "Net Pay",
        type: "number",
      },
    ],
  },
];
