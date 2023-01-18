import { useContext, useState, useEffect, useMemo, memo } from "react";
import { DashboardContext } from "../../Dashboard/Dashboard";
import { sidebar_nav_type } from "../../../globals/types";
import personel_list from "../assets/personel_list.svg";
import personel_record from "../assets/personel_record.svg";
import { TableComponent } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../store/slices/hr";
import Loading from "../../../components/Loading";
import { constants, personel_list_formData } from "./personel_list_data";

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
  const { set_show_topbar_actions, selectedItem, searchDatas, setSearchDatas } =
    useContext(DashboardContext);
  const [personel_data, set_personel_data] = useState<any>([]);
  const [fillteredBodyData, setFillteredBodyData] = useState<any>([]);

  const formSections = personel_list_formData.map((section) => section.data);
  const fieldNameValues = formSections.flatMap((section) =>
    section.map((field) => ({ name:field.name }))
  );





  useEffect(() => {
    dispatch(getData(constants.url));
    set_show_topbar_actions(() => ({
      add: "hr/pl/add",
      edit: "hr/pl/edit",
      delete: { selectedId: selectedItem, url: constants.url },
      url: constants.url,
    }));

    console.log("search data", searchDatas);
  }, [set_show_topbar_actions, dispatch, selectedItem]);

  useEffect(() => {
    set_personel_data(() => data);
    setSearchDatas({
      searchData: personel_data.docs,
      header_data: fieldNameValues,
      set_body_data: setFillteredBodyData,
      default_data:
        fillteredBodyData.length !== 0 ? fillteredBodyData : personel_data.docs,
    });
  }, [data]);

  return (
    <div className="flex flex-col gap-4">
      <PLNavResolve name="Personnel List " />
      <div className="">
        {loading ? (
          <Loading />
        ) : (
          <TableComponent
            header_data={fieldNameValues}
            body_data={
              fillteredBodyData.length !== 0
                ? fillteredBodyData
                : personel_data.docs
            }
          />
        )}
      </div>
    </div>
  );
};

export default memo(PersonelList);
