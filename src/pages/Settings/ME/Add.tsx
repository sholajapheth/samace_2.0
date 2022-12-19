import InputComp from "../../utils/InputComp";
import { MENavResolve } from "./ME";
import { useContext } from "react";
import { DashboardContext } from "../../Dashboard/Dashboard";

const Add = () => {
  const { set_show_decision_modal } = useContext(DashboardContext);

  const handleCancel = () => {
    window.scrollTo(0, 0);
    set_show_decision_modal(true);
  };
  return (
    <div>
      <MENavResolve name="Maintenenace Equipement Form" />

      <div className="w-full mt-[2em]  ">
        <div className="bg-pri m-auto rounded-md lg:w-[65%] md:w-[80%] w-[90%]  py-[2em] md:px-[5em] px-[2em]">
          <InputComp
            name="Equipement Name"
            type="text"
            placeholder="Enter Equipement name"
          />

          <InputComp
            name="ID Number"
            type="number"
            placeholder="Enter ID Number"
          />
          <InputComp name="Make" type="text" placeholder="Enter Make" />

          <InputComp name="Model" type="text" placeholder="Enter Model" />
          <InputComp
            name="Power Capacity"
            type="number"
            placeholder="Enter Power Capacity"
          />

          <div className="text-white flex md:gap-[3em] gap-[2em] mt-[4em]">
            <button className="rounded-md bg-[#2F5597] font-[700]  py-[1em] w-full">
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
    </div>
  );
};

export default Add;
