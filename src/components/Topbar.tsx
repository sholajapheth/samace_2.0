import { useLocation, useNavigate} from "react-router-dom";
import { useContext, memo } from "react";
import { DashboardContext } from "../pages/Dashboard/Dashboard";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { TopbarActions } from "../globals";

const Topbar = () => {
  const { topbar_value, show_topbar_actions } = useContext(DashboardContext);
  const navigate = useNavigate();
  const location = useLocation();
  const index = location.pathname.lastIndexOf("/");
  let locat =
    location.pathname.split("/").length - 1 > 2
      ? location.pathname.slice(0, index)
      : "/";
 

  return (
    <div className="flex items-center mb-[1em]  gap-4 px-[1.5em] w-full ">
      <button
        onClick={() => navigate(locat)}
        className="hover:bg-[#283E6C] hover:text-white hover:font-[600] rounded-full h-[2rem] w-[2rem]  flex items-center "
      >
        <HiOutlineArrowLeft className="text-2xl" />
      </button>

      <div className="w-full flex md:flex-row flex-col items-center justify-between ">
        <span className="text-pri font-[700] lg:text-hm text-tm md:text-tl ">
          {topbar_value}
        </span>

        {show_topbar_actions && <TopbarActions />}

        <div className="text-pri md:text-lg text-lm font-[700] ">
          <span className="md:hidden inline absolute top-2 right-2">
            humanresource@sam-ace.com
          </span>
          <span className="md:inline hidden ">
            {location.pathname.includes("hr") && " humanresource@sam-ace.com"}
            {location.pathname.includes("qc") && " qualitycontrol@sam-ace.com"}
            {location.pathname.includes("qa") && " qualityassurance@sam-ace.com"}
            {location.pathname.includes("maintenance") && "maintenance@sam-ace.com"}
            {location.pathname.includes("production") && "production@sam-ace.com"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(Topbar);
