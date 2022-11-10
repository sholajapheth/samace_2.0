import { Routes, Route } from "react-router-dom";
import { Landing, Login} from "./pages";
import Dashboard from "./pages/Dashboard/Dashboard";
import { NoMatch } from "./globals";

const App = () => {
  return (
    <div className="font-roboto scrollbar-style">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default App;
