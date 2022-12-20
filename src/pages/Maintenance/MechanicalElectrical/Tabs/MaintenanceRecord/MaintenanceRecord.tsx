import { useState, useContext, useEffect } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import SearchBar from "../../../../../globals/SearchBar";
import TableComponent from "../../../../../components/TableComponent/TableComponent";
import { MENavResolve } from "../DMRR/DMRR";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../../../store/slices/maintenance";
import Loading from "../../../../../components/Loading";

const header_data = [
  { id: 0, name: "Date" },
  { id: 1, name: "Equipement Category" },
  { id: 2, name: "Equipement Name" },
  { id: 3, name: "Activity" },
  { id: 4, name: "Description" },
];


const MaintenanceRecord = () => {
  const [mr_data, set_mr_data] = useState<any>([]);


  const { set_show_topbar_actions, selectedItem } =
    useContext(DashboardContext);
  const dispatch = useDispatch<any>();
  const [fillteredBodyData, setFillteredBodyData] = useState<any>([]);
  const { loading, data } = useSelector((state: any) => state.maintenance);
  const url = "maintenance_maintenanceAndElectrical_maintenanceRecord";



  useEffect(() => {
    dispatch(getData(url));

    set_show_topbar_actions({
      add: "maintenance/me/mr/add",
      edit: "maintenance/me/mr/edit",
      delete: {
        selectedId: selectedItem,
        url: url
      },
      url: url
    });
  }, [set_show_topbar_actions, dispatch, selectedItem]);


  useEffect(() => {
    set_mr_data(() => data);
  }, [data]);


  return (
    <div>
      <MENavResolve name="Maintenance Record" />
      <SearchBar
        searchData={mr_data.docs}
        header_data={header_data}
        set_body_data={mr_data}
        default_data={
          fillteredBodyData.length !== 0
            ? fillteredBodyData
            : mr_data.docs
        }
      />
    {loading ? (
        <Loading />
      ) : (
        <div className="">
          <TableComponent
            header_data={header_data}
            body_data={
              fillteredBodyData.length !== 0
                ? fillteredBodyData
                : mr_data.docs
            }
            setFillteredBodyData={setFillteredBodyData}
          />
        </div>
      )}
    </div>
  );
};

export default MaintenanceRecord;
