import { Routes, Route } from "react-router-dom";

import DYR from "./DYR";
import Add from "./Add";
import Edit from "./Edit";

const DYRIndex = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DYR />} />
        <Route path="add" element={<Add />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default DYRIndex;
