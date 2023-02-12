export const constants = {
  name: "Add Admin",
  url: "/users",
  add: "settings/add",
  edit: "hr/pl/edit",
};

export const settings_data = [
  {
    // section: "Add Admin",
    data: [
      // {
      //   name: "Date",
      //   type: "date",
      //   value: "2020-01-01",
      //   key: "date_added",
      //   required: true,
      // },
      {
        name: "First name",
        type: "text",
        maxLength: 10,
      },
      {
        name: "Last name",
        type: "text",
        maxLength: 10,
      },
      {
        name: "Password",
        type: "password",
        placeholder: "Enter Password",
        maxLength: 10,
      },
      {
        name: "Department",
        type: "drop",
        placeholder: "Select Department",
        optionList: [
          "HR",
          "Production",
          "Maintenance",
          "Quality Control",
          "Quality Assurance",
        ],
      },
      {
        name: "Email",
        type: "email",
      },
    ],
  },
];
