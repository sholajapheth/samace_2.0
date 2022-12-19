

import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../Dashboard/Dashboard";
import { camelize } from "../../components/TableComponent/TableComponent";

type inputType = {
  name: string;
  type: string;
  placeholder?: string;
  optionList?: string[];
};

const InputComp = ({ name, type, placeholder, optionList }: inputType) => {
  const { inputValue, setInputValue, editData, setEditData } =
    useContext(DashboardContext);
  const [value, setValue] = useState("");
  let defaultValue = optionList ? optionList[0] : "";

  const location = window.location.pathname.split("/").slice(-1).join("");

  useEffect(() => {
    inputValue[camelize(name)] = "";
    if (location === "edit") {
      inputValue[camelize(name)] = editData?.properties?.[camelize(name)];
      setValue(editData?.properties?.[camelize(name)]);
      console.log("edit f: ", editData?.properties?.name);
    } else if (type === "drop") {
      inputValue[camelize(name)] = optionList ? optionList[0] : "";
    }
  }, []);

  const handleChanges = (e: any) => {
    setValue(e.target.value);
    if (location === "edit") {
      setEditData({
        ...editData,
        properties: { ...editData.properties, [camelize(name)]: e.target.value },
      });
    } else;
    {
      setInputValue({ ...inputValue, [camelize(name)]: e.target.value });
    }
    console.log("edit prop: ", editData);
  };

  return (
    <div className="flex md:flex-row flex-col gap-2   md:justify-between md:items-center w-full my-[2em] ">
      <label className="text-white text-[16px] font-[700] ">{name}</label>

      {type === "drop" ? (
        <select
          value={
            editData?.properties?.[camelize(name)]
              ? editData?.properties?.[camelize(name)]
              : defaultValue
          }
          onChange={handleChanges}
          className="bg-white rounded-md text-pri text-[16px] p-2 
        focus:outline-none md:w-[18em] w-full"
          id={name}
        >
          {optionList?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          value={
            location === "edit"
              ? editData?.properties?.[camelize(name)]
                ? editData?.properties?.[camelize(name)]
                : value
              : value
          }
          onChange={handleChanges}
          placeholder={placeholder}
          className="  bg-white rounded-md text-pri text-[16px] p-2 
        focus:outline-none md:w-[18em] w-full h-[10em]"
        />
      ) : (
        <input
          value={
            location === "edit"
              ? editData?.properties?.[camelize(name)]
                ? editData?.properties?.[camelize(name)]
                : value
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