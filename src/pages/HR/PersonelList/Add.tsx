import { addData } from "../../../store/slices/hr";
import {
  constants,
  personel_list_formData,
  sidebar_data,
} from "./personel_list_data";
import AddBox from "../../utils/AddBox";
import { useSelector } from "react-redux";
import { NavResolve } from "../../utils/NavResolve";

const Add = () => {
  let { loading, message } = useSelector((state: any) => state.hr);

  return (
    <AddBox
      loading={loading}
      data={addData}
      message={message}
      navResolve={
        <NavResolve
          name="Add Personnel List (BioData)"
          resolve_data={sidebar_data}
        />
      }
      endPoint={constants.url}
      formData={personel_list_formData}
    />
  );
};

export default Add;
