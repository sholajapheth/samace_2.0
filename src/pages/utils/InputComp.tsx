import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../Dashboard/Dashboard";
import { camelize } from "../../components/global_utils/helper_fuctions";

type inputType = {
  name: string;
  type: string;
  placeholder?: string;
  optionList?: string[];
  required?: boolean;
};

const InputComp = ({
  name,
  type,
  placeholder,
  optionList,
  required,
}: inputType) => {
  // form value is handled by the DashboardContext and the value is passed to the input component as props and the value is set in the context

  const { inputValue, setInputValue, editData, setEditData } =
    useContext(DashboardContext);
  const [value, setValue] = useState("");
  let defaultValue = optionList ? optionList[0] : "";

  useEffect(() => {
    inputValue[camelize(name)] = "";
    if (type === "drop") {
      inputValue[camelize(name)] = optionList ? optionList[0] : "";
    }
  }, []);

  const handleChanges = (e: any) => {
    if (type === "number") {
      if (e.target.value.length > 10) {
        return;
      }
    }
    setValue(e.target.value);

    setInputValue({ ...inputValue, [camelize(name)]: e.target.value });
  };

  return (
    <div className="flex md:flex-row flex-col gap-2   md:justify-between md:items-center w-full my-[2em] ">
      <label className="text-white text-[16px] font-[700] ">{name.toUpperCase()}</label>

      {type === "drop" ? (
        <select
          value={
            editData?.properties?.[camelize(name)]
              ? editData?.properties?.[camelize(name)]
              : value
          }
          onChange={handleChanges}
          className="bg-white rounded-md text-pri text-[16px]  
        focus:outline-none md:w-[18em] w-full"
          id={name}
          required={required}
        >
          {optionList?.map((option, index) => (
            <option key={index} value={option}>
              {option.toUpperCase()}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          required={required}
          value={
            editData?.properties?.[camelize(name)]
              ? editData?.properties?.[camelize(name)]
              : value
          }
          onChange={handleChanges}
          placeholder={placeholder}
          className="  bg-white rounded-md text-pri text-[16px] p-2 
        focus:outline-none md:w-[18em] w-full h-[10em]"
        />
      ) : type === "number" ? (
        <input
          required={required}
          value={
            editData?.properties?.[camelize(name)]
              ? editData?.properties?.[camelize(name)]
              : value
          }
          style={{ appearance: "none", WebkitAppearance: "none" }}
          type="number"
          onChange={handleChanges}
          placeholder={placeholder}
          className="  bg-white rounded-md text-pri text-[16px] p-2 
        focus:outline-none md:w-[18em] w-full"
        />
      ) : (
        <input
          required={required}
          value={
            editData?.properties?.[camelize(name)]
              ? editData?.properties?.[camelize(name)]
              : value
          }
          onChange={handleChanges}
          type={type}
          placeholder={placeholder}
          className="  bg-white rounded-md text-pri text-[16px] p-2 
        focus:outline-none md:w-[18em] w-full"
        />
      )}
    </div>
  );
};

export default InputComp;
