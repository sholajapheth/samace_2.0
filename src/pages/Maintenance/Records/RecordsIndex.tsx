import { Routes, Route } from "react-router-dom";
import Records from "./Records";
import ESRIndex from "./Tabs/ESR/ESRIndex";
import EORIndex from "./Tabs/EOR/EORIndex";
import ECRIndex from "./Tabs/ECR/ECRIndex";
import MaintenanceRecordIndex from "./Tabs/MaintenanceRecord/MaintenanceRecordIndex";
import MVORIndex from "./Tabs/MVOR/MVORIndex";

const PRIndex = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Records />} />
        <Route path="esr/*" element={<ESRIndex />} />
        <Route path="ecr/*" element={<ECRIndex />} />
        <Route path="mr/*" element={<MaintenanceRecordIndex />} />
        <Route path="eor/*" element={<EORIndex />} />
        <Route path="mvor/*" element={<MVORIndex />} />
      </Routes>
    </div>
  );
};

export default PRIndex;
