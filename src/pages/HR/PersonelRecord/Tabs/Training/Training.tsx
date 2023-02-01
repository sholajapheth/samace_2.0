import { useState, useContext, useEffect, useCallback } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import TableComponent from "../../../../../components/TableComponent/TableComponent";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../../../store/slices/hr";
import Loading from "../../../../../components/Loading";
import { training_form_data, constants } from "./training_data";
import { sidebar_data } from "../../../general_data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Training = () => {
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
  const formSections = training_form_data.map((section) => section.data);
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
    dispatch(getData(constants.url));
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

export default Training;
