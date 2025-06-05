import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Timer from './pages/Timer'; // Import Timer
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timer" element={<Timer />} /> {/* Add Timer route */}
      </Routes>
    </Router>
  );
}

export default App;
