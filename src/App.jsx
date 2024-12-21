import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectLinks from "./components/ProjectLinks";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live" element={<ProjectLinks type="live" />} />
        <Route path="/code" element={<ProjectLinks type="code" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
