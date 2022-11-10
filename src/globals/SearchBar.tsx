import { RiSearch2Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className=" w-full flex items-center">
      <div className="m-auto rounded-md border border-[#282828] py-2 px-[1em] flex md:flex-row flex-col gap-2 justify-between md:w-[80%] w-[90%]">
        <div className="flex gap-1 items-center bg-[#CDCDCD] text-[#282828] p-2 rounded-md md:w-[50%] w-full md:text-[14px] text-[12px]">
          <RiSearch2Line className="text-[20px]" />
          <input
            className="w-full focus:border-none bg-transparent outline-none"
            type="search"
            placeholder="search"
          />
        </div>

        <div className="flex gap-[2em]">
          <button className="rounded-md p-2 px-[1em] bg-[#CDCDCD] flex md:gap-1  justify-between items-center text-pri w-full">
            <span>Browse by</span>
            <IoIosArrowDown />
          </button>
          <button className="rounded-md p-2 px-[2em] bg-pri flex gap-1 items-center text-[#CDCDCD] ">
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
