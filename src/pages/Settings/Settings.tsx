import { Routes, Route } from "react-router-dom";
import SettingsNav from "./SettingsNav";
import MEIndex from "./ME/MEIndex";
import PEIndex from "./PE/PEIndex";

const Settings = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<SettingsNav />} />
        {/* <Route path="add" element={<Add />} />
        <Route path="edit" element={<Edit />} /> */}
      </Routes>
    </div>
  );
};

export default Settings;
