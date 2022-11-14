import { Routes, Route } from "react-router-dom";
import HRNav from "./HRNav";
import PersonelRecord from "./PersonelRecord/PersonelRecord";
import PersonelListIndex from "./PersonelList/PersonelListIndex";

const HR = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<HRNav />} />
        <Route path={"pl/*"} element={<PersonelListIndex />} />
        <Route path={"pr"} element={<PersonelRecord />} />
      </Routes>
    </div>
  );
};

export default HR;
