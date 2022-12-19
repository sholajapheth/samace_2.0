import {sidebar_nav_type } from "../../globals/types"
import { hr, qa, qc, maintenance, production } from "../../assets/svgs";
import personel_list from "../assets/personel_list.svg"
import personel_record from "../assets/personel_record.svg";
import dmrr from "../assets/dmrr.svg";
import pu from "../assets/pu.svg";
import mr from "../assets/mr.svg";
import sr from "../assets/sr.svg";
import ict from "../assets/ict.svg";
import facility from "../assets/facility.svg";
import me from "../assets/me.svg";




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

// Mechanical and electricl 
export const me_nav: sidebar_nav_type = [
  {
    id: 0,
    name: "Diesel & Meter Reading Record",
    img: dmrr,
    link: "maintenance/me/dmrr",
  },
  { id: 1, name: "Power Usage Record", img: pu, link: "maintenance/me/pur" },
  { id: 2, name: "Maintenance Record", img: mr, link: "maintenance/me/mr" },
  { id: 3, name: "Spare Parts Record", img: sr, link: "maintenance/me/spr" },
];

export const maintenance_nav: sidebar_nav_type = [
  {
    id: 0,
    name: "Mechanical & Electrical",
    img: me,
    link: "maintenance/me",
  },
  { id: 1, name: "ICT", img: ict, link: "maintenance/ict" },
  { id: 2, name: "Facility", img: facility, link: "maintenance/facility" },
];