import { useContext, useState } from "react";
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

const InputComp = ({
  name,
  type,
  placeholder,
  optionList,
  dropType,
  section,
}: inputType) => {
  // form value is handled by the DashboardContext and the value is passed to the input component as props and the value is set in the context

  const placeholderValue = placeholder
    ? placeholder
    : type === "text" || "textarea"
    ? `Enter ${name}`
    : placeholder;

  const { inputValue, setInputValue, state, dispatch } =
    useContext(DashboardContext);
  const [value, setValue] = useState("");

  const handleChanges = (e: any) => {
    if (name === "phone" || name.toLowerCase() === "id") {
      if (e.target.value.length > 11) {
        return;
      }
    }
    setValue(e.target.value);

    setInputValue({ ...inputValue, [camelize(name)]: e.target.value });
    console.log("input value: ", e.target.value);
  };

  const handleSpecialDrop = (e: any) => {
    setValue(e.target.value);

    setInputValue({ ...inputValue, [camelize(name)]: e.target.value });
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
      <label className="text-white text-[16px] font-[700] ">{name}</label>

      {type === "specialDrop" ? (
        <select
          value={value}
          onChange={handleSpecialDrop}
          className="bg-white rounded-md text-pri text-[16px]  
        focus:outline-none md:w-[18em] w-full"
          id={name}
        >
          <option value="">Select {dropType}</option>
          {dropType === "country"
            ? countries.map((country, index) => (
                <option key={index} value={country.name}>
                  {country.name}
                </option>
              ))
            : dropType === "state"
            ? state[camelize(section || "")]?.selectedCountry === "Nigeria"
              ? states.map((state, index) => (
                  <option key={index} value={state.name}>
                    {state.name}
                  </option>
                ))
              : null
            : dropType === "city"
            ? states
                .filter(
                  (state_) =>
                    state_.name ===
                    state[camelize(section || "")]?.selectedState
                )
                .map((state, index) =>
                  state.lgas.map((lga, index) => (
                    <option key={index} value={lga}>
                      {lga}
                    </option>
                  ))
                )
            : null}
        </select>
      ) : // Special Drop for country, state and city
      type === "drop" ? (
        <select
          value={value}
          onChange={handleChanges}
          className="bg-white rounded-md text-pri text-[16px]  
        focus:outline-none md:w-[18em] w-full"
          id={name}
        >
          <option value="">
            {placeholder ? placeholder : `Select ${name}`}
          </option>

          {optionList?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          rows={4}
          value={value}
          onChange={handleChanges}
          placeholder={placeholderValue}
          className="  bg-white rounded-md text-pri text-[16px] p-2 
        focus:outline-none md:w-[18em] w-full"
        />
      ) : type === "number" ? (
        <input
          value={value}
          style={{ appearance: "none", WebkitAppearance: "none" }}
          type="number"
          onChange={handleChanges}
          placeholder={placeholderValue}
          className="  bg-white rounded-md text-pri text-[16px] p-2 
        focus:outline-none md:w-[18em] w-full"
        />
      ) : (
        <input
          value={value}
          onChange={handleChanges}
          type={type}
          placeholder={placeholderValue}
          className="  bg-white rounded-md text-pri text-[16px] p-2 
        focus:outline-none md:w-[18em] w-full"
        />
      )}
    </div>
  );
};

export default InputComp;
