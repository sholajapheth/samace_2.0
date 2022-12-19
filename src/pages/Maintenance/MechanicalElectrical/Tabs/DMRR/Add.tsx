import InputComp from "../../../../utils/InputComp";
import { MENavResolve } from "./DMRR";
import { useContext } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../../../../store/slices/maintenance";
import { currentUser } from "../../../../../globals/HelperFunctions";
import Loading from "../../../../../components/Loading";

const Add = () => {
  const { set_show_decision_modal, inputValue } = useContext(DashboardContext);
  const dispatch = useDispatch<any>();
  const { loading } = useSelector((state: any) => state.maintenance);

  const handleCancel = () => {
    window.scrollTo(0, 0);
    set_show_decision_modal(true);
  };

  const handleSend = (url: string) => {
    dispatch(addData(url, inputValue, JSON.parse(currentUser).token));
  };

  return (
    <div>
      <MENavResolve name="Add" />
     {
      loading ?(
        <Loading />
      ):(
        <div className="w-full mt-[2em]  ">
        <div className="bg-pri m-auto rounded-md lg:w-[65%] md:w-[80%] w-[90%]  py-[2em] md:px-[5em] px-[2em]">
          <InputComp name="date" type="date" placeholder="Enter Date" />
          <InputComp
            name="Power Source"
            type="drop"
            placeholder="Choose Power Source"
            optionList={["Diesel", "Generator"]}
          />
          <InputComp
            name="Day Start Quantity"
            type="text"
            placeholder="Enter Day Start Quantity"
          />

          <InputComp
            name="Day End Quantity"
            type="text"
            placeholder="Enter Day End Quantity"
          />
          <InputComp
            name="Day Used Quantity"
            type="text"
            placeholder="Enter Day Used Quantity"
          />
          <div className="text-white flex md:gap-[3em] gap-[2em] mt-[4em]">
            <button  onClick={() =>
                handleSend("maintenance_maintenanceAndElectrical_dieselAndMeterReadingRecord")
              } className="rounded-md bg-[#2F5597] font-[700]  py-[1em] w-full">
              Save
            </button>
            <button
              onClick={handleCancel}
              className="rounded-md bg-[#FF5552] font-[700]  py-[1em] w-full"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      )
     }
    </div>
  );
};

export default Add;
