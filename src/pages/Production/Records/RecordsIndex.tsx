import { Routes, Route } from "react-router-dom";
import Records from './Records';
import PORIndex from './Tabs/POR/PORIndex';
import DYRIndex from './Tabs/DYR/DYRIndex';

const RecordsIndex = () => {
  return <div>
    <Routes>
        <Route path="/" element={<Records />} />
        <Route path="por/*" element={<PORIndex />} />
        <Route path="dyr/*" element={<DYRIndex />} />
    </Routes>

  </div>;
};

export default RecordsIndex;
