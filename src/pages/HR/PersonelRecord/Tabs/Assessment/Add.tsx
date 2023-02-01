import AddBox from "../../../../utils/AddBox";
import { loading, message, sidebar_data } from "../../../general_data";
import { constants, assessment_form_data } from "./assessment_data";
import { NavResolve } from "../../../../utils/NavResolve";
import { addData } from "../../../../../store/slices/hr";

const Add = () => {
  return (
    <AddBox
      loading={loading}
      data={addData}
      message={message}
      navResolve={
        <NavResolve
          name={`Add ${constants.name}`}
          resolve_data={sidebar_data}
        />
      }
      endPoint={constants.url}
      formData={assessment_form_data}
    />
  );
};

export default Add;
