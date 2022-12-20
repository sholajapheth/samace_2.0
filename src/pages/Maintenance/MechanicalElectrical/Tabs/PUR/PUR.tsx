import { useState, useContext, useEffect } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import SearchBar from "../../../../../globals/SearchBar";
import TableComponent from "../../../../../components/TableComponent/TableComponent";

import { MENavResolve } from '../DMRR/DMRR';
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../../../store/slices/maintenance";
import Loading from "../../../../../components/Loading";

const header_data = [
  { id: 0, name: "ID" },
  { id: 6, name: "Production End Date" },
  { id: 1, name: "Power Source" },
  { id: 2, name: "Start Time" },
  { id: 3, name: "Stop TIme" },
  { id: 4, name: "Run Time" },
  { id: 5, name: "Operator" },

];



const PUR = () => {

  const { set_show_topbar_actions, selectedItem } =
  useContext(DashboardContext);
const dispatch = useDispatch<any>();
const [fillteredBodyData, setFillteredBodyData] = useState<any>([]);
const { loading, data } = useSelector((state: any) => state.maintenance);
const url = "maintenance_maintenanceAndElectrical_powerUsageRecord";

  const [pur_data, set_pur_data] = useState<any>([]);


  useEffect(() => {
    dispatch(getData(url));
    set_show_topbar_actions({
      add: "maintenance/me/pur/add",
      edit: "maintenance/me/pur/edit",
      delete: {
        selectedId: selectedItem,
        url: url,
      },
      url: url,
    });
  }, [set_show_topbar_actions]);

  useEffect(() => {
    set_pur_data(() => data);
  }, [data]);


  return (
    <div>
      <MENavResolve name="Power Usage Record" />
      <SearchBar
        searchData={pur_data.docs}
        header_data={header_data}
        set_body_data={pur_data}
        default_data={
          fillteredBodyData.length !== 0
            ? fillteredBodyData
            : pur_data.docs
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
                : pur_data.docs
            }
            setFillteredBodyData={setFillteredBodyData}
          />
        </div>
      )}
    </div>
  );
};

export default PUR;
