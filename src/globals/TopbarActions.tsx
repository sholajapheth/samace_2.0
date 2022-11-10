import {FiEdit2} from 'react-icons/fi'
import { MdOutlineAdd } from "react-icons/md";
import {RiDeleteBin5Line} from 'react-icons/ri'
import {RiFileExcel2Fill} from 'react-icons/ri'
import { Link } from "react-router-dom";
import { top_action_button } from "../globals/types";
import { useContext } from "react";
import { DashboardContext } from "../pages/Dashboard/Dashboard";

const TopbarActionButton = ({ name, icon }: top_action_button) => {
  return (
    <button className="flex flex-col gap-0 items-center hover:bg-pri group rounded-md px-[6px] ">
      <span className="text-pri group-hover:text-white text-[30px] font-[900]">
        {icon}
      </span>
      <span className="font-[400] text-lm group-hover:text-white">{name}</span>
    </button>
  );
};

const TopbarActions = () => {
  const { topbar_actions_links } = useContext(DashboardContext);

  return (
    <div className="flex gap-4 items-center">
      <Link to={topbar_actions_links?.add}>
        <TopbarActionButton name="Add" icon={<MdOutlineAdd />} />
      </Link>
      <Link to={topbar_actions_links?.edit}>
        <TopbarActionButton name="Edit" icon={<FiEdit2 />} />
      </Link>
      <TopbarActionButton name="Delete" icon={<RiDeleteBin5Line />} />
      <TopbarActionButton
        name="Export"
        icon={<RiFileExcel2Fill className="text-[#107C41]" />}
      />
    </div>
  );
};

export default TopbarActions;
