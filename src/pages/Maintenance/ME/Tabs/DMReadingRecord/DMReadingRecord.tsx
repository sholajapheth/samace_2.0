import { useState, useContext, useEffect, useMemo } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import mock_data from "./MOCK_DATA.json";
import { sidebar_nav_type } from "../../../../../globals/types";


const header_data = [
  { id: 0, name: "ID" },
  { id: 1, name: "Name" },
  { id: 2, name: "Weight" },
  { id: 3, name: "Height" },
  { id: 4, name: "Hepatitis B&C" },
  { id: 5, name: "HIV" },
  { id: 6, name: "VDRL" },
  { id: 7, name: "Malaria Parasite" },
  { id: 8, name: "Blood Group" },
  { id: 9, name: "Genotype" },
  { id: 10, name: "Blood Pressure" },
  { id: 11, name: "PCV" },
  { id: 12, name: "Cerebrospinal Meningitis" },
  { id: 13, name: "Hearing" },
  { id: 14, name: "Urinalysis" },
  { id: 15, name: "Chest X-ray" },
  { id: 16, name: "ENT" },
  { id: 17, name: "Alergies" },
  { id: 18, name: "Sick Leave" },
  { id: 19, name: "Eye" },
];

// one time component here to configure naaviation
// type resolveProps = {
//   name: string;
// };

// export const MaintenanceNavResolve = ({ name }: resolveProps) => {
//   const { set_topbar_value, set_sidebar_nav_data, set_show_topbar_actions } =
//     useContext(DashboardContext);

//   const data: sidebar_nav_type = useMemo(
//     () => [
//       { id: 0, name: "Tranining", img: training, link: "hr/pr/training" },
//       {
//         id: 4,
//         name: "Assessment",
//         img: assessment,
//         link: "hr/pr/assessment",
//       },
//       { id: 3, name: "Pay", img: pay, link: "hr/pr/pay" },
//       {
//         id: 1,
//         name: "Disciplinary",
//         img: disciplinary,
//         link: "hr/pr/disciplinary",
//       },
//       { id: 2, name: "Medical", img: medical, link: "hr/pr/medical" },
//     ],
//     []
//   );

//   useEffect(() => {
//     set_topbar_value(name);
//     set_sidebar_nav_data(data);
//     set_show_topbar_actions("");
//   }, [
//     set_show_topbar_actions,
//     set_sidebar_nav_data,
//     set_topbar_value,
//     name,
//     data,
//   ]);

//   return (
//     <div className="hidden">
//       <h1>Personel List</h1>
//     </div>
//   );
// };

const DMReadingRecord = () => {
  return <div>DMReadingRecord</div>;
};

export default DMReadingRecord;
