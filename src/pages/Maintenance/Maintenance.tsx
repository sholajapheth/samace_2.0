import { Routes, Route } from "react-router-dom";
import MaintenanceNav from './MaintenanceNav';
import ICT from './ICT/ICT';
import ME from './ME/ME';
import Facility from './Facility/Facility';

const Maintenance = () => {
  return (
    <div>
  
      <Routes>
        <Route path={"/"} element={<MaintenanceNav />} />
        <Route path={"ict/*"} element={<ICT />} />
        <Route path={"me/*"} element={<ME />} />
        <Route path={"facility/*"} element={<Facility />} />
      </Routes>
    </div>
  );
};

export default Maintenance;
