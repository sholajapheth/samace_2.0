import { useSelector } from "react-redux";
import AddBox from "../../../../utils/AddBox";
import { loading, message, sidebar_data } from "../../general_data";
import { constants, leave_form_data } from "./leave_data";
import { NavResolve } from "../../../../utils/NavResolve";
import { addData } from "../../../../../store/slices/hr";

const Add = () => {
  return (
    <AddBox
      loading={loading}
      data={addData}
      message={message}
      navResolve={
        <NavResolve name="Add Leave Data" resolve_data={sidebar_data} />
      }
      endPoint={constants.url}
      formData={leave_form_data}
    />
  );
};

export default Add;
