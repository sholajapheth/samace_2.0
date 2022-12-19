import { Routes, Route } from "react-router-dom";
import POR from "./POR";
import Add from "./Add";
import Edit from "./Edit";

const PORIndex = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<POR />} />
        <Route path="add" element={<Add />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default PORIndex;
