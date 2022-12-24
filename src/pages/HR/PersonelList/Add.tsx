import { DashboardContext } from "../../Dashboard/Dashboard";
import { useContext } from "react";
import InputComp from "../../utils/InputComp";
import { PLNavResolve } from "./PersonelList";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../../store/slices/hr";
// import { useNavigate, useNavigation } from "react-router-dom";
import { currentUser } from "../../../globals/HelperFunctions";
import Loading from "../../../components/Loading";

const Add = () => {
  const { set_show_decision_modal, inputValue } =
    useContext(DashboardContext);
  const dispatch = useDispatch<any>();
  let { loading } = useSelector((state: any) => state.hr);

  const handleCancel = () => {
    window.scrollTo(0, 0);
    set_show_decision_modal(() => true);
  };
  

  const handleSend = (url: string) => {
    dispatch(addData(url, inputValue, "nill", JSON.parse(currentUser).token));
  };
  const handleSendNew = (url: string) => {
    dispatch(addData(url, inputValue, "new", JSON.parse(currentUser).token));
  };
  


  

  return (
    <div className="">
      <PLNavResolve name="Add Personnel List (BioData)" />

     {
      loading ? (
        <Loading />
      ) : (
        <div className="w-full mt-[2em]  ">
        <div className="bg-pri m-auto rounded-md lg:w-[65%] md:w-[80%] w-[90%]  py-[2em] md:px-[5em] px-[2em]">
          <InputComp name="ID" type="number" placeholder="Enter ID" />
          <InputComp name="Name" type="text" placeholder="Enter Full Name" />
       
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
          <InputComp
            name="Grade Level"
            type="text"
            placeholder="Enter Pay Grade"
          />
          <div className="text-white flex md:gap-[3em] gap-[2em] mt-[4em]">
            <button
              onClick={() => handleSend("humanResources_personnelList")}
              className="rounded-md bg-[#2F5597] font-[700]  py-[1em] w-full"
            >
              Save
            </button>

            <button
              onClick={() => handleSendNew("humanResources_personnelList")}
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
      )
     }
    </div>
  );
};

export default Add;
