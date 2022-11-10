import { useContext } from "react";
import { DashboardContext } from "../../Dashboard/Dashboard";
import { sidebar_nav_type } from "../../../globals/types";
import personel_list from "../assets/personel_list.svg";
import personel_record from "../assets/personel_record.svg";

const data: sidebar_nav_type = [
  {id: 0, name: "Personel List", img: personel_list, link: "hr/pl" },
  {id: 1,  name: "Personel Record", img: personel_record, link: "hr/pr" },
];




const PersonelList = () => {
    const { set_topbar_value, set_sidebar_nav_data } =
      useContext(DashboardContext);
       set_topbar_value("Personnel List (BioData)");
       set_sidebar_nav_data(data);
  return <div>personal </div>;
};

export default PersonelList;
