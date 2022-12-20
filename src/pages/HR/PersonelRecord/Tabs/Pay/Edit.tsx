import EditInput from "../../../../utils/EditInput";
import { PRNavResolve } from "../Training/Training";
import { useContext, useEffect } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import { getSingleData, updateData } from "../../../../../store/slices/hr";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentUser } from "../../../../../globals/HelperFunctions";

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
            "humanResources_personnelRecord_pay",
            selectedItem[0]
          )
        );
      } else {
        navigate("/dashboard/hr/pr/pay");
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

      <div className="w-full mt-[2em]  ">
        <div className="bg-pri m-auto rounded-md lg:w-[65%] md:w-[80%] w-[90%]  py-[2em] md:px-[5em] px-[2em]">
        <EditInput name="Date" type="date" />
            <EditInput name="Name" type="text" placeholder="Enter Name" />
            <EditInput
              name="Grade Level"
              type="drop"
              optionList={["Grade 1", "Grade 2", "Grade 3"]}
            />
            <EditInput
              name="Step"
              type="drop"
              optionList={["Step 1", "Step 2", "Step 3"]}
            />
            <EditInput name="Net Pay" type="number" placeholder="Enter Net Pay" />
          <div className="text-white flex md:gap-[3em] gap-[2em] mt-[4em]">
            <button    onClick={() =>
                  handleSend("humanResources_personnelRecord_pay")
                } className="rounded-md bg-[#2F5597] font-[700]  py-[1em] w-full">
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
