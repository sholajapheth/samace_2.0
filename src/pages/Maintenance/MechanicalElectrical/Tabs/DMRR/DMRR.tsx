import { useState, useContext, useEffect, useMemo } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import SearchBar from "../../../../../globals/SearchBar";
import TableComponent from "../../../../../components/TableComponent/TableComponent";
import { sidebar_nav_type } from "../../../../../globals/types";
import dmrr from "../../../assets/dmrr.svg";
import mr from "../../../assets/mr.svg";
import pu from "../../../assets/pu.svg";
import sr from "../../../assets/sr.svg";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../../../store/slices/maintenance";
import Loading from "../../../../../components/Loading";

const header_data = [
  { id: 0, name: "Date" },
  { id: 1, name: "Power Source" },
  { id: 2, name: "Day Start Quantity" },
  { id: 3, name: "Day End Quantity" },
  { id: 4, name: "Day Used Quantity" },
];

// one time component here to configure naaviation
type resolveProps = {
  name: string;
};

export const MENavResolve = ({ name }: resolveProps) => {
  const { set_topbar_value, set_sidebar_nav_data, set_show_topbar_actions } =
    useContext(DashboardContext);

  const data: sidebar_nav_type = useMemo(
    () => [
      {
        id: 0,
        name: "Diesel & Meter Reading Record",
        img: dmrr,
        link: "maintenance/me/dmrr",
      },

      {
        id: 1,
        name: "Power Usage Record",
        img: pu,
        link: "maintenance/me/pur",
      },
      { id: 2, name: "Maintenance Record", img: mr, link: "maintenance/me/mr" },
      {
        id: 3,
        name: "Sparepart Record",
        img: sr,
        link: "maintenance/me/spr",
      },
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

const DMRR = () => {
  const [dmrr_data, set_dmrr_data] = useState<any>([]);

  const { set_show_topbar_actions, selectedItem } =
    useContext(DashboardContext);
  const dispatch = useDispatch<any>();
  const [fillteredBodyData, setFillteredBodyData] = useState<any>([]);
  const { loading, data } = useSelector((state: any) => state.maintenance);
  const url = "maintenance_maintenanceAndElectrical_dieselAndMeterReadingRecord";

  
  useEffect(() => {
    dispatch(getData(url));
    set_show_topbar_actions({
      add: "maintenance/me/dmrr/add",
      edit: "maintenance/me/dmrr/edit",
      delete: {
        selectedId: selectedItem,
        url: url,
      },
      url: url,
    });
  }, [set_show_topbar_actions, dispatch, selectedItem]);


  useEffect(() => {
    set_dmrr_data(() => data);
  }, [data]);


  return (
    <div>
      <MENavResolve name="Diesel & Meter Record" />
      <SearchBar
        searchData={dmrr_data.docs}
        header_data={header_data}
        set_body_data={dmrr_data}
        default_data={
          fillteredBodyData.length !== 0
            ? fillteredBodyData
            : dmrr_data.docs
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
                : dmrr_data.docs
            }
            setFillteredBodyData={setFillteredBodyData}
          />
        </div>
      )}
    </div>
  );
};

export default DMRR;
