import { useSelector } from "react-redux";
import { constants, settings_data } from "./settings_data";
import AddBox from "../utils/AddBox";
import { NavResolve } from "../utils/NavResolve";
import { sidebar_data } from "../HR/general_data";
import { addAdmin } from "../../store/slices/hr";

const Add = () => {
  let { loading, message } = useSelector((state: any) => state.hr);

  return (
    <>
      <p className="text-pri font-bold text-[18px] mt-[1.5em] ml-[4px]">
        Add {constants.name}
      </p>
      <AddBox
        loading={loading}
        data={addAdmin}
        message={message}
        navResolve={
          <NavResolve
            name={`${constants.name} Form`}
            resolve_data={sidebar_data}
          />
        }
        endPoint={constants.url} /// irrevlevants
        formData={settings_data}
      />
    </>
  );
};

export default Add;
