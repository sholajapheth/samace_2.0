import { Routes, Route } from "react-router-dom";

import SSR from "./SSR";
import Add from "./Add";
import Edit from "./Edit";

const SSRIndex = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SSR />} />
        <Route path="add" element={<Add />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default SSRIndex;
