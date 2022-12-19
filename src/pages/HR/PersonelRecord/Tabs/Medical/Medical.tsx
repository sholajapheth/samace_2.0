import { useState, useContext, useEffect } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import mock_data from "./MOCK_DATA.json";
import { PRNavResolve } from "../Training/Training";
import SearchBar from "../../../../../globals/SearchBar";
import TableComponent from "../../../../../components/TableComponent/TableComponent";

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

const Medical = () => {
  const [medical_data, set_disciplinary_data] = useState<any>(mock_data);

  const { set_show_topbar_actions } = useContext(DashboardContext);

  useEffect(() => {
    set_show_topbar_actions({
      add: "hr/pr/medical/add",
      edit: "hr/pr/medical/edit",
    });
  }, [set_show_topbar_actions]);
  return (
    <div>
      <PRNavResolve name="Medical Records" />
      <SearchBar
        searchData={mock_data}
        header_data={header_data}
        set_body_data={set_disciplinary_data}
        default_data={mock_data}
      />
      <div className="">
        <TableComponent
          header_data={header_data}
          body_data={medical_data}
        />
      </div>
    </div>
  );
};

export default Medical;
