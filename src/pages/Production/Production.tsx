import { Routes, Route } from "react-router-dom";
import Diary from "./Diary/Diary";
import ProductionNav from "./ProductionNav";
import SOPS from "./SOPS/SOPS";
import RecordsIndex from './Records/RecordsIndex';

const Production = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<ProductionNav />} />
        <Route path={"records/*"} element={<RecordsIndex />} />
        <Route path={"sops/*"} element={<SOPS />} />
        <Route path={"diary/*"} element={<Diary />} />
      </Routes>
    </div>
  );
};

export default Production;
