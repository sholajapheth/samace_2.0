import { Routes, Route } from "react-router-dom";
import Records from './Records';
import PORIndex from './Tabs/POR/PORIndex';
import DYRIndex from './Tabs/DYR/DYRIndex';
import SSRIndex from './Tabs/SSR/SSRIndex';

const RecordsIndex = () => {
  return <div>
    <Routes>
        <Route path="/" element={<Records />} />
        <Route path="por/*" element={<PORIndex />} />
        <Route path="dyr/*" element={<DYRIndex />} />
        <Route path="ssr/*" element={<SSRIndex />} />
    </Routes>

  </div>;
};

export default RecordsIndex;
