import { Routes, Route } from "react-router-dom";
import Medical from "./Medical";
import Add from "./Add";
import Edit from "./Edit";

const MedicalIndex = () => {
  return (
    <div className="w-full lg:px-[4em] md:px-[2em] px-[1em]">
      <Routes>
        <Route path="/" element={<Medical />} />
        <Route path="add" element={<Add />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default MedicalIndex;
