import InputComp from "../../../../utils/InputComp";
import { useContext } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import { MENavResolve } from "../DMRR/DMRR";
import { addData } from "../../../../../store/slices/maintenance";
import { currentUser } from "../../../../../globals/HelperFunctions";
import { useDispatch, useSelector } from "react-redux";
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
      <MENavResolve name="Power Usage Record Form" />

      {loading ? (
        <Loading />
      ) : (
        <div className="w-full mt-[2em]  ">
          <div className="bg-pri m-auto rounded-md lg:w-[65%] md:w-[80%] w-[90%]  py-[2em] md:px-[5em] px-[2em]">
            <InputComp name="ID" type="number" placeholder="Enter ID" />
            <InputComp
              name="Production End Date"
              type="number"
              placeholder="Enter Production End
 Date"
            />
            <InputComp
              name="Power Source"
              type="drop"
              optionList={["prod1", "prod2", "prod3"]}
            />
            <InputComp
              name="Start Time"
              type="number"
              placeholder="Enter Start Time"
            />
            <InputComp
              name="Stop TIme"
              type="number"
              placeholder="Enter Stop Time"
            />
            <InputComp
              name="Run TIme"
              type="number"
              placeholder="Enter Run Time"
            />

            <InputComp
              name="Operator"
              type="drop"
              optionList={["operator1", "operator2", "operator3"]}
            />
            <div className="text-white flex md:gap-[3em] gap-[2em] mt-[4em]">
              <button 
                onClick={() =>
                  handleSend("maintenance_maintenanceAndElectrical_powerUsageRecord")
                }
              className="rounded-md bg-[#2F5597] font-[700]  py-[1em] w-full">
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
      )}
    </div>
  );
};

export default Add;
