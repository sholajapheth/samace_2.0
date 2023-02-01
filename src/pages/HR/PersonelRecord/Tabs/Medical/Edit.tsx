import { useSelector } from "react-redux";
import { sidebar_data } from "../../../general_data";
import { constants, medical_form_data } from "./medical_data";
import { NavResolve } from "../../../../utils/NavResolve";
import { getSingleData, updateData } from "../../../../../store/slices/hr";
import EditBox from "../../../../utils/EditBox";

const Edit = () => {
  const { data, loading, message } = useSelector((state: any) => state.hr);

  return (
    <EditBox
      loading={loading}
      message={message}
      updateData={updateData}
      getSingleData={getSingleData}
      data={data}
      navResolve={
        <NavResolve
          name={`Add ${constants.name}`}
          resolve_data={sidebar_data}
        />
      }
      endPoint={constants.url}
      formData={medical_form_data}
    />
  );
};

export default Edit;
