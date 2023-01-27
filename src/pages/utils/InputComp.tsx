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

  const {
    inputValue,
    setInputValue,
    selectedCountry,
    setSelectedCountry,
    selectedState,
    setSelectedState,
    selectedCountry_1,
    setSelectedCountry_1,
    selectedState_1,
    setSelectedState_1,
  } = useContext(DashboardContext);
  const [value, setValue] = useState("");

  const handleChanges = (e: any) => {
    if (name === "phone" || name.toLowerCase() === "id") {
      if (e.target.value.length > 11) {
        return;
      }
    }
    setValue(e.target.value);

    setInputValue({ ...inputValue, [camelize(name)]: e.target.value });
  };

  const handleSpecialDrop = (e: any) => {
    setValue(e.target.value);
    setInputValue({ ...inputValue, [camelize(name)]: e.target.value });
    if (dropType === "country") {
      setSelectedCountry(() => e.target.value);
    }
    if (dropType === "state") {
      setSelectedState(() => e.target.value);
    }
  };

  const handleSpecialDrop_1 = (e: any) => {
    setValue(e.target.value);
    setInputValue({ ...inputValue, [camelize(name)]: e.target.value });
    if (dropType === "country") {
      setSelectedCountry_1(() => e.target.value);
    }
    if (dropType === "state") {
      setSelectedState_1(() => e.target.value);
    }
  };

  return (
    <div className="flex md:flex-row flex-col gap-2   md:justify-between md:items-center w-full my-[2em] ">
      <label className="text-white text-[16px] font-[700] ">
        {name.toUpperCase()}
      </label>

      {type === "specialDrop" && section ? (
        <select
          value={value}
          onChange={handleSpecialDrop_1}
          className="bg-white rounded-md text-pri text-[16px]  
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
            ? selectedCountry_1 === "Nigeria"
              ? states.map((state, index) => (
                  <option key={index} value={state.name}>
                    {state.name.toUpperCase()}
                  </option>
                ))
              : null
            : dropType === "city"
            ? states
                .filter((state) => state.name === selectedState_1)
                .map((state) =>
                  state.lgas.map((lga, index) => (
                    <option key={index} value={lga}>
                      {lga.toUpperCase()}
                    </option>
                  ))
                )
            : null}
        </select>
      ) : type === "specialDrop" ? (
        <select
          value={value}
          onChange={handleSpecialDrop}
          className="bg-white rounded-md text-pri text-[16px]  
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
      ) : // Special Drop for country, state and city
      type === "drop" ? (
        <select
          value={value}
          onChange={handleChanges}
          className="bg-white rounded-md text-pri text-[16px]  
        focus:outline-none md:w-[18em] w-full"
          id={name}
        >
          {optionList?.map((option, index) => (
            <option key={index} value={option}>
              {option.toUpperCase()}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          value={value}
          onChange={handleChanges}
          placeholder={placeholder?.toUpperCase()}
          className="  bg-white rounded-md text-pri text-[16px] p-2 
        focus:outline-none md:w-[18em] w-full h-[10em]"
        />
      ) : type === "number" ? (
        <input
          value={value}
          style={{ appearance: "none", WebkitAppearance: "none" }}
          type="number"
          onChange={handleChanges}
          placeholder={placeholder?.toUpperCase()}
          className="  bg-white rounded-md text-pri text-[16px] p-2 
        focus:outline-none md:w-[18em] w-full"
        />
      ) : (
        <input
          value={value}
          onChange={handleChanges}
          type={type}
          placeholder={placeholder?.toUpperCase()}
          className="  bg-white rounded-md text-pri text-[16px] p-2 
        focus:outline-none md:w-[18em] w-full"
        />
      )}
    </div>
  );
};

export default InputComp;
