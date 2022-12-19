import { Routes, Route } from "react-router-dom";
import SettingsNav from "./SettingsNav";
import MEIndex from "./ME/MEIndex";
import PEIndex from "./PE/PEIndex";

const Settings = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<SettingsNav />} />
        <Route path={"me/*"} element={<MEIndex />} />
        <Route path={"pe/*"} element={<PEIndex />} />
      </Routes>
    </div>
  );
};

export default Settings;
