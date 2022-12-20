import InputComp from "../../../../utils/InputComp";
import { useContext } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import { MENavResolve } from "../DMRR/DMRR";
import { currentUser } from "../../../../../globals/HelperFunctions";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../../../../store/slices/maintenance";
import Loading from "../../../../../components/Loading";

const Add = () => {
  const { set_show_decision_modal, inputValue } = useContext(DashboardContext);
  const dispatch = useDispatch<any>();
  const { loading } = useSelector((state: any) => state.maintenance);

  const handleCancel = () => {
    window.scrollTo(0, 0);
    set_show_decision_modal(true);
  };

  const handleSend = (url: string) => {
    dispatch(addData(url, inputValue, JSON.parse(currentUser).token));
  };

  return (
    <div>
      <MENavResolve name="Sparepart Record Form" />

      {loading ? (
        <Loading />
      ) : (
        <div className="w-full mt-[2em]  ">
          <div className="bg-pri m-auto rounded-md lg:w-[65%] md:w-[80%] w-[90%]  py-[2em] md:px-[5em] px-[2em]">
            <InputComp name="Date" type="date" placeholder="Enter date" />
            <InputComp name="Item" type="text" placeholder="Enter Item" />
            <InputComp
              name="In"
              type="text"
              placeholder="Enter Received Items"
            />
            <InputComp
              name="Out"
              type="text"
              placeholder="Enter Issued Items"
            />
            <InputComp
              name="Quantity in Store"
              type="number"
              placeholder="Enter Quantity"
            />
            <InputComp
              name="Officer s Name"
              type="text"
              placeholder="Enter Officer's name"
            />

            <div className="text-white flex md:gap-[3em] gap-[2em] mt-[4em]">
              <button 
              onClick={() =>
                handleSend("maintenance_maintenanceAndElectrical_sparePartRecord")
              } 
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
      )}
    </div>
  );
};

export default Add;
