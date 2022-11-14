import { Routes, Route } from "react-router-dom";
import PersonelRecord from "./PersonelRecord";
import { Pay, Disciplinary, Assessment, Medical } from "./Tabs";
import TrainingIndex from "./Tabs/Training/TrainingIndex";

const PRIndex = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PersonelRecord />} />
        <Route path="training/*" element={<TrainingIndex />} />
        <Route path="pay" element={<Pay />} />
        <Route path="disciplinary" element={<Disciplinary />} />
        <Route path="assessment" element={<Assessment />} />
        <Route path="medical" element={<Medical />} />
      </Routes>
    </div>
  );
};

export default PRIndex;
