import { useState, useContext, useEffect } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import { PRNavResolve } from "../Training/Training";
import TableComponent from "../../../../../components/TableComponent/TableComponent";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../../../store/slices/hr";
import Loading from "../../../../../components/Loading";
import SearchBarDemo from "../../../../../globals/SearchBarDemo";

const header_data = [
  { id: 0, name: "Date" },
  { id: 1, name: "Name" },
  { id: 2, name: "JD SOP" },
  { id: 4, name: "GMP" },
  { id: 3, name: "GK" },
  { id: 5, name: "EH" },
];

const Assessment = () => {
  const { set_show_topbar_actions, selectedItem, setSearchDatas } =
    useContext(DashboardContext);
  const dispatch = useDispatch<any>();
  const [assessment_data, set_assessment_data] = useState<any>([]);
  const [fillteredBodyData, setFillteredBodyData] = useState<any>([]);
  const { loading, data } = useSelector((state: any) => state.hr);
  const url = "humanResources_personnelRecord_assessment";

  useEffect(() => {
    dispatch(getData(url));

    set_show_topbar_actions({
      add: "hr/pr/assessment/add",
      edit: "hr/pr/assessment/edit",
      delete: {
        selectedId: selectedItem,
        url: url,
      },
      url: url,
    });
  }, [set_show_topbar_actions, dispatch, selectedItem]);

  useEffect(() => {
    set_assessment_data(() => data);
    setSearchDatas({
      searchData: assessment_data.docs,
      header_data: header_data,
      set_body_data: setFillteredBodyData,
      default_data:
        fillteredBodyData.length !== 0
          ? fillteredBodyData
          : assessment_data.docs,
    });
  }, [data]);

  return (
    <div>
      <PRNavResolve name="Assessment" />

      {loading ? (
        <Loading />
      ) : (
        <div className="">
          <TableComponent
            header_data={header_data}
            body_data={
              fillteredBodyData.length !== 0
                ? fillteredBodyData
                : assessment_data.docs
            }
            setFillteredBodyData={setFillteredBodyData}
          />
        </div>
      )}
    </div>
  );
};

export default Assessment;
