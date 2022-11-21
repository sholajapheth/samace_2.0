import { useState, useContext, useEffect } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import mock_data from "./MOCK_DATA.json";
import SearchBar from "../../../../../globals/SearchBar";
import TableComponent from "../../../../../components/TableComponent/TableComponent";

import { MENavResolve } from '../DMRR/DMRR';

const header_data = [
  { id: 0, name: "Date" },
  { id: 1, name: "Power Source" },
  { id: 2, name: "Start Time" },
  { id: 3, name: "Stop TIme" },
  { id: 4, name: "Run Time" },
  { id: 5, name: "Operator" },
];


// one time component here to configure naaviation

const PUR = () => {
  const [assessment_data, set_assessment_data] = useState<any>(mock_data);

  const { set_show_topbar_actions } = useContext(DashboardContext);

  useEffect(() => {
    set_show_topbar_actions({
      add: "maintenance/me/pur/add",
      edit: "maintenance/me/pur/edit",
    });
  }, [set_show_topbar_actions]);

  return (
    <div>
      <MENavResolve name="Power Usage Record" />
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

export default PUR;
