import { useState, useContext, useEffect, useMemo } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import mock_data from "./MOCK_DATA.json";
import SearchBar from "../../../../../globals/SearchBar";
import TableComponent from "../../../../../components/TableComponent/TableComponent";
import { sidebar_nav_type } from "../../../../../globals/types";
import por from "../../../assets/por.svg";
import dyr from "../../../assets/dyr.svg";
import ssr from "../../../assets/ssr.svg";

const header_data = [
  { id: 0, name: "Order Date" },
  { id: 1, name: "Product" },
  { id: 2, name: "Batch Number Start" },
  { id: 3, name: "Batch Number End" },
  { id: 4, name: "Total Quantity" },
  { id: 5, name: "Schedule Start" },
  { id: 6, name: "Schedule End" },
  { id: 7, name: "Officer" },
];

// one time component here to configure naaviation
type resolveProps = {
  name: string;
};

export const ProductionNavResolve = ({ name }:resolveProps) => {
  const { set_topbar_value, set_sidebar_nav_data, set_show_topbar_actions } =
    useContext(DashboardContext);

  const data: sidebar_nav_type = useMemo(
    () => [
      {
        id: 0,
        name: "Production Order Record",
        img: por,
        link: "production/records/por",
      },

      {
        id: 1,
        name: "Daily Yeild Record",
        img: dyr,
        link: "production/records/dyr",
      },
      {
        id: 2,
        name: "Scratch Sticker Record",
        img: ssr,
        link: "production/records/ssr",
      },
    ],
    []
  );

  useEffect(() => {
    set_topbar_value(name);
    set_sidebar_nav_data(data);
    set_show_topbar_actions("");
  }, [
    set_show_topbar_actions,
    set_sidebar_nav_data,
    set_topbar_value,
    name,
    data,
  ]);

  return (
    <div className="hidden">
      <h1>POR</h1>
    </div>
  );
};

const POR = () => {
  const [assessment_data, set_assessment_data] = useState<any>(mock_data);

  const { set_show_topbar_actions } = useContext(DashboardContext);

  useEffect(() => {
    set_show_topbar_actions({
      add: "production/records/por/add",
      edit: "production/records/por/edit",
    });
  }, [set_show_topbar_actions]);
  return (
    <div>
      <ProductionNavResolve name="Production Order Record" />
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

export default POR;
