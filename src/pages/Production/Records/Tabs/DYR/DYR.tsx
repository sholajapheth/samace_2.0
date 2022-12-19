import { useState, useContext, useEffect } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import mock_data from "./MOCK_DATA.json";
import SearchBar from "../../../../../globals/SearchBar";
import TableComponent from "../../../../../components/TableComponent/TableComponent";
import { ProductionNavResolve } from "../POR/POR";

const header_data = [
  { id: 0, name: "Production End date" },
  { id: 1, name: "Product" },
  { id: 2, name: "Batch Number" },
  { id: 3, name: "Filling Equipement" },
  { id: 4, name: "Filling Operator" },
  { id: 5, name: "Packaging Supervisor" },
  { id: 6, name: "Shift Supervisor" },
  { id: 7, name: "Officer's Name" },
  { id: 8, name: "Total Yeild" },
];

const DYR = () => {
  const [assessment_data, set_assessment_data] = useState<any>(mock_data);

  const { set_show_topbar_actions } = useContext(DashboardContext);

  useEffect(() => {
    set_show_topbar_actions({
      add: "production/records/dyr/add",
      edit: "production/records/dyr/edit",
    });
  }, [set_show_topbar_actions]);
  return (
    <div>
      <ProductionNavResolve name="Daily Yeild Record" />
      <SearchBar
        searchData={mock_data}
        header_data={header_data}
        set_body_data={set_assessment_data}
        default_data={mock_data}
      />
      <div className="">
        <TableComponent header_data={header_data} body_data={assessment_data} />
      </div>
    </div>
  );
};

export default DYR;
