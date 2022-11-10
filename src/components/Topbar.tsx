import { useContext, memo } from "react";
import { DashboardContext } from "../pages/Dashboard/Dashboard";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { TopbarActions } from "../globals";

const Topbar = () => {
  const { topbar_value, show_topbar_actions } = useContext(DashboardContext);
  const navigate = useNavigate();

  return (
    <div className="flex items-center mb-[1em]  gap-4 px-[1.5em] w-full ">
      <button
        onClick={() => navigate(-1)}
        className="hover:bg-[#283E6C] rounded-full h-[1.8rem] w-[1.8rem]  flex items-center "
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
          <span className="md:inline hidden ">humanresource@sam-ace.com</span>
        </div>
      </div>
    </div>
  );
};

export default memo(Topbar);
