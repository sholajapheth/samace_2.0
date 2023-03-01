import { Routes, Route } from "react-router-dom";
import Add from "./Add";
import Edit from "./Edit";
import ESR from "./ESR";

const ESRIndex = () => {
  return (
    <div className="w-full lg:px-[4em] md:px-[2em] px-[1em]">
      <Routes>
        <Route path="/" element={<ESR />} />
        <Route path="add" element={<Add />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default ESRIndex;
