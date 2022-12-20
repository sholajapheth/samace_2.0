import EditInput from "../../../../utils/EditInput";
import { PRNavResolve } from "../Training/Training";
import { useContext, useEffect } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import { getSingleData, updateData } from "../../../../../store/slices/hr";
import { currentUser } from "../../../../../globals/HelperFunctions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../../../../components/Loading";

const Edit = () => {
  // Functions ===>
  // handles decison modal
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

  // <====

  const { set_show_decision_modal, inputValue, selectedItem } =
    useContext(DashboardContext);
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const { data, loading } = useSelector((state: any) => state.hr);
  const { set_show_topbar_actions, editData, setEditData } =
    useContext(DashboardContext);

  // <=====

  // hooks ===>
  useEffect(() => {
    if (selectedItem.length !== 0) {
      dispatch(
        getSingleData("humanResources_personnelRecord_medical", selectedItem[0])
      );
    } else {
      navigate("/dashboard/hr/pr/medical");
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
    <div>
      <PRNavResolve name="Edit Medical Record Form" />
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full mt-[2em]  ">
          <div className="bg-pri m-auto rounded-md lg:w-[65%] md:w-[80%] w-[90%]  py-[2em] md:px-[5em] px-[2em]">
            <EditInput name="Date" type="date" />

            <EditInput name="Name" type="text" placeholder="Enter Name" />

            <EditInput name="Weight" type="text" placeholder="Enter Weight" />
            <EditInput name="Height" type="text" placeholder="Enter Height" />
            <EditInput
              name="Hepatitis BC"
              type="text"
              placeholder="Enter Hepatitis B&C"
            />
            <EditInput name="HIV" type="text" placeholder="Enter HIV" />
            <EditInput name="VDRL" type="text" placeholder="Enter VDRL" />
            <EditInput
              name="Malaria Parasite"
              type="text"
              placeholder="Enter Malaria Parasite"
            />
            <EditInput
              name="Blood Group"
              type="text"
              placeholder="Enter Blood Group"
            />
            <EditInput
              name="Genotype"
              type="text"
              placeholder="Enter Genotype"
            />
            <EditInput
              name="Blood Pressure"
              type="text"
              placeholder="Enter Blood Pressure"
            />
            <EditInput name="PCV" type="text" placeholder="Enter PCV" />
            <EditInput
              name="Cerebrospinal Meningitis"
              type="text"
              placeholder="Enter Cerebrospinal Meningitis"
            />
            <EditInput name="Hearing" type="text" placeholder="Enter Hearing" />
            <EditInput
              name="Urinalysis"
              type="text"
              placeholder="Enter Urinalysis"
            />
            <EditInput
              name="Chest X Ray"
              type="text"
              placeholder="Enter Chest X-ray"
            />
            <EditInput name="ENT" type="text" placeholder="Enter ENT" />
            <EditInput
              name="Alergies"
              type="text"
              placeholder="Enter Alergies"
            />
            <EditInput
              name="Sick Leave"
              type="text"
              placeholder="Enter Sick Leave"
            />
            <EditInput name="Eye" type="text" placeholder="Enter Eye" />

            <div className="text-white flex md:gap-[3em] gap-[2em] mt-[4em]">
              <button
                onClick={() =>
                  handleSend("humanResources_personnelRecord_medical")
                }
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
      )}
    </div>
  );
};

export default Edit;
