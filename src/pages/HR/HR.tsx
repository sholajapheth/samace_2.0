import { Routes, Route } from "react-router-dom";
import HRNav from "./HRNav";
import PersonelListIndex from "./PersonelList/PersonelListIndex";
import PRIndex from "./PersonelRecord/PRIndex";

const HR = () => {
  return (
    <div className="pb-[2rem]">
      <Routes>
        <Route path={"/"} element={<HRNav />} />
        <Route path={"pl/*"} element={<PersonelListIndex />} />
        <Route path={"pr/*"} element={<PRIndex />} />
      </Routes>
    </div>
  );
};

export default HR;
