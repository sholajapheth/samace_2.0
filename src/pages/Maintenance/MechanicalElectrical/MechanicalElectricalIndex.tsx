import { Routes, Route } from "react-router-dom";
import MechanicalElectrical from "./MechanicalElectrical";
import DMRRIndex from "./Tabs/DMRR/DMRRIndex";

import PURIndex from './Tabs/PUR/PURIndex';
import MaintenanceRecordIndex from './Tabs/MaintenanceRecord/MaintenanceRecordIndex';
import SparepartRecordIndex from './Tabs/Sparepart Record/SparepartRecordIndex';

const MechanicalElectricalIndex = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MechanicalElectrical />} />
        <Route path="dmrr/*" element={<DMRRIndex />} />
        <Route path="pur/*" element={<PURIndex />} />
        <Route path="mr/*" element={<MaintenanceRecordIndex />} />
        <Route path="spr/*" element={<SparepartRecordIndex />} />
      </Routes>
    </div>
  );
};

export default MechanicalElectricalIndex;
