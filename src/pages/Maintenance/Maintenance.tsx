import { Routes, Route } from "react-router-dom";
import MaintenanceNav from "./MaintenanceNav";
import EquipementListIndex from "./EquipementList/EquipementListIndex";
import PRIndex from "./Records/RecordsIndex";

const Maintenance = () => {
  return (
    <div className="pb-[2rem]">
      <Routes>
        <Route path={"/"} element={<MaintenanceNav />} />
        <Route path={"el/*"} element={<EquipementListIndex />} />
        <Route path={"records/*"} element={<PRIndex />} />
      </Routes>
    </div>
  );
};

export default Maintenance;
