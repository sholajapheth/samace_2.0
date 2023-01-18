import { PLNavResolve } from "./PersonelList";
import EditBox from "../../utils/EditBox";
import { useSelector } from "react-redux";
import { constants, personel_list_formData } from "./personel_list_data";

const Edit = () => {
  const { data, loading } = useSelector((state: any) => state.hr);

  return (
    <EditBox
      loading={loading}
      data={data}
      navResolve={<PLNavResolve name="Add Personnel List (BioData)" />}
      endPoint={constants.url}
      formData={personel_list_formData}
    />
  );
};

export default Edit;
