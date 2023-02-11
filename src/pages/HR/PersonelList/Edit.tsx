import EditBox from "../../utils/EditBox";
import { useSelector } from "react-redux";
import {
  constants,
  personel_list_formData,
  sidebar_data,
} from "./personel_list_data";
import { NavResolve } from "../../utils/NavResolve";
import { getSingleData, updateData } from "../../../store/slices/hr";

const Edit = () => {
  const { data, loading, message } = useSelector((state: any) => state.hr);

  return (
    <>
      <p className="text-pri font-bold text-[18px] mt-[1.5em] ml-[4px]">
        Edit {constants.name}
      </p>
      <EditBox
        loading={loading}
        message={message}
        updateData={updateData}
        getSingleData={getSingleData}
        data={data}
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

export default Edit;
