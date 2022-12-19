import { Routes, Route } from "react-router-dom";
import DMRR from "./DMRR";
import Add from "./Add";
import Edit from "./Edit";

const DMRRIndex = () => {
  return (
    <div className="w-full lg:px-[4em] md:px-[2em] px-[1em]">
      <Routes>
        <Route path="/" element={<DMRR />} />
        <Route path="add" element={<Add />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default DMRRIndex;
