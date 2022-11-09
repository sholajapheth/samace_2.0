import { Routes, Route } from "react-router-dom";
import HRNav from "./HRNav";
import PersonelList from "./PersonelList/PersonelList";
import PersonelRecord from "./PersonelRecord/PersonelRecord";

const HR = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<HRNav />} />
        <Route path={"pl"} element={<PersonelList />} />
        <Route path={"pr"} element={<PersonelRecord />} />
      </Routes>
    </div>
  );
};

export default HR;
