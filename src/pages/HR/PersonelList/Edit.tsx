import { DashboardContext } from "../../Dashboard/Dashboard";
import { useContext, useEffect } from "react";
import { PLNavResolve } from "./PersonelList";
import { useDispatch, useSelector } from "react-redux";
import { getSingleData, updateData } from "../../../store/slices/hr";
import Loading from "../../../components/Loading";
import { currentUser } from "../../../globals/HelperFunctions";
import EditInput from "../../utils/EditInput";
import { useNavigate } from "react-router-dom";

const Edit = () => {

// Functions ===>
  // handles decision modal
  const handleCancel = () => {
    window.scrollTo(0, 0);
    set_show_decision_modal(true);
  };



  //the updating function,
  const handleSend = (url: string) => {
    dispatch(
      updateData(
        url,
        selectedItem[0],
        inputValue,
        JSON.parse(currentUser).token
      )
    );
  };


  // <===

  // desctructured imports ====>
  const { set_show_decision_modal, inputValue, selectedItem } =
  useContext(DashboardContext);
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const { data, loading } = useSelector((state: any) => state.hr);
  const { set_show_topbar_actions, setEditData } =
  useContext(DashboardContext);

  // <=====

  // hooks ===>
  
  useEffect(() => {
    if (selectedItem.length !== 0) {
      dispatch(getSingleData("humanResources_personnelList", selectedItem[0]));
    }else{
      navigate("/dashboard/hr/pl")
    }
 
  }, [set_show_topbar_actions, selectedItem, dispatch]);


  useEffect(() => {
    if (data) {
      setEditData(() => data);
      // console.log("edit: ", editData);
    }
  }, [data]);

  // <===


  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <PLNavResolve name="Edit" />

          <div className="w-full mt-[2em]  ">
            <div className="bg-pri m-auto rounded-md lg:w-[65%] md:w-[80%] w-[90%]  py-[2em] md:px-[5em] px-[2em]">
              <EditInput name="ID" type="number" placeholder="Enter ID" />
              <EditInput
                name="Name"
                type="text"
                placeholder="Enter Full Name"
              />
              
              <EditInput
                name="Email Address"
                type="email"
                placeholder="Enter Email Address"
              />
              <EditInput
                name="Phone Number"
                type="phone"
                placeholder="Phone Number"
              />

              <EditInput
                name="Home Address"
                type="address"
                placeholder="Enter Home Address"
              />
              <EditInput
                name="Marital Status"
                type="drop"
                optionList={["Single", "Married", "Divorced"]}
              />
              <EditInput
                name="Religion"
                type="drop"
                optionList={["Christianity", "Islam", "Others"]}
              />
              <EditInput
                name="State of Origin"
                type="text"
                placeholder="Enter State of Origin"
              />

              <EditInput name="LGA" type="text" placeholder="Enter LGA" />

              <EditInput
                name="Start Date"
                type="date"
                placeholder="Enter Start Date"
              />

              <EditInput
                name="Job Type"
                type="drop"
                optionList={["Permanent Staff", "IT Placement"]}
              />
              <EditInput
                name="Position"
                type="text"
                placeholder="Enter Position"
              />
              <EditInput
                name="Department"
                type="text"
                placeholder="Enter Department"
              />
              <EditInput
                name="Pay Grade"
                type="text"
                placeholder="Enter Pay Grade"
              />
              <EditInput
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
                  onClick={handleCancel}
                  className="rounded-md bg-[#FF5552] font-[700]  py-[1em] w-full"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Edit;
