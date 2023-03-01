import { Routes, Route } from "react-router-dom";
import ECR from "./ECR";
import Add from "./Add";
import Edit from "./Edit";

const ECRIndex = () => {
  return (
    <div className="w-full lg:px-[4em] md:px-[2em] px-[1em]">
      <Routes>
        <Route path="/" element={<ECR />} />
        <Route path="add" element={<Add />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default ECRIndex;
