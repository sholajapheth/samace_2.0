import { Routes, Route } from "react-router-dom";
import SettingsNav from "./SettingsNav";
import ME from "./ME/ME";
import PE from "./PE/PE";

const Settings = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<SettingsNav />} />
        <Route path={"ict/*"} element={<ME />} />
        <Route path={"me/*"} element={<PE />} />
      </Routes>
    </div>
  );
};

export default Settings;
