import { addData } from "../../../store/slices/maintenance";
import {
  constants,
  personel_list_formData,
  sidebar_data,
} from "./equipement_list_data";
import AddBox from "../../utils/AddBox";
import { useSelector } from "react-redux";
import { NavResolve } from "../../utils/NavResolve";

const Add = () => {
  let { loading, message } = useSelector((state: any) => state.maintenance);

  return (
    <>
      <p className="text-pri font-bold text-[18px] mt-[1.5em] ml-[4px]">
        Add {constants.name}
      </p>
      <AddBox
        loading={loading}
        data={addData}
        message={message}
        navResolve={
          <NavResolve
            name={`${constants.name} Form`}
            resolve_data={sidebar_data}
          />
        }
        endPoint={constants.url}
        formData={personel_list_formData}
      />
    </>
  );
};

export default Add;
