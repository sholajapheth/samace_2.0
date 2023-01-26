import { useSelector } from "react-redux";
import { loading, message, sidebar_data } from "../../general_data";
import { constants, training_form_data } from "./training_data";
import { NavResolve } from "../../../../utils/NavResolve";
import {
  addData,
  getSingleData,
  updateData,
} from "../../../../../store/slices/hr";
import EditBox from "../../../../utils/EditBox";

const Edit = () => {
  return (
    <EditBox
      loading={loading}
      data={addData}
      message={message}
      updateData={updateData}
      getSingleData={getSingleData}
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
