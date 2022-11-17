import { useState, useContext, useEffect, useMemo } from "react";
import { DashboardContext } from "../../Dashboard/Dashboard";
import mock_data from "./MOCK_DATA.json";
import SearchBar from "../../../globals/SearchBar";
import { TableComponent } from "../../../components";
import { sidebar_nav_type } from "../../../globals/types";
import me from "../assets/me.svg";
import pe from "../assets/pe.svg";

const header_data = [
  { id: 0, name: "Equipemnt Name" },
  { id: 1, name: "ID Number" },
  { id: 2, name: "Make" },
  { id: 3, name: "Model" },
  { id: 4, name: "Power Capacity" },
];

// one time component here to configure naaviation
type resolveProps = {
  name: string;
};

export const MENavResolve = ({ name }: resolveProps) => {
  const { set_topbar_value, set_sidebar_nav_data, set_show_topbar_actions } =
    useContext(DashboardContext);

  const data: sidebar_nav_type = useMemo(
    () => [
      { id: 0, name: "Maintenance Equipement", img: me, link: "settings/me" },
      {
        id: 1,
        name: "Production Equipement",
        img: pe,
        link: "settings/pe",
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
      <h1>Mainteance Equipement</h1>
    </div>
  );
};

const Pay = () => {
  const [pay_data, set_pay_data] = useState<any>(mock_data);

  const { set_show_topbar_actions } = useContext(DashboardContext);

  useEffect(() => {
    set_show_topbar_actions({
      add: "settings/me/add",
      edit: "settings/me/edit",
    });
  }, [set_show_topbar_actions]);
  return (
    <div>
      <MENavResolve name="Maintenance Equipement" />
      <SearchBar
        searchData={mock_data}
        header_data={header_data}
        set_body_data={set_pay_data}
        default_data={mock_data}
      />
      <div className="">
        <TableComponent header_data={header_data} body_data={pay_data} />
      </div>
    </div>
  );
};

export default Pay;
