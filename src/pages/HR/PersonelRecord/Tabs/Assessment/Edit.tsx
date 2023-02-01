import { loading, message, sidebar_data } from "../../../general_data";
import { constants, assessment_form_data } from "./assessment_data";
import { NavResolve } from "../../../../utils/NavResolve";
import {
  addData,
  getSingleData,
  updateData,
} from "../../../../../store/slices/hr";
import EditBox from "../../../../utils/EditBox";
import { useSelector } from "react-redux";

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
          name={`Edit ${constants.name}`}
          resolve_data={sidebar_data}
        />
      }
      endPoint={constants.url}
      formData={assessment_form_data}
    />
  );
};

export default Edit;
