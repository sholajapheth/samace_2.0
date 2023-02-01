import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../Dashboard/Dashboard";
import { camelize } from "../../components/global_utils/helper_fuctions";
import { countries } from "../Dashboard/countries";
import { states } from "../../assets/datas/data";

type inputType = {
  name: string;
  type: string;
  placeholder?: string;
  optionList?: string[];
  dropType?: string;
  section?: string;
};

const EditInput = ({
  name,
  type,
  placeholder,
  optionList,
  dropType,
  section,
}: inputType) => {
  const {
    inputValue,
    editData,
    setEditData,
    setInputValue,
    selectedCountry,
    setSelectedCountry,
    selectedState,
    setSelectedState,
    state,
    dispatch,
  } = useContext(DashboardContext);
  let defaultValue = optionList ? optionList[0] : "";

  const [value, setValue] = useState(
    editData?.[camelize(name)] ? editData?.[camelize(name)] : defaultValue
  );

  useEffect(() => {
    setInputValue((previousState: any) => ({
      ...previousState,
      [camelize(name)]: editData?.[camelize(name)],
    }));
  }, [editData]);

  const handleChanges = (e: any) => {
    if (name === "phone" || name.toLowerCase() === "id") {
      if (e.target.value.length > 11) {
        return;
      }
    }
    setValue(e.target.value);

    setInputValue({ ...inputValue, [camelize(name)]: e.target.value });
    console.log("edit prop: ", editData);
  };

  const handleSpecialDrop = (e: any) => {
    setValue(e.target.value);
    setEditData((previousState: any) => ({
      ...previousState,
      [camelize(name)]: e.target.value,
    }));
    if (dropType === "country") {
      dispatch({
        type: "setSelectedCountry",
        payload: { name: camelize(section || ""), country: e.target.value },
      });
    }
    if (dropType === "state") {
      dispatch({
        type: "setSelectedState",
        payload: { name: camelize(section || ""), state: e.target.value },
      });
    }
  };

  return (
    <div className="flex md:flex-row flex-col gap-2   md:justify-between md:items-center w-full my-[2em] ">
      <label className="text-white text-[16px] font-[700] ">
        {name.toUpperCase()}
      </label>

      {type === "specialDrop" ? (
        <select
          value={value}
          onChange={handleSpecialDrop}
          className="bg-white rounded-md text-pri text-[16px] p-2 
        focus:outline-none md:w-[18em] w-full"
          id={name}
        >
          <option value="">SELECT {dropType?.toLocaleUpperCase()}</option>
          {dropType === "country"
            ? countries.map((country, index) => (
                <option key={index} value={country.name}>
                  {country.name.toUpperCase()}
                </option>
              ))
            : dropType === "state"
            ? selectedCountry === "Nigeria"
              ? states.map((state, index) => (
                  <option key={index} value={state.name}>
                    {state.name.toUpperCase()}
                  </option>
                ))
              : null
            : dropType === "city"
            ? states
                .filter((state) => state.name === selectedState)
                .map((state, index) =>
                  state.lgas.map((lga, index) => (
                    <option key={index} value={lga}>
                      {lga.toUpperCase()}
                    </option>
                  ))
                )
            : null}
        </select>
      ) : type === "drop" ? (
        <select
          value={value}
          onChange={handleChanges}
          className="bg-white rounded-md text-pri text-[16px] p-2 
        focus:outline-none md:w-[18em] w-full"
          id={name}
        >
          <option value="">SELECT {name?.toLocaleUpperCase()}</option>

          {optionList?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          value={
            editData?.[camelize(name)] ? editData?.[camelize(name)] : value
          }
          onChange={handleChanges}
          placeholder={placeholder}
          className="  bg-white rounded-md text-pri text-[16px] p-2 
        focus:outline-none md:w-[18em] w-full h-[10em]"
        />
      ) : type === "date" ? (
        <input
          value={
            editData?.[camelize(name)]
              ? editData?.[camelize(name)]?.split("T")[0]
              : value
          }
          onChange={handleChanges}
          type={type}
          placeholder={placeholder}
          className="  bg-white rounded-md text-pri text-[16px] p-2 
        focus:outline-none md:w-[18em] w-full"
        />
      ) : (
        <input
          value={
            editData?.[camelize(name)] ? editData?.[camelize(name)] : value
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

export default EditInput;
