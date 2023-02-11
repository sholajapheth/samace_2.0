export const constants = {
  name: "Payment Record", // This is the name of the tab
  add: "hr/pr/pay/add", // This is the url for the add button
  edit: "hr/pr/pay/edit", // This is the url for the edit button
  url: "humanResources_personnelRecord_pay", // This is the url for the api end point
};

export const pay_form_data = [
  {
    // section: "Pay",
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
        name: "Pay Period",
        type: "drop",
        placholder: "Select Month",
        optionList: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      },
      {
        name: "Department",
        type: "drop",
        optionList: [
          "Accounting",
          "Administration",
          "Costing",
          "Finance",
          "Human Resources",
          "Internal Audit",
          "Legal",
          "Logistics",
          "Maintenance",
          "Marketing",
          "Procurement",
          "Project",
          "Quality Assurance",
          "Quality Control",
          "Sales",
          "Security",
          "Store",
          "Tax",
        ],
      },
      {
        name: "Grade Level",
        type: "drop",
        optionList: [
          "Assistant",
          "Senior Assistant",
          "Officer",
          "Senior Officer",
          "Assistant Manager",
          "Manager",
          "General Manager",
          "Executive Director",
          "Managing Director",
        ],
      },

      {
        name: "Step",
        type: "drop",
        optionList: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      },
      {
        name: "Net Pay",
        type: "number",
      },
    ],
  },
];
