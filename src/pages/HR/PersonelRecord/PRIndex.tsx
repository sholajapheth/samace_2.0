import { Routes, Route } from "react-router-dom";
import PersonelRecord from "./PersonelRecord";
import TrainingIndex from "./Tabs/Training/TrainingIndex";
import AssessmentIndex from "./Tabs/Assessment/AssessmentIndex";
import PayIndex from "./Tabs/Pay/PayIndex";
import DisciplinaryIndex from './Tabs/Disciplinary/DisciplinaryIndex';
import MedicalIndex from './Tabs/Medical/MedicalIndex';

const PRIndex = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PersonelRecord />} />
        <Route path="training/*" element={<TrainingIndex />} />
        <Route path="pay/*" element={<PayIndex />} />
        <Route path="disciplinary/*" element={<DisciplinaryIndex />} />
        <Route path="assessment/*" element={<AssessmentIndex />} />
        <Route path="medical/*" element={<MedicalIndex />} />
      </Routes>
    </div>
  );
};

export default PRIndex;
