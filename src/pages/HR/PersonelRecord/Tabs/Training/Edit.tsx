import { useSelector } from "react-redux";
import { sidebar_data } from "../../../general_data";
import { constants, training_form_data } from "./training_data";
import { NavResolve } from "../../../../utils/NavResolve";
import {
  addData,
  getSingleData,
  updateData,
} from "../../../../../store/slices/hr";
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
          name="Edit Personnel List (BioData)"
          resolve_data={sidebar_data}
        />
      }
      endPoint={constants.url}
      formData={training_form_data}
    />
  );
};

export default Edit;
