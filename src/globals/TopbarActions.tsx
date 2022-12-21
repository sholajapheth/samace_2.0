import { FiEdit2 } from "react-icons/fi";
import { MdOutlineAdd } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RiFileExcel2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { top_action_button } from "../globals/types";
import { useContext } from "react";
import { DashboardContext } from "../pages/Dashboard/Dashboard";
import { useDispatch } from "react-redux";
import { deleteData } from "../store/slices/hr";

const TopbarActionButton = ({ name, icon }: top_action_button) => {
  const { selectedItem  } = useContext(DashboardContext);

  return (
    <button
      disabled={name.toLocaleLowerCase() === "edit" && selectedItem.length === 0}

      className={`flex flex-col gap-0 items-center ${
        name.toLocaleLowerCase() === "delete"
          ? "text-red-500 hover:bg-red-300"
          : "hover:bg-pri"
      } group rounded-md px-[6px] `}
    >
      <span
        className={` ${
          name.toLocaleLowerCase() === "delete"
            ? "text-red-500 hover:bg-red-300"
            : "hover:bg-pri"
        }  group-hover:text-red-700 text-[30px] font-[900]`}
      >
        {icon}
      </span>
      <span className="font-[400] text-lm group-hover:text-white">{name}</span>
    </button>
  );
};

const TopbarActions = () => {
  const dispatch = useDispatch<any>();
  const { show_topbar_actions, selectedItem } = useContext(DashboardContext);
const token:any = localStorage.getItem("currentUser");


  const handleDelete = () => {
  if( selectedItem.length > 0){
    dispatch(
      deleteData(
        show_topbar_actions?.delete.url,
        show_topbar_actions?.delete.selectedId,
        JSON.parse(token).token
      )
    )
  } else alert("Select item(s) to delete")
  };

  // const handleExport = () => {
  //   dispatch(
  //     exportToExcel(show_topbar_actions?.type, JSON.parse(token).token)
  //   );
  // };

  return (
    <div className="flex gap-4 items-center">
      <Link to={show_topbar_actions?.add}>
        <TopbarActionButton name="Add" icon={<MdOutlineAdd />} />
      </Link>
    
        <Link to={selectedItem.length !==0 && show_topbar_actions?.edit}>
        <TopbarActionButton name="Edit" icon={<FiEdit2 />} />
      </Link>
      <div className="cursor:pointer" onClick={handleDelete}>
        <TopbarActionButton name="Delete" icon={<RiDeleteBin5Line />} />
      </div>
      <a href={`https://pharm-app-api.herokuapp.com/api/data/exportToExcel/${show_topbar_actions?.url}`} target="_blank"  className="cursor:pointer" >
      <TopbarActionButton
        name="Export"
        icon={<RiFileExcel2Fill className="text-[#107C41]" />}
      />      </a>
      
    </div>
  );
};

export default TopbarActions;
