import { useContext, useState, useEffect, useMemo, memo } from "react";
import { DashboardContext } from "../../Dashboard/Dashboard";
import { sidebar_nav_type } from "../../../globals/types";
import personel_list from "../assets/personel_list.svg";
import personel_record from "../assets/personel_record.svg";
import SearchBar from "../../../globals/SearchBar";
import { TableComponent } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../store/slices/hr";
import Loading from "../../../components/Loading";

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
  const dispatch = useDispatch<any>();
  const { loading, data } = useSelector((state: any) => state.hr);
  const { set_show_topbar_actions, selectedItem } = useContext(DashboardContext);
  const [personel_data, set_personel_data] = useState<any>([]);
 const [fillteredBodyData, setFillteredBodyData] = useState<any>([])
const url = "humanResources_personnelList"

  useEffect(() => {
    dispatch(getData(url));
    set_show_topbar_actions(() => ({
      add: "hr/pl/add",
      edit: "hr/pl/edit",
      delete: { selectedId: selectedItem, url: url },
      url: url
    }));
  }, [set_show_topbar_actions, dispatch, selectedItem]);

  useEffect(() => {
    set_personel_data(() => data);
  }, [data]);

  return (
    <div className="flex flex-col gap-4">
      <SearchBar
        searchData={personel_data.docs}
        header_data={header_data}
        set_body_data={setFillteredBodyData}
        default_data={fillteredBodyData.length !== 0 ? fillteredBodyData :personel_data.docs}
      />
      <PLNavResolve name="Personnel List " />
      <div className="">
        {loading ? (
          <Loading />
        ) : (
          <TableComponent
            header_data={header_data}
            body_data={fillteredBodyData.length !== 0 ? fillteredBodyData :personel_data.docs}
            
          />
        )}
      </div>
    </div>
  );
};

export default memo(PersonelList);

