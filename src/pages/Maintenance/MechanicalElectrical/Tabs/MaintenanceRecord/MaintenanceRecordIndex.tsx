import { Routes, Route } from "react-router-dom";
import MaintenanceRecord from "./MaintenanceRecord";
import Add from "./Add";
import Edit from "./Edit";

const MaintenanceRecordIndex = () => {
  return (
    <div className="w-full lg:px-[4em] md:px-[2em] px-[1em]">
      <Routes>
        <Route path="/" element={<MaintenanceRecord />} />
        <Route path="add" element={<Add />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default MaintenanceRecordIndex;
