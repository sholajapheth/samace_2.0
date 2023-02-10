export const constants = {
  name: "Medical", // this is the name of the tab
  url: "humanResources_personnelRecord_medical", // this is the url for the api endpoint
  add: "hr/pr/medical/add", // this is the url for the add button
  edit: "hr/pr/medical/edit", // this is the url for the edit button
};

export const medical_form_data = [
  {
    section: "Medical",
    data: [
      {
        name: "Date",
        type: "date",
        placeholder: "Enter Date",
      },
      {
        name: "Name",
        type: "text",
        placeholder: "Enter Name",
      },
      {
        name: "Weight",
        type: "text",
        placeholder: "Enter Weight",
      },
      {
        name: "Height",
        type: "text",
        placeholder: "Enter Height",
      },
      {
        name: "Hepatitis BC",
        type: "text",
        placeholder: "Enter Hepatitis B&C",
      },
      {
        name: "HIV",
        type: "text",
        placeholder: "Enter HIV",
      },
      {
        name: "VDRL",
        type: "text",
        placeholder: "Enter VDRL",
      },
      {
        name: "Malaria Parasite",
        type: "text",
        placeholder: "Enter Malaria Parasite",
      },
      {
        name: "Blood Group",
        type: "drop",
        placeholder: "Enter Blood Group",
        optionList: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      },
      {
        name: "Genotype",
        type: "drop",
        placeholder: "Enter Genotype",
        optionList: ["AA", "AS", "SS"],
      },
      {
        name: "Visuals",
        type: "drop",
        placeholder: "Enter Visuals",
        optionList: ["Clear", "Short Sighted", "Long Sighted", "Others"],
      },
      {
        name: "Blood Pressure",
        type: "text",
        placeholder: "Enter Blood Pressure",
      },
      {
        name: "PCV",
        type: "text",
        placeholder: "Enter PCV",
      },
      {
        name: "Cerebrospinal Meningitis",
        type: "text",
        placeholder: "Enter Cerebrospinal Meningitis",
      },
      {
        name: "Hearing",
        type: "text",
        placeholder: "Enter Hearing",
      },
      {
        name: "Urinalysis",
        type: "text",
        placeholder: "Enter Urinalysis",
      },
      {
        name: "Chest Xray",
        type: "text",
        placeholder: "Enter Chest Xray",
      },
      {
        name: "ENT",
        type: "text",
        placeholder: "Enter ENT",
      },
      {
        name: "Penicillin Allergy",
        type: "drop ",
        placeholder: "Enter Penicillin Allergy",
        optionList: ["Yes", "No"],
      },
      {
        name: "Sick Leave",
        type: "text",
        placeholder: "Enter Sick Leave",
      },
    ],
  },
];
