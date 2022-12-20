import { useState, useContext, useEffect } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import SearchBar from "../../../../../globals/SearchBar";
import TableComponent from "../../../../../components/TableComponent/TableComponent";

import { MENavResolve } from "../DMRR/DMRR";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../../../components/Loading";
import { getData } from "../../../../../store/slices/maintenance";

const header_data = [
  { id: 0, name: "Date" },
  { id: 1, name: "Item" },
  { id: 2, name: "In" },
  { id: 3, name: "Out" },
  { id: 4, name: "Quantity in Store" },
  { id:6, name: "Officer's name" },
];

const SparepartRecord = () => {
  const [spr_data, set_spr_data] = useState<any>([]);

  const { set_show_topbar_actions, selectedItem } =
    useContext(DashboardContext);
  const dispatch = useDispatch<any>();
  const [fillteredBodyData, setFillteredBodyData] = useState<any>([]);
  const { loading, data } = useSelector((state: any) => state.maintenance);
  const url = "maintenance_maintenanceAndElectrical_sparePartRecord";

  useEffect(() => {
    dispatch(getData(url));
    set_show_topbar_actions({
      add: "maintenance/me/spr/add",
      edit: "maintenance/me/spr/edit",
      delete: {
        selectedId: selectedItem,
        url: url,
      },
      url: url
      });
  }, [set_show_topbar_actions, dispatch, selectedItem]);

  useEffect(() => {
    set_spr_data(() => data);
  }, [data]);




  return (
    <div>
      <MENavResolve name="Sparepart Record" />
      <SearchBar
        searchData={spr_data.docs}
        header_data={header_data}
        set_body_data={spr_data}
        default_data={
          fillteredBodyData.length !== 0
            ? fillteredBodyData
            : spr_data.docs
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
                : spr_data.docs
            }
            setFillteredBodyData={setFillteredBodyData}
          />
        </div>
      )}
    </div>
  );
};

export default SparepartRecord;
