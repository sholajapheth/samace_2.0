import { useState, useContext, useEffect } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import mock_data from "./MOCK_DATA.json";
import SearchBar from "../../../../../globals/SearchBar";
import TableComponent from "../../../../../components/TableComponent/TableComponent";
import { ProductionNavResolve } from "../POR/POR";

const header_data = [
  { id: 0, name: "Date Issued" },
  { id: 1, name: "Product" },
  { id: 2, name: "Batch Number" },
  { id: 3, name: "Rolls" },
  { id: 4, name: "OID Starts" },
  { id: 5, name: "OID Ends" },
  { id: 6, name: "Total Rolls Used" },
  { id: 7, name: "Authenticated Date" },
  { id: 8, name: "Authenticated By" },
];

const SSR = () => {
  const [assessment_data, set_assessment_data] = useState<any>(mock_data);

  const { set_show_topbar_actions } = useContext(DashboardContext);

  useEffect(() => {
    set_show_topbar_actions({
      add: "production/records/ssr/add",
      edit: "production/records/ssr/edit",
    });
  }, [set_show_topbar_actions]);
  return (
    <div>
      <ProductionNavResolve name="Scratch Sticker Record" />
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

export default SSR;
