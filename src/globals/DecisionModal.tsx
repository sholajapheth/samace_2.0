import { AiOutlineClose } from "react-icons/ai";
import caution from "./assets/caution.svg";
import { useContext, useState } from "react";
import { DashboardContext } from "../pages/Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";

const DecisionModal = () => {
  const navigate = useNavigate()
  const { set_show_decision_modal } =
    useContext(DashboardContext);
   //returns 1 or 0 depending on the decision made
  //  const [decision_modal_value, set_decision_modal_value] = useState<number>();



  const handle_decision_modal = (decision:number) => {
    set_show_decision_modal(false);
    // set_decision_modal_value(decision);
    if (decision === 1) {
      console.log("yes");
      navigate(-1)

    }
    if (decision === 0) {
      console.log("no");
    }
    console.log(decision);
  };

  return (
    <div className="absolute font-inter inset-0 z-[500] w-full flex items-center h-screen  backdrop-blur-md">
      <div className="m-auto  rounded-md lg:w-[30%] md:w-[40%] w-[70%] overflow-hidden bg-white shadow-xl ">
        <div className="flex justify-between items-center p-[1em] bg-[#F46767]">
          <span className="font-[700] text-tl text-white ">Confirm</span>
          <button onClick={() => set_show_decision_modal(false)}>
            <AiOutlineClose className="font-[900] text-[1.5em] text-white  hover:bg-[#9e1c1c]" />
          </button>
        </div>

        <div className="flex gap-4 align-top p-[2em]">
          <img src={caution} alt="caution" />
          <span className="text-[#00000080] text-[18px]  font-[500]">
            Are you sure you want to cancel this process? You can’t undo this
            action.
          </span>
        </div>

        <div className="flex w-full items-center justify-center">
          <div className="m-[2em] text-white flex gap-8 text-[18px] font-[500]">
            <button
              onClick={() => handle_decision_modal(1)}
              className="w-[8em] bg-[#107C41] hover:bg-[#061e06]  py-[1em] rounded-md  "
            >
              Yes
            </button>
            <button
              onClick={() => handle_decision_modal(0)}
              className="w-[8em] bg-[#F46767] hover:bg-[#9e1c1c]  py-[1em] rounded-md  "
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionModal;
