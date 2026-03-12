import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import UniversalSiteUpdater from "./components/UniversalSiteUpdater/UniversalSiteUpdater";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universal-site-updater" element={<UniversalSiteUpdater />} />
      </Routes>
    </div>
  );
}

export default App;
