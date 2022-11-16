import InputComp from "../../../utils/InputComp";
import { PRNavResolve } from "../Training/Training";
import { useContext } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";

const Edit = () => {
  const { set_show_decision_modal } = useContext(DashboardContext);

  const handleCancel = () => {
    window.scrollTo(0, 0);
    set_show_decision_modal(true);
  };
  return (
    <div>
      <PRNavResolve name="Edit" />

      <div className="w-full mt-[2em]  ">
        <div className="bg-pri m-auto rounded-md lg:w-[65%] md:w-[80%] w-[90%]  py-[2em] md:px-[5em] px-[2em]">
          <InputComp name="ID" type="number" placeholder="Enter ID" />
          <InputComp
            name="Production End Date"
            type="date"
            placeholder="Enter Production End
 Date"
          />
          <InputComp
            name="Product"
            type="drop"
            optionList={["prod1", "prod2", "prod3"]}
          />
          <InputComp
            name="Batch Number"
            type="number"
            placeholder="Enter atch Number"
          />
          <InputComp
            name="Filling Equipement"
            type="drop"
            optionList={["equip1", "equip2", "equip3"]}
          />

          <InputComp
            name="Filling Operator"
            type="drop"
            optionList={["operator1", "operator2", "operator3"]}
          />
          <InputComp
            name="Packing Supervisor"
            type="drop"
            optionList={["supervisor1", "supervisor2", "supervisor3"]}
          />
          <InputComp
            name="Shift Supervisor"
            type="drop"
            optionList={["supervisor1", "supervisor2", "supervisor3"]}
          />
          <InputComp
            name="Total Yeild"
            type="number"
            placeholder="Enter Total Yeild"
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

export default Edit;
