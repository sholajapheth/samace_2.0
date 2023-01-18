import { useContext, useState, useEffect, memo, useCallback } from "react";
import { DashboardContext } from "../../Dashboard/Dashboard";
import personel_list from "../assets/personel_list.svg";
import personel_record from "../assets/personel_record.svg";
import { TableComponent } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../store/slices/hr";
import Loading from "../../../components/Loading";
import {
  constants,
  personel_list_formData,
  sidebar_data,
} from "./personel_list_data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// one time component here to configure naaviation
type resolveProps = {
  name: string;
};
export const PLNavResolve = ({ name }: resolveProps) => {
  const { set_topbar_value, set_sidebar_nav_data, set_show_topbar_actions } =
    useContext(DashboardContext);

  const data: any = useCallback(
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
  }, [data]);

  return (
    <div className="hidden">
      <h1>Personel List</h1>
    </div>
  );
};

const PersonelList = () => {
  const dispatch = useDispatch<any>();
  const { loading, data, message } = useSelector((state: any) => state.hr);
  const {
    set_topbar_value,
    set_sidebar_nav_data,
    set_show_topbar_actions,
    setSelectedItem,
    selectedItem,
    setSearchDatas,
  } = useContext(DashboardContext);
  const [personel_data, set_personel_data] = useState<any>([]);
  const [fillteredBodyData, setFillteredBodyData] = useState<any>([]);

  const formSections = personel_list_formData.map((section) => section.data);
  const fieldNameValues = formSections.flatMap((section) =>
    section.map((field) => ({ name: field.name }))
  );

  const notify = useCallback(() => toast(message), [message]);

  useEffect(() => {
    dispatch(getData(constants.url));
    setSelectedItem("");
  }, []);

  useEffect(() => {
    notify();
    set_personel_data(data);

    set_topbar_value("Personnel List ");
    set_sidebar_nav_data(sidebar_data);
    set_show_topbar_actions("");

    set_show_topbar_actions({
      add: "hr/pl/add",
      edit: "hr/pl/edit",
      delete: { selectedId: selectedItem, url: constants.url },
      url: constants.url,
    });

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
      <div className="">
        {loading ? (
          <Loading />
        ) : (
          <>
            <ToastContainer />
            <TableComponent
              header_data={fieldNameValues}
              body_data={
                fillteredBodyData.length !== 0
                  ? fillteredBodyData
                  : personel_data.docs
              }
            />
          </>
        )}
      </div>
    </div>
  );
};

export default memo(PersonelList);
