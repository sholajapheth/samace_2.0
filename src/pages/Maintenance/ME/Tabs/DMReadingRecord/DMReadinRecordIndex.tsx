import { Routes, Route } from "react-router-dom";
import DMReadingRecord from "./DMReadingRecord";
import Add from "./Add";
import Edit from "./Edit";

const DMReadinRecordIndex = () => {
  return (
    <div className="w-full lg:px-[4em] md:px-[2em] px-[1em]">
      <Routes>
        <Route path="/" element={<DMReadingRecord />} />
        <Route path="add" element={<Add />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default DMReadinRecordIndex;
