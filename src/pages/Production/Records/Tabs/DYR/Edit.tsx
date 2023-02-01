import { useSelector } from "react-redux";
import { sidebar_data } from "../../../general_data";
import { NavResolve } from "../../../../utils/NavResolve";
import {
  getSingleData,
  updateData,
} from "../../../../../store/slices/production";
import EditBox from "../../../../utils/EditBox";
import { constants, dyr_form_data } from "./dyr_data";

const Edit = () => {
  const { data, loading, message } = useSelector(
    (state: any) => state.production
  );

  return (
    <EditBox
      loading={loading}
      message={message}
      updateData={updateData}
      getSingleData={getSingleData}
      data={data}
      navResolve={
        <NavResolve
          name={`Edit ${constants.name}`}
          resolve_data={sidebar_data}
        />
      }
      endPoint={constants.url}
      formData={dyr_form_data}
    />
  );
};

export default Edit;
