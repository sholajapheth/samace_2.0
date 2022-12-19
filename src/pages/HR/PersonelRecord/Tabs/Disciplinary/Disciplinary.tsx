import { useState, useContext, useEffect } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import mock_data from "./MOCK_DATA.json";
import { PRNavResolve } from "../Training/Training";
import SearchBar from "../../../../../globals/SearchBar";
import TableComponent from "../../../../../components/TableComponent/TableComponent";

const header_data = [
  { id: 0, name: "Date" },
  { id: 1, name: "Name" },
  { id: 2, name: "Violation" },
  { id: 4, name: "Action" },

];

const Disciplinary = () => {
  const [disciplinary_data, set_disciplinary_data] = useState<any>(mock_data);

  const { set_show_topbar_actions } = useContext(DashboardContext);

  useEffect(() => {
    set_show_topbar_actions({
      add: "hr/pr/disciplinary/add",
      edit: "hr/pr/disciplinary/edit",
    });
  }, [set_show_topbar_actions]);
  return (
    <div>
      <PRNavResolve name="Disciplinary Record" />
      <SearchBar
        searchData={mock_data}
        header_data={header_data}
        set_body_data={set_disciplinary_data}
        default_data={mock_data}
      />
      <div className="">
        <TableComponent header_data={header_data} body_data={disciplinary_data} />
      </div>
    </div>
  );
};

export default Disciplinary;
