import { useContext, useEffect, memo } from "react";
import { DashboardContext } from "../../Dashboard/Dashboard";
import { sidebar_nav_type } from "../../../globals/types";
import personel_list from "../assets/personel_list.svg";
import personel_record from "../assets/personel_record.svg";
import SearchBar from "../../../globals/SearchBar";
import { TableComponent } from "../../../components";
import mock_data from "../../../components/TableComponent/MOCK_DATA.json";

const data: sidebar_nav_type = [
  { id: 0, name: "Personel List", img: personel_list, link: "hr/pl" },
  { id: 1, name: "Personel Record", img: personel_record, link: "hr/pr" },
];

const PersonelList = () => {
  const { set_topbar_value, set_sidebar_nav_data, set_show_topbar_actions } =
    useContext(DashboardContext);

  useEffect(() => {
    set_topbar_value("Personnel List (BioData)");
    set_sidebar_nav_data(data);
    set_show_topbar_actions({add:"hr/pl/add", edit:"hr/pl/edit"});
  }, [set_topbar_value, set_sidebar_nav_data, set_show_topbar_actions]);

  return (
    <div className="flex flex-col gap-4">
      <SearchBar searchData={mock_data} />

      <div className="">
        <TableComponent  />
      </div>
    </div>
  );
};

export default memo(PersonelList);
