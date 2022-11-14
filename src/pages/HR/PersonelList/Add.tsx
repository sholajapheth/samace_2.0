import { DashboardContext } from "../../Dashboard/Dashboard";
import { useContext } from "react";
import InputComp from "../utils/InputComp";

const Add = () => {
  const { set_show_decision_modal } = useContext(DashboardContext);

  const handleCancel = () => {
    window.scrollTo(0, 0);
    set_show_decision_modal(true);
  };
  return (
    <div className="">
      <span className="text-pri md:text-[24px] text-[18px] font-[700]">
        Add Personnel Form
      </span>
      <div className="w-full mt-[2em]  ">
        <div className="bg-pri m-auto rounded-md lg:w-[65%] md:w-[80%] w-[90%]  py-[2em] md:px-[5em] px-[2em]">
          <InputComp name="ID" type="number" placeholder="Enter ID" />
          <InputComp
            name="Full Name"
            type="text"
            placeholder="Enter Full Name"
          />
          <InputComp
            name="Full Name"
            type="text"
            placeholder="Enter Full Name"
          />
          <InputComp
            name="Email Address"
            type="email"
            placeholder="Enter Email Address"
          />
          <InputComp
            name="Phone Number"
            type="phone"
            placeholder="Phone Number"
          />

          <InputComp
            name="Home Address"
            type="address"
            placeholder="Enter Home Address"
          />
          <InputComp
            name="Marital Status"
            type="drop"
            optionList={["Single", "Married", "Divorced"]}
          />
          <InputComp
            name="Religion"
            type="drop"
            optionList={["Christianity", "Islam", "Others"]}
          />
          <InputComp
            name="State of Origin"
            type="text"
            placeholder="Enter State of Origin"
          />

          <InputComp name="LGA" type="text" placeholder="Enter LGA" />

          <InputComp
            name="Start Date"
            type="date"
            placeholder="Enter Start Date"
          />

          <InputComp
            name="Job Type"
            type="drop"
            optionList={["Permanent Staff", "IT Placement"]}
          />
          <InputComp name="Position" type="text" placeholder="Enter Position" />
          <InputComp
            name="Department"
            type="text"
            placeholder="Enter Department"
          />
          <InputComp
            name="Pay Grade"
            type="text"
            placeholder="Enter Pay Grade"
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
