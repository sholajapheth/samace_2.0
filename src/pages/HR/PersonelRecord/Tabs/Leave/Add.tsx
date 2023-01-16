import InputComp from "../../../../utils/InputComp";
import { useContext } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import { addData } from "../../../../../store/slices/hr";
import { currentUser } from "../../../../../globals/HelperFunctions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../../../components/Loading";
import { PRNavResolve } from "../Training/Training";

const Add = () => {
  const { set_show_decision_modal, inputValue } = useContext(DashboardContext);
  const { loading } = useSelector((state: any) => state.hr);

  const dispatch = useDispatch<any>();

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
      <PRNavResolve name="Add" />
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full mt-[2em]  ">
          <div className="bg-pri m-auto rounded-md lg:w-[65%] md:w-[80%] w-[90%]  py-[2em] md:px-[5em] px-[2em]">
            <InputComp name="Date" type="date" />

            <InputComp name="Name" type="text" placeholder="Enter Name" />
            <InputComp name="Email" type="email" placeholder="Enter Email" />

            <InputComp
              name="JD SOP"
              type="drop"
              optionList={["Present", "Absent"]}
            />
            <InputComp
              name="GMP"
              type="drop"
              optionList={["Present", "Absent"]}
            />
            <InputComp
              name="GK"
              type="drop"
              optionList={["Present", "Absent"]}
            />
            <InputComp
              name="EH"
              type="drop"
              optionList={["Present", "Absent"]}
            />

            <div className="text-white flex md:gap-[3em] gap-[2em] mt-[4em]">
              <button
                onClick={() => handleSend("production_record_leave")}
                className="rounded-md bg-[#2F5597] font-[700]  py-[1em] w-full"
              >
                Save
              </button>

              <button
                onClick={() => handleSendNew("production_record_leave")}
                className="rounded-md bg-[#2F5597] font-[700]  py-[1em] w-full"
              >
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
      )}
    </div>
  );
};

export default Add;
