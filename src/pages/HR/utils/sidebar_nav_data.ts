import {sidebar_nav_type } from "../../../globals/types"
import { hr, qa, qc, maintenance, production } from "../../../assets/svgs";
import personel_list from "../assets/personel_list.svg"
import personel_record from "../assets/personel_record.svg";


export const main_nav:sidebar_nav_type = [
  { id: 0, name: "Human Resources", img: hr, link: "/dashboard/hr" },
  { id: 1, name: "Quality Assurance", img: qa, link: "/dashboard/qa" },
  { id: 2,  name: "Quality Control", img: qc, link: "/dashboard/qc" },
  { id: 3,  name: "Maintenance", img: maintenance, link: "/dashboard/maintenance" },
  { id: 4,  name: "Production", img: production, link: "/dashboard/production" },
];

export const hr_nav: sidebar_nav_type = [
  {id: 0, name: "Personel List", img: personel_list, link: "hr/pl" },
  { id: 1,  name: "Personel Record", img: personel_record, link: "hr/pr" },
];