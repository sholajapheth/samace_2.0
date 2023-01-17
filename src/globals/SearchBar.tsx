import { useContext, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { DashboardContext } from "../pages/Dashboard/Dashboard";
import { camelize } from "../components/global_utils/helper_fuctions";

type SearchBarProps = {
  searchData?: any;
  header_data?: any[];
  set_body_data?: any;
  default_data?: any[];
};

const SearchBar = ({
  searchData,
  header_data,
  set_body_data,
  default_data,
}: SearchBarProps) => {
  const [search, set_search] = useState("name");
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const { searchDatas } = useContext(DashboardContext);

  const searchData_1: any = searchDatas?.searchData;
  const header_data_1: any = searchDatas?.header_data;
  const set_body_data_1: any = searchDatas?.set_body_data;
  const default_data_1: any = searchDatas?.default_data;

  const handleSelectedData = (event: any) => {
    set_search((search) => (search = camelize(event.target.value)));
    set_body_data(default_data);
    setWordEntered("");
  };

  const handleFilter = (event: any) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter: any = searchData?.filter((value: any) => {
      return value?.properties[search]
        ?.toLowerCase()
        .includes(searchWord.toLowerCase());
    });
    console.log("Searchs: ", filteredData);

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const handleFilterMainData = () => {
    set_body_data(filteredData);
    setFilteredData([]);
    // setWordEntered("");
    console.log("fd: ", filteredData);
    console.log("bd: ", filteredData);
  };

  return (
    <div className=" w-full flex items-center">
      <div className="md:w-[80%] w-[90%] m-auto">
        <div className="m-auto rounded-md border border-[#282828] py-2 px-[1em] flex md:flex-row flex-col gap-2 justify-between w-full ">
          <div className="flex gap-1 items-center bg-[#CDCDCD] text-[#282828] p-2 rounded-md md:w-[50%] w-full md:text-[14px] text-[12px]">
            {wordEntered?.length === 0 && (
              <RiSearch2Line className="text-[20px]" />
            )}
            <input
              className="w-full ring-0 border-0 focus:border-none bg-transparent outline-0"
              type="search"
              placeholder="search"
              onChange={handleFilter}
              value={wordEntered}
            />
          </div>

          <div className="flex gap-[2em]">
            <div className="rounded-md p-2 px-[1em]  bg-[#CDCDCD]  text-pri w-full flex items-center">
              <select
                placeholder="Browse by"
                onChange={handleSelectedData}
                style={{ appearance: "none" }}
                className="w-full focus:border-none bg-transparent outline-0 ring-0 border-0 outline-none"
              >
                {header_data
                  ?.filter((item) => item.name !== "ID")
                  .map((item: any, index: number) => (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  ))}
              </select>
              <BiChevronDown className="text-[16px]" />
            </div>
            <button
              onClick={handleFilterMainData}
              className="rounded-md p-2 px-[2em] bg-pri flex gap-1 items-center text-[#CDCDCD] "
            >
              <span>
              
                Search
              </span>
            </button>
          </div>
        </div>
    
        {filteredData?.length !== 0 && (
          <div className="shadow-md py-4 overflow-scroll scrollbar-hide  backdrop-blur-md  text-black lg:w-[33%] md:w-[50%] w-full h-[10em] absolute z-[550] mt-1">
            {filteredData?.map((item: any, index: number) => (
              <button
                onClick={handleFilterMainData}
                className="w-full p-4 border "
                key={index}
              >
                {item.properties[search]}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
