import { Routes, Route } from "react-router-dom";
import PUR from "./PUR";
import Add from "./Add";
import Edit from "./Edit";

const PURIndex = () => {
  return (
    <div className="w-full lg:px-[4em] md:px-[2em] px-[1em]">
      <Routes>
        <Route path="/" element={<PUR />} />
        <Route path="add" element={<Add />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default PURIndex;
