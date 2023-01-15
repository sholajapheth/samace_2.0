import { useContext, useEffect, useMemo, memo, useState } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import { sidebar_nav_type } from "../../../../../globals/types";
import SearchBar from "../../../../../globals/SearchBar";
import { TableComponent } from "../../../../../components";
// import mock_data from "../../MOCK_DATA.json";
import disciplinary from "../../../assets/disciplinary.svg";
import medical from "../../../assets/medical.svg";
import pay from "../../../assets/pay.svg";
import leave from "../../../assets/leave.svg";
import assessment from "../../../assets/assessment.svg";
import training from "../../../assets/training.svg";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../../../store/slices/hr";
import Loading from "../../../../../components/Loading";

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

export const PRNavResolve = ({ name }: resolveProps) => {
  const { set_topbar_value, set_sidebar_nav_data, set_show_topbar_actions } =
    useContext(DashboardContext);

  const data: sidebar_nav_type = useMemo(
    () => [
      { id: 0, name: "Tranining", img: training, link: "hr/pr/training" },
      {
        id: 4,
        name: "Assessment",
        img: assessment,
        link: "hr/pr/assessment",
      },
      { id: 3, name: "Pay", img: pay, link: "hr/pr/pay" },
      {
        id: 1,
        name: "Disciplinary",
        img: disciplinary,
        link: "hr/pr/disciplinary",
      },
      { id: 2, name: "Medical", img: medical, link: "hr/pr/medical" },
      { id: 2, name: "Leave", img: leave, link: "hr/pr/leave" },
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

const Training = () => {
  const { set_show_topbar_actions, selectedItem, setSearchDatas } =
    useContext(DashboardContext);

  const [training_data, set_training_data] = useState<any>([]);
  const dispatch = useDispatch<any>();
  const { loading, data } = useSelector((state: any) => state.hr);
  const [fillteredBodyData, setFillteredBodyData] = useState<any>([]);
  const url = "humanResources_personnelRecord_training";

  useEffect(() => {
    dispatch(getData(url));
    set_show_topbar_actions({
      add: "hr/pr/training/add",
      edit: "hr/pr/training/edit",
      delete: { selectedId: selectedItem, url: url },
      url: url,
    });
  }, [set_show_topbar_actions, dispatch, selectedItem]);

  useEffect(() => {
    set_training_data(() => data);
    setSearchDatas({
      searchData: training_data.docs,
      header_data: header_data,
      set_body_data: setFillteredBodyData,
      default_data:
        fillteredBodyData.length !== 0 ? fillteredBodyData : training_data.docs,
    });
  }, [data]);

  return (
    <div className="flex flex-col gap-4">
      <PRNavResolve name="Training Record" />
      {loading ? (
        <Loading />
      ) : (
        <div className="">
          <TableComponent
            header_data={header_data}
            body_data={
              fillteredBodyData.length !== 0
                ? fillteredBodyData
                : training_data.docs
            }
            setFillteredBodyData={setFillteredBodyData}
          />
        </div>
      )}
    </div>
  );
};

export default memo(Training);
