import EditInput from "../../../../utils/EditInput";
import { useContext, useEffect } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import { MENavResolve } from "../DMRR/DMRR";
import { getSingleData, updateData } from "../../../../../store/slices/maintenance";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentUser } from "../../../../../globals/HelperFunctions";
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


  // desctructured imports ====>

  const { set_show_decision_modal, inputValue, selectedItem } =
    useContext(DashboardContext);
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const { data, loading } = useSelector((state: any) => state.maintenance);
  const { set_show_topbar_actions, editData, setEditData } =
    useContext(DashboardContext);

  // <=====



  // hooks ===>
  useEffect(() => {
    if (selectedItem.length !== 0) {
      dispatch(
        getSingleData(
          "maintenance_maintenanceAndElectrical_sparePartRecord",
          selectedItem[0]
        )
      );
    } else {
      navigate("/dashboard/maintenance/me/spr");
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
      <MENavResolve name="Edit" />

   {
      loading ? (
        <Loading />
      ) : (
        <div className="w-full mt-[2em]  ">
        <div className="bg-pri m-auto rounded-md lg:w-[65%] md:w-[80%] w-[90%]  py-[2em] md:px-[5em] px-[2em]">
          <EditInput name="Date" type="date" placeholder="Enter date" />
          <EditInput name="Item" type="text" placeholder="Enter Item" />
          <EditInput name="In" type="text" placeholder="Enter Received Items" />
          <EditInput name="Out" type="text" placeholder="Enter Issued Items" />
          <EditInput
            name="Quantity in Store"
            type="number"
            placeholder="Enter Quantity"
          />
          <EditInput
            name="Officer's Name"
            type="text"
            placeholder="Enter Officer s name"
          />

          <div className="text-white flex md:gap-[3em] gap-[2em] mt-[4em]">
            <button
            onClick={() => {
              handleSend(
                "maintenance_maintenanceAndElectrical_sparePartRecord"
              );
              
            }}
            className="rounded-md bg-[#2F5597] font-[700]  py-[1em] w-full">
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
      )

   }
    </div>
  );
};

export default Edit;
