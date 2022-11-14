type inputType = {
  name: string;
  type: string;
  placeholder?: string;
  optionList?: string[];
};

const InputComp = ({ name, type, placeholder, optionList }: inputType) => {
  return (
    <div className="flex md:flex-row flex-col gap-2   md:justify-between md:items-center w-full my-[2em] ">
      <label className="text-white text-[16px] font-[700] ">{name}</label>

      {type === "drop" ? (
        <select
          className="bg-white rounded-md text-pri text-[16px] p-2 
        focus:outline-none md:w-[18em] w-full"
          id={name}
        >
          {optionList?.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input
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
