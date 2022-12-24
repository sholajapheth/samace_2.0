import InputComp from "../../../../utils/InputComp";
import { PRNavResolve } from "../Training/Training";
import { useContext } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../../../components/Loading";
import { addData } from "../../../../../store/slices/hr";
import { currentUser } from "../../../../../globals/HelperFunctions";

const Add = () => {
  const { set_show_decision_modal, inputValue } = useContext(DashboardContext);
  const dispatch = useDispatch<any>();
  const { loading } = useSelector((state: any) => state.hr);
  const handleCancel = () => {
    window.scrollTo(0, 0);
    set_show_decision_modal(true);
  };

  const handleSend = (url: string) => {
    dispatch(addData(url, inputValue, "nill", JSON.parse(currentUser).token));
  };
  const handleSendNew = (url: string) => {
    dispatch(addData(url, inputValue, "new", JSON.parse(currentUser).token));
  };
  

  
  return (
    <div>
      <PRNavResolve name="Add Disciplinary Record Form" />
     {
        loading ? (
          <Loading />
        ) : (
          <div className="w-full mt-[2em]  ">
          <div className="bg-pri m-auto rounded-md lg:w-[65%] md:w-[80%] w-[90%]  py-[2em] md:px-[5em] px-[2em]">
            <InputComp name="Date" type="date" />
  
            <InputComp name="Name" type="text" placeholder="Enter Name" />
            <InputComp
              name="Violation"
              type="drop"
              optionList={["Theft", "Fraud", "Bribery"]}
            />
            <InputComp
              name="Action"
              type="drop"
              optionList={["Dismissal", "Suspension", "Warning"]}
            />
  
            <div className="text-white flex md:gap-[3em] gap-[2em] mt-[4em]">
              <button 
              onClick={() =>
                handleSend("humanResources_personnelRecord_disciplinary")
              }
              className="rounded-md bg-[#2F5597] font-[700]  py-[1em] w-full">
                Save
              </button>
              <button 
              onClick={() =>
                handleSendNew("humanResources_personnelRecord_disciplinary")
              }
              className="rounded-md bg-[#2F5597] font-[700]  py-[1em] w-full">
                Save & New
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
