import { Routes, Route } from "react-router-dom";
import ME from "./ME";
import DMReadinRecordIndex from "./Tabs/DMReadingRecord/DMReadinRecordIndex";
import MaintenanceRecordIndex from "./Tabs/MaintenanceRecord/MaintenanceRecordIndex";
import PowerUsageRecordIndex from "./Tabs/PowerUsageRecord/PowerUsageRecordIndex";
import SparePartsRecordIndex from "./Tabs/SparePartsRecord/SparePartsRecordIndex";

const MEIndex = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ME />} />
        <Route path="dmrr/*" element={<DMReadinRecordIndex />} />
        <Route
          path="mr/*"
          element={<MaintenanceRecordIndex />}
        />
        <Route path="pur/*" element={<PowerUsageRecordIndex />} />
        <Route path="spr/*" element={<SparePartsRecordIndex />} />
      </Routes>
    </div>
  );
};

export default MEIndex;
