import { useContext, useEffect, useMemo, memo, useState } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import { sidebar_nav_type } from "../../../../../globals/types";
import SearchBar from "../../../../../globals/SearchBar";
import { TableComponent } from "../../../../../components";
import mock_data from "../../MOCK_DATA.json";
import disciplinary from "../../../assets/disciplinary.svg";
import medical from "../../../assets/medical.svg";
import pay from "../../../assets/pay.svg";
import assessment from "../../../assets/assessment.svg";
import training from "../../../assets/training.svg";

const header_data = [
  { id: 0, name: "Date" },
  { id: 1, name: "Name" },
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
  const { set_show_topbar_actions } = useContext(DashboardContext);

  const [training_data, set_training_data ] = useState<any>(mock_data);

  useEffect(() => {
    set_show_topbar_actions({
      add: "hr/pr/training/add",
      edit: "hr/pr/training/edit",
    });
  }, [set_show_topbar_actions]);

  return (
    <div className="flex flex-col gap-4">
      <SearchBar
        searchData={mock_data}
        header_data={header_data}
        set_body_data={set_training_data}
        default_data={mock_data}
      />
      <PRNavResolve name="Training Record" />
      <div className="">
        <TableComponent header_data={header_data} body_data={training_data} />
      </div>
    </div>
  );
};

export default memo(Training);
