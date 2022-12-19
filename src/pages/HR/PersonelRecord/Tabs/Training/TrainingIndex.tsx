import { Routes, Route } from "react-router-dom";
import Training from "./Training";
import Add from './Add';
import Edit from './Edit';

const TrainingIndex = () => {
  return (

    <div className="w-full lg:px-[4em] md:px-[2em] px-[1em]">
    <Routes>
      <Route path="/" element={<Training />} />
      <Route path="add" element={<Add />} />
      <Route path="edit" element={<Edit />} />
    </Routes>
    </div>
  );
};

export default TrainingIndex;
