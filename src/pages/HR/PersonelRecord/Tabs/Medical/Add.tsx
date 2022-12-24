import InputComp from "../../../../utils/InputComp";
import { PRNavResolve } from "../Training/Training";
import { useContext } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../../../../../globals/HelperFunctions";
import { addData } from "../../../../../store/slices/hr";
import Loading from "../../../../../components/Loading";

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
  



  return (
    <div>
      <PRNavResolve name="Add Medical Record Form" />
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full mt-[2em]  ">
          <div className="bg-pri m-auto rounded-md lg:w-[65%] md:w-[80%] w-[90%]  py-[2em] md:px-[5em] px-[2em]">
            <InputComp name="Date" type="date" />

            <InputComp name="Name" type="text" placeholder="Enter Name" />

            <InputComp name="Weight" type="text" placeholder="Enter Weight" />
            <InputComp name="Height" type="text" placeholder="Enter Height" />
            <InputComp
              name="Hepatitis BC"
              type="text"
              placeholder="Enter Hepatitis B&C"
            />
            <InputComp name="HIV" type="text" placeholder="Enter HIV" />
            <InputComp name="VDRL" type="text" placeholder="Enter VDRL" />
            <InputComp
              name="Malaria Parasite"
              type="text"
              placeholder="Enter Malaria Parasite"
            />
            <InputComp
              name="Blood Group"
              type="text"
              placeholder="Enter Blood Group"
            />
            <InputComp
              name="Genotype"
              type="text"
              placeholder="Enter Genotype"
            />
            <InputComp
              name="Blood Pressure"
              type="text"
              placeholder="Enter Blood Pressure"
            />
            <InputComp name="PCV" type="text" placeholder="Enter PCV" />
            <InputComp
              name="Cerebrospinal Meningitis"
              type="text"
              placeholder="Enter Cerebrospinal Meningitis"
            />
            <InputComp name="Hearing" type="text" placeholder="Enter Hearing" />
            <InputComp
              name="Urinalysis"
              type="text"
              placeholder="Enter Urinalysis"
            />
            <InputComp
              name="Chest X Ray"
              type="text"
              placeholder="Enter Chest X-ray"
            />
            <InputComp name="ENT" type="text" placeholder="Enter ENT" />
            <InputComp
              name="Alergies"
              type="text"
              placeholder="Enter Alergies"
            />
            <InputComp
              name="Sick Leave"
              type="text"
              placeholder="Enter Sick Leave"
            />
            <InputComp name="Eye" type="text" placeholder="Enter Eye" />

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
                onClick={() =>
                  handleSendNew("humanResources_personnelRecord_medical")
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Add;
