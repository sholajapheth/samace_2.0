import { Routes, Route } from "react-router-dom";
import Add from "./Add";
import Edit from "./Edit";
import ME from './ME';

const MEIndex = () => {
  return (
    <div className="w-full lg:px-[4em] md:px-[2em] ">
      <Routes>
        <Route path="/" element={<ME />} />
        <Route path="add" element={<Add />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default MEIndex;
