import { PLNavResolve } from "./PersonelList";
import { addData } from "../../../store/slices/hr";
import { constants, personel_list_formData } from "./personel_list_data";
import AddBox from "../../utils/AddBox";
import { useSelector } from "react-redux";

const Add = () => {
  let { loading } = useSelector((state: any) => state.hr);

  return (
    <AddBox
      loading={loading}
      addData={addData}
      navResolve={<PLNavResolve name="Add Personnel List (BioData)" />}
      endPoint={constants.url}
      formData={personel_list_formData}
    />
  );
};

export default Add;
