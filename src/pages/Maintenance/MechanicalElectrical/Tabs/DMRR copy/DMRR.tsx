import { useState, useContext, useEffect, useMemo } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import mock_data from "../../MOCK_DATA.json";
// import { PRNavResolve } from "../Training/Training";
import SearchBar from "../../../../../globals/SearchBar";
import TableComponent from "../../../../../components/TableComponent/TableComponent";
import { sidebar_nav_type } from "../../../../../globals/types";
import dmrr from "../../../assets/dmrr.svg";
import mr from "../../../assets/mr.svg";
import pu from "../../../assets/pu.svg";
import sr from "../../../assets/sr.svg";

const header_data = [
  { id: 0, name: "Date" },
  { id: 1, name: "Name" },
  { id: 2, name: "JD/SOP" },
  { id: 4, name: "GMP" },
  { id: 3, name: "GK" },
  { id: 5, name: "EH" },
];

// one time component here to configure naaviation
type resolveProps = {
  name: string;
};

export const PRNavResolve = ({ name }: resolveProps) => {
  const { set_topbar_value, set_sidebar_nav_data, set_show_topbar_actions } =
    useContext(DashboardContext);

  const data: sidebar_nav_type = useMemo(
    () => [
      {
        id: 0,
        name: "Diesel & Meter Reading Record",
        img: dmrr,
        link: "maintenance/me/dmrr",
      },

      {
        id: 1,
        name: "Power Usage Record",
        img: pu,
        link: "maintenance/me/pur",
      },
      { id: 2, name: "Maintenance Record", img: mr, link: "maintenance/me/mr" },
      {
        id: 3,
        name: "Sparepart Record",
        img: sr,
        link: "maintenance/me/spr",
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
      <h1>Personel List</h1>
    </div>
  );
};

const DMRR = () => {
  const [assessment_data, set_assessment_data] = useState<any>(mock_data);

  const { set_show_topbar_actions } =
    useContext(DashboardContext);

  useEffect(() => {
    set_show_topbar_actions({
      add: "maintenance/me/dmrr/add",
      edit: "maintenance/me/dmrr/edit",
    });
  }, [set_show_topbar_actions]);

  return (
    <div>
      <PRNavResolve name="Diesel & Meter Record" />
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

export default DMRR;
