import { useContext, useState, useEffect, memo, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { constants, settings_data } from "./settings_data";
import { useDispatch, useSelector } from "react-redux";
import { DashboardContext } from "../Dashboard/Dashboard";
import { currentUser } from "../../globals/HelperFunctions";
import { fecthUsers } from "../../store/slices/hr";
import { sidebar_data } from "../HR/general_data";
import Loading from "../../components/Loading";
import { TableComponent } from "../../components";

const SettingsNav = () => {
  const dispatch = useDispatch<any>();
  const { loading, data, message } = useSelector((state: any) => state.hr);
  const {
    set_topbar_value,
    set_sidebar_nav_data,
    set_show_topbar_actions,
    selectedItem,
    setSearchDatas,
  } = useContext(DashboardContext);
  const [section_data, set_section_data] = useState<any>([]);
  const [fillteredBodyData, setFillteredBodyData] = useState<any>([]);

  const formSections = settings_data.map((section) => section.data);
  const fieldNameValues = formSections.flatMap((section) =>
    section.map((field) => ({ name: field.name }))
  );

  const notify = useCallback(() => toast(message), [message]);

  useEffect(() => {
    if (message) {
      notify();
    }
  }, [message]);

  useEffect(() => {
    dispatch(fecthUsers(constants.url, JSON.parse(currentUser).token));
  }, []);

  useEffect(() => {
    set_section_data(data);
    set_topbar_value(constants.name);
    set_sidebar_nav_data(sidebar_data);
    set_show_topbar_actions("");

    set_show_topbar_actions({
      add: constants.add,
      edit: constants.edit,
      delete: { selectedId: selectedItem, url: constants.url },
      url: constants.url,
    });

    setSearchDatas({
      searchData: section_data.docs,
      header_data: fieldNameValues,
      set_body_data: setFillteredBodyData,
      default_data:
        fillteredBodyData.length !== 0 ? fillteredBodyData : section_data.docs,
    });
  }, [data]);

  return (
    <div className="">
      {loading ? (
        <Loading />
      ) : (
        <>
          <ToastContainer />
          <TableComponent
            header_data={fieldNameValues}
            hasNoProperties
            body_data={
              fillteredBodyData.length !== 0
                ? fillteredBodyData
                : section_data.docs
            }
          />
        </>
      )}
    </div>
  );
};

export default memo(SettingsNav);
