import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Timer from "./pages/Timer"; // Import Timer
import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/timer" element={<Timer />} /> {/* Add Timer route */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
