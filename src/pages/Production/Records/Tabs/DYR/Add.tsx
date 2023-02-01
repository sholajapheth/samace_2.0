import AddBox from "../../../../utils/AddBox";
import { loading, message, sidebar_data } from "../../../general_data";
import { NavResolve } from "../../../../utils/NavResolve";
import { constants, dyr_form_data } from "./dyr_data";
import { addData } from "../../../../../store/slices/production";

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
      formData={dyr_form_data}
    />
  );
};

export default Add;
