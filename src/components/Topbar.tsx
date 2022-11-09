import { useContext } from "react";
import { DashboardContext } from "../pages/Dashboard/Dashboard";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const { topbar_value } = useContext(DashboardContext);
  const navigate = useNavigate();

  return (
    <div className="w-full flex  items-center justify-between mb-[2em]">
      <div className=" flex gap-4 items-center">
        <button
          onClick={() => navigate(-1)}
          className="hover:bg-[#283E6C] rounded-full h-[1.8rem] w-[1.8rem]  flex items-center "
        >
          <HiOutlineArrowLeft className="text-2xl" />
        </button>
        <span className="text-pri font-[700] text-hm">{topbar_value}</span>
      </div>
      <div className="text-pri text-lm font-[700] ">
        <span>humanresource@sam-ace.com</span>
      </div>
    </div>
  );
};

export default Topbar;
