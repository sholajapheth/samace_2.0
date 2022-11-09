import { AiOutlineClose } from "react-icons/ai";
import caution from "./assets/caution.svg";

const DecisionModal = () => {
  return (
    <div className="absolute font-inter inset-0 z-[500] w-full flex items-center h-screen  ">
      <div className="m-auto  rounded-md lg:w-[40%] md:w-[50%] w-[80%] overflow-hidden bg-white shadow-xl ">

        
        <div className="flex justify-between items-center p-[2em] bg-[#F46767]">
          <span className="font-[700] text-ds text-white ">Confirm</span>
          <button>
            <AiOutlineClose className="font-[900] text-[2em] text-white  hover:bg-[#9e1c1c]" />
          </button>
        </div>

        <div className="flex gap-4 align-top p-[2em]">
          <img src={caution} alt="caution" />
          <span className="text-[#00000080] text-[22px]  font-[500]">
            Are you sure you want to cancel this process?
            You can’t undo this action.
          </span>
        </div>

        <div className="flex w-full items-center justify-center">
          <div className="m-[2em] text-white flex gap-8 ">
            <button className="w-[8em] bg-[#107C41] text-[22px] font-[500] py-[1em] rounded-md  ">
              Yes
            </button>
            <button className="w-[8em] bg-[#F46767] text-[22px] font-[500] py-[1em] rounded-md  ">
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionModal;
