import { useState, useContext, useEffect } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import { PRNavResolve } from "../Training/Training";
import TableComponent from "../../../../../components/TableComponent/TableComponent";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../../../store/slices/hr";
import Loading from "../../../../../components/Loading";

const header_data = [
  { id: 0, name: "Date" },
  { id: 1, name: "Name" },
  { id: 2, name: "Violation" },
  { id: 4, name: "Action" },

];

const Disciplinary = () => {
  const [disciplinary_data, set_disciplinary_data] = useState<any>([]);
  const { set_show_topbar_actions, selectedItem, setSearchDatas } =
  useContext(DashboardContext);
const dispatch = useDispatch<any>();
const [fillteredBodyData, setFillteredBodyData] = useState<any>([]);
const { loading, data } = useSelector((state: any) => state.hr);
const url = "humanResources_personnelRecord_disciplinary"



  useEffect(() => {
    dispatch(getData(url));
    set_show_topbar_actions({
      add: "hr/pr/disciplinary/add",
      edit: "hr/pr/disciplinary/edit",
      delete: {
        selectedId: selectedItem,
        url: url,
      },
      url: url
    });
  }, [set_show_topbar_actions, dispatch, selectedItem]);


  useEffect(() => {
    set_disciplinary_data(() => data);
        setSearchDatas({
      searchData: disciplinary_data.docs,
      header_data: header_data,
      set_body_data: setFillteredBodyData,
      default_data:
        fillteredBodyData.length !== 0 ? fillteredBodyData : disciplinary_data.docs,
    });
  }, [data]);

  return (
    <div>
      <PRNavResolve name="Disciplinary Record" />
      
    {loading ? (
        <Loading />
      ) : (
        <div className="">
          <TableComponent
            header_data={header_data}
            body_data={
              fillteredBodyData.length !== 0
                ? fillteredBodyData
                : disciplinary_data.docs
            }
            setFillteredBodyData={setFillteredBodyData}
          />
        </div>
      )}
    </div>
  );
};

export default Disciplinary;
