import { states } from "../../../../../assets/datas/data";

export const constants = {
  name: "Motor Vehicle Operation Record", // this is the name of the tab
  url: "humanResources_personnelRecord_medical", // this is the url for the api endpoint
  add: "maintenance/records/mvor/add", // this is the url for the add button
  edit: "maintenance/records/mvor/edit", // this is the url for the edit button
};

export const mvor_form_data = [
  {
    // section: "Medical",
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
        name: "Motor Vehicle Type",
        type: "drop",
        optionList: [
          "Toyata Corrola Car",
          "Toyota Hiace Bus",
          "DAF LF Trucks",
          "DAF CF Trailer",
        ],
      },
      {
        name: "Driver",
        type: "drop",
        optionList: [
          "Omolade Wasiu",
          "Ogunbo James",
          "Amedu Daniel",
          "Abiola Femi",
        ],
      },

      {
        name: "Destination",
        type: "drop",
        optionList: [
          "Abia State",
          "Adamawa State",
          "Akwa Ibom State",
          "Anambra State",
          "Bauchi State",
          "Bayelsa State",
          "Benue State",
          "Borno State",
          "Cross River State",
          "Delta State",
          "Ebonyi State",
          "Edo State",
          "Ekiti State",
          "Enugu State",
          "Gombe State",
          "Imo State",
          "Jigawa State",
          "Kaduna State",
          "Kano State",
          "Katsina State",
          "Kebbi State",
          "Kogi State",
          "Kwara State",
          "Lagos State",
          "Nasarawa State",
          "Niger State",
          "Ogun State",
          "Ondo State",
          "Osun State",
          "Oyo State",
          "Plateau State",
          "River State",
          "Sokoto State",
          "Taraba State",
          "Yobe State",
          "Zamfara State",
        ],
      },
      {
        name: "Activity",
        type: "textarea",
      },

      {
        name: "Departure Time",
        type: "time",
      },
      {
        name: "Arrival Time",
        type: "time",
      },
      {
        name: "Days Out Of Station",
        type: "text",
      },
    ],
  },
];
