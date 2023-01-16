import { useContext, useEffect, useMemo, memo, useState } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import { sidebar_nav_type } from "../../../../../globals/types";
import SearchBar from "../../../../../globals/SearchBar";
import { TableComponent } from "../../../../../components";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../../../store/slices/hr";
import Loading from "../../../../../components/Loading";
import { PRNavResolve } from "../Training/Training";

const header_data = [
  { id: 0, name: "Date" },
  { id: 1, name: "Name" },
  { id: 6, name: "Email" },
  { id: 2, name: "JD/SOP" },
  { id: 4, name: "GMP" },
  { id: 3, name: "GK" },
  { id: 5, name: "EH" },
];

// one time component here to configure naaviation
type resolveProps = {
  name: string;
};

const Leave = () => {
  const { set_show_topbar_actions, selectedItem, setSearchDatas } =
    useContext(DashboardContext);

  const [leave_data, set_leave_data] = useState<any>([]);
  const dispatch = useDispatch<any>();
  const { loading, data } = useSelector((state: any) => state.hr);
  const [fillteredBodyData, setFillteredBodyData] = useState<any>([]);
  const url = "production_record_leave";

  useEffect(() => {
    dispatch(getData(url));
    set_show_topbar_actions({
      add: "hr/pr/leave/add",
      edit: "hr/pr/leave/edit",
      delete: { selectedId: selectedItem, url: url },
      url: url,
    });
  }, [set_show_topbar_actions, dispatch, selectedItem]);

  useEffect(() => {
    set_leave_data(() => data);
    setSearchDatas({
      searchData: leave_data.docs,
      header_data: header_data,
      set_body_data: setFillteredBodyData,
      default_data:
        fillteredBodyData.length !== 0 ? fillteredBodyData : leave_data.docs,
    });
  }, [data]);

  return (
    <div className="flex flex-col gap-4">
      <PRNavResolve name="Leave" />
      {loading ? (
        <Loading />
      ) : (
        <div className="">
          <TableComponent
            header_data={header_data}
            body_data={
              fillteredBodyData.length !== 0
                ? fillteredBodyData
                : leave_data.docs
            }
            setFillteredBodyData={setFillteredBodyData}
          />
        </div>
      )}
    </div>
  );
};

export default memo(Leave);
