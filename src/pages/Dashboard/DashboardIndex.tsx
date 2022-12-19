import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

const DashboardIndex = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default DashboardIndex;
