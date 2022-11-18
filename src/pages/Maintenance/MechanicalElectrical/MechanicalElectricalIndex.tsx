import { Routes, Route } from "react-router-dom";
import MechanicalElectrical from "./MechanicalElectrical";
import DMRRIndex from "./Tabs/DMRR/DMRRIndex";
// import TrainingIndex from "./Tabs/Training/TrainingIndex";
// import DMRRIndex from './Tabs/DMRR/DMRRIndex';
// import PayIndex from "./Tabs/Pay/PayIndex";
// import DisciplinaryIndex from "./Tabs/Disciplinary/DisciplinaryIndex";
// import MedicalIndex from "./Tabs/Medical/MedicalIndex";

const MechanicalElectricalIndex = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MechanicalElectrical />} />
        <Route path="dmrr/*" element={<DMRRIndex />} />
        {/* <Route path="pay/*" element={<PayIndex />} />
        <Route path="disciplinary/*" element={<DisciplinaryIndex />} />
        <Route path="assessment/*" element={<AssessmentIndex />} />
        <Route path="medical/*" element={<MedicalIndex />} /> */}
      </Routes>
    </div>
  );
};

export default MechanicalElectricalIndex;
