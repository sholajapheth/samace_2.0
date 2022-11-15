import { useState, useContext, useEffect } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import mock_data from "../../MOCK_DATA.json";
import { PRNavResolve } from "../Training/Training";
import SearchBar from "../../../../../globals/SearchBar";
import TableComponent from "../../../../../components/TableComponent/TableComponent";

const header_data = [
  { id: 0, name: "Date" },
  { id: 1, name: "Name" },
  { id: 2, name: "JD/SOP" },
  { id: 4, name: "GMP" },
  { id: 3, name: "GK" },
  { id: 5, name: "EH" },
];

const Assessment = () => {
  const [assessment_data, set_assessment_data] = useState<any>(mock_data);

  const { set_show_topbar_actions } = useContext(DashboardContext);

  useEffect(() => {
    set_show_topbar_actions({
      add: "hr/pr/assessment/add",
      edit: "hr/pr/assessment/edit",
    });
  }, [set_show_topbar_actions]);
  return (
    <div>
      <PRNavResolve name="Assessment" />
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

export default Assessment;
