import { useContext } from "react";
import { DashboardContext } from "../pages/Dashboard/Dashboard";


const Topbar = () => {
  const { topbar_value } = useContext(DashboardContext);

  return (
    <div className="w-full flex  items-center justify-between ">
      <div className=" flex gap-4 items-center">
 
        <span className="text-pri font-[700] text-hm">{topbar_value}</span>
      </div>
      <div className="text-pri text-lm font-[700] ">
        <span>humanresource@sam-ace.com</span>
      </div>
    </div>
  );
};

export default Topbar;
