import InputComp from "../../../../utils/InputComp";
import { PRNavResolve } from "../Training/Training";
import { useContext } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import { addData } from "../../../../../store/slices/hr";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../../../../../globals/HelperFunctions";
import Loading from "../../../../../components/Loading";
import { FormContainer } from "../../../../utils/FormContainer";

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

  const formData = [
    {
      name: "Date",
      type: "date",
      placeholder: "Enter Date",
    },
    {
      name: "ID Number",
      type: "number",
      placeholder: "Enter ID",
    },
    {
      name: "Surname",
      type: "text",
      placeholder: "Surname",
    },
    {
      name: "First Name",
      type: "text",
      placeholder: "First Name",
    },
    {
      name: "Other Name",
      type: "text",
      placeholder: "Other Name",
    },
    {
      name: "Session",
      type: "drop",
      optionList: ["session1", "session2", "session3", "session4", "session5"],
    },
    {
      name: "Employee Handbook",
      type: "text",
      placeholder: "Enter Score",
    },
    {
      name: "Job Decription",
      type: "drop",
      optionList: ["Present", "Absent"],
    },
    {
      name: "GMP",
      type: "drop",
      optionList: ["Present", "Absent"],
    },
    {
      name: "GK",
      type: "drop",
      optionList: ["Present", "Absent"],
    },
    {
      name: "EH",
      type: "drop",
      optionList: ["Present", "Absent"],
    },
  ];

  return (
    <div>
      <PRNavResolve name="Add" />
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full mt-[2em]  ">
          <FormContainer>
            {formData.map((item, index) => {
              return (
                <InputComp
                  key={index}
                  name={item.name}
                  type={item.type}
                  optionList={item.optionList}
                  placeholder={item.placeholder}
                />
              );
            })}
            {/* <InputComp name="Date" type="date" />
            <InputComp name="ID Number" type="number" placeholder="Enter ID" />

            <InputComp name="Surname" type="text" placeholder="Surname" />

            <InputComp name="First Name" type="text" placeholder="First Name" />
            <InputComp name="Other Name" type="text" placeholder="Other Name" />
            <InputComp
              name="Session"
              type="drop"
              optionList={[
                "session1",
                "session2",
                "session3",
                "session4",
                "session5",
              ]}
            />
            <InputComp
              name="Employee Handbook"
              type="text"
              placeholder="Enter Score"
            />

            <InputComp
              name="Job Decription"
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
            /> */}

            <div className="text-white flex md:gap-[3em] gap-[2em] mt-[4em]">
              <button
                onClick={() =>
                  handleSend("humanResources_personnelRecord_assessment")
                }
                className="rounded-md bg-[#2F5597] font-[700]  py-[1em] w-full"
              >
                Save
              </button>
              <button
                onClick={() =>
                  handleSendNew("humanResources_personnelRecord_assessment")
                }
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
          </FormContainer>
        </div>
      )}
    </div>
  );
};

export default Add;
