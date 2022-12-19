import { Routes, Route } from "react-router-dom";
import MaintenanceNav from "./MaintenanceNav";
import ICT from "./ICT/ICT";
import MechanicalElectricalIndex from "./MechanicalElectrical/MechanicalElectricalIndex";
import Facility from "./Facility/Facility";

const Maintenance = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<MaintenanceNav />} />
        <Route path={"me/*"} element={<MechanicalElectricalIndex />} />
        <Route path={"ict/*"} element={<ICT />} />
        <Route path={"facility/*"} element={<Facility />} />
      </Routes>
    </div>
  );
};

export default Maintenance;
