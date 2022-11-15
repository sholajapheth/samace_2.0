import { useContext, useState, useEffect, useMemo, memo } from "react";
import { DashboardContext } from "../../Dashboard/Dashboard";
import { sidebar_nav_type } from "../../../globals/types";
import personel_list from "../assets/personel_list.svg";
import personel_record from "../assets/personel_record.svg";
import SearchBar from "../../../globals/SearchBar";
import { TableComponent } from "../../../components";
import mock_data from "../../../components/TableComponent/MOCK_DATA.json";

const header_data = [
  { id: 0, name: "ID" },
  { id: 1, name: "Name" },
  { id: 2, name: "Home Address" },
  { id: 4, name: "Email Address" },
  { id: 3, name: "Phone Number" },
  { id: 5, name: "Marital Status" },
  { id: 6, name: "Religion" },
  { id: 7, name: "State of Origin " },
  { id: 8, name: "LGA" },
  { id: 9, name: "Start Date" },
  { id: 10, name: "Job Type" },
  { id: 11, name: "Department" },
  { id: 12, name: "Grade Level" },
];

// one time component here to configure naaviation
type resolveProps = {
  name: string;
};
export const PLNavResolve = ({ name }: resolveProps) => {
  const { set_topbar_value, set_sidebar_nav_data, set_show_topbar_actions } =
    useContext(DashboardContext);

  const data: sidebar_nav_type = useMemo(
    () => [
      { id: 0, name: "Personel List", img: personel_list, link: "hr/pl" },
      { id: 1, name: "Personel Record", img: personel_record, link: "hr/pr" },
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

const PersonelList = () => {
  const { set_show_topbar_actions } = useContext(DashboardContext);

  const [personel_data, set_personel_data] = useState<any>(mock_data);

  useEffect(() => {
    set_show_topbar_actions({ add: "hr/pl/add", edit: "hr/pl/edit" });
  }, [set_show_topbar_actions]);

  return (
    <div className="flex flex-col gap-4">
      <SearchBar
        searchData={personel_data}
        header_data={header_data}
        set_body_data={set_personel_data}
        default_data={mock_data}
      />
      <PLNavResolve name="Personnel List (BioData)" />
      <div className="">
        <TableComponent header_data={header_data} body_data={personel_data} />
      </div>
    </div>
  );
};

export default memo(PersonelList);
