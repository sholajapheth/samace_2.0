import { loading, message, sidebar_data } from "../../general_data";
import { constants, disciplinary_form_data } from "./disciplinary_data";
import { NavResolve } from "../../../../utils/NavResolve";
import {
  addData,
  getSingleData,
  updateData,
} from "../../../../../store/slices/hr";
import EditBox from "../../../../utils/EditBox";

const Add = () => {
  return (
    <EditBox
      loading={loading}
      data={addData}
      message={message}
      updateData={updateData}
      getSingleData={getSingleData}
      navResolve={
        <NavResolve
          name={`Add ${constants.name}`}
          resolve_data={sidebar_data}
        />
      }
      endPoint={constants.url}
      formData={disciplinary_form_data}
    />
  );
};

export default Add;
