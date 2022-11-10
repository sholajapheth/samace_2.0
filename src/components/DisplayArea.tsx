import { Routes, Route } from "react-router-dom";
import { HR, QC, QA, Maintenance, Production } from "../pages";

const DisplayArea = () => {
  return (
    <div className="lg:pb-0 pb-[4rem]">
      <Routes>
        <Route path="hr/*" element={<HR />} />
        <Route path="qc" element={<QC />} />
        <Route path="qa" element={<QA />} />
        <Route path="maintenance" element={<Maintenance />} />
        <Route path="production" element={<Production />} />
      </Routes>
    </div>
  );
};

export default DisplayArea;
