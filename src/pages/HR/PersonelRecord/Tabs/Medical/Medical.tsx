import { useState, useContext, useEffect } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import { PRNavResolve } from "../Training/Training";
import TableComponent from "../../../../../components/TableComponent/TableComponent";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../../../store/slices/hr";
import Loading from "../../../../../components/Loading";

const header_data = [
  { id: 0, name: "ID" },
  { id: 1, name: "Name" },
  { id: 2, name: "Weight" },
  { id: 3, name: "Height" },
  { id: 4, name: "Hepatitis BC" },
  { id: 5, name: "HIV" },
  { id: 6, name: "VDRL" },
  { id: 7, name: "Malaria Parasite" },
  { id: 8, name: "Blood Group" },
  { id: 9, name: "Genotype" },
  { id: 10, name: "Blood Pressure" },
  { id: 11, name: "PCV" },
  { id: 12, name: "Cerebrospinal Meningitis" },
  { id: 13, name: "Hearing" },
  { id: 14, name: "Urinalysis" },
  { id: 15, name: "Chest X Ray" },
  { id: 16, name: "ENT" },
  { id: 17, name: "Alergies" },
  { id: 18, name: "Sick Leave" },
  { id: 19, name: "Eye" },
];

const Medical = () => {
  const [medical_data, set_medical_data] = useState<any>([]);

  const { set_show_topbar_actions, selectedItem, setSearchDatas } =
    useContext(DashboardContext);
  const dispatch = useDispatch<any>();
  const [fillteredBodyData, setFillteredBodyData] = useState<any>([]);
  const { loading, data } = useSelector((state: any) => state.hr);
  const url = "humanResources_personnelRecord_medical";
  
  useEffect(() => {
    dispatch(getData(url));
    set_show_topbar_actions({
      add: "hr/pr/medical/add",
      edit: "hr/pr/medical/edit",
      delete: {
        selectedId: selectedItem,
        url: url, // url to delete data
      },
      url: url, // url to export data

    });
  }, [set_show_topbar_actions, dispatch, selectedItem]);

  useEffect(() => {
    set_medical_data(() => data);
    setSearchDatas({
      searchData: medical_data.docs,
      header_data: header_data,
      set_body_data: setFillteredBodyData,
      default_data:
        fillteredBodyData.length !== 0 ? fillteredBodyData : medical_data.docs,
    });
  }, [data]);

  return (
    <div>
      <PRNavResolve name="Medical Records" />

      {loading ? (
        <Loading />
      ) : (
        <div className="">
          <TableComponent
            header_data={header_data}
            body_data={
              fillteredBodyData.length !== 0
                ? fillteredBodyData
                : medical_data.docs
            }
            setFillteredBodyData={setFillteredBodyData}
          />
        </div>
      )}
    </div>
  );
};

export default Medical;
