import { PRNavResolve } from "../Training/Training";
import { useContext, useEffect } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentUser } from "../../../../../globals/HelperFunctions";
import { getSingleData, updateData } from "../../../../../store/slices/hr";
import Loading from "../../../../../components/Loading";
import EditInput from "../../../../utils/EditInput";

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

  // desctructured imports ====>

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
        getSingleData(
          "humanResources_personnelRecord_assessment",
          selectedItem[0]
        )
      );
    } else {
      navigate("/dashboard/hr/pr/assessment");
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
      <PRNavResolve name="Edit" />

      {loading ? (
        <Loading />
      ) : (
        <div className="w-full mt-[2em]  ">
          <div className="bg-pri m-auto rounded-md lg:w-[65%] md:w-[80%] w-[90%]  py-[2em] md:px-[5em] px-[2em]">
            <EditInput name="Date" type="date" />

            <EditInput name="Name" type="text" placeholder="Enter Name" />
            <EditInput
              name="JD SOP"
              type="drop"
              optionList={["Present", "Absent"]}
            />
            <EditInput
              name="GMP"
              type="drop"
              optionList={["Present", "Absent"]}
            />
            <EditInput
              name="GK"
              type="drop"
              optionList={["Present", "Absent"]}
            />
            <EditInput
              name="EH"
              type="drop"
              optionList={["Present", "Absent"]}
            />
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
