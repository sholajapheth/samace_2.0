export const constants = {
  name: "Add Admin",
  url: "users",
  add: "hr/pl/add",
  edit: "hr/pl/edit",
};

export const settings_data = [
  {
    section: "Add Admin",
    data: [
      {
        name: "Date",
        type: "date",
        value: "2020-01-01",
        key: "date_added",
        required: true,
      },
      {
        name: "First name",
        type: "text",
        placeholder: "Enter Username",
        maxLength: 10,
      },
      {
        name: "Last name",
        type: "text",
        placeholder: "Enter Username",
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
        type: "select",
        placeholder: "Select Department",
        options: [
          "HR",
          "Production",
          "Maintenance",
          "Quality Control",
          "Sales",
          "Marketing",
          "Finance",
          "IT",
          "Admin",
          "Other",
        ],
      },
      {
        name: "Email",
        type: "email",
        placeholder: "Enter Recovery Email",
      },
    ],
  },
];
