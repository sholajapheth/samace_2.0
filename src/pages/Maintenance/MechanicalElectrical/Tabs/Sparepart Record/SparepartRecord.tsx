import { useState, useContext, useEffect } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import mock_data from "./MOCK_DATA.json";
import SearchBar from "../../../../../globals/SearchBar";
import TableComponent from "../../../../../components/TableComponent/TableComponent";

import { MENavResolve } from "../DMRR/DMRR";

const header_data = [
  { id: 0, name: "Date" },
  { id: 1, name: "Item" },
  { id: 2, name: "In" },
  { id: 3, name: "Out" },
  { id: 4, name: "Quantity in Store" },
  { id: 4, name: "Officer's name" },
];

const SparepartRecord = () => {
  const [assessment_data, set_assessment_data] = useState<any>(mock_data);

  const { set_show_topbar_actions } = useContext(DashboardContext);

  useEffect(() => {
    set_show_topbar_actions({
      add: "maintenance/me/spr/add",
      edit: "maintenance/me/spr/edit",
    });
  }, [set_show_topbar_actions]);

  return (
    <div>
      <MENavResolve name="Sparepart Record" />
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

export default SparepartRecord;
