import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import TeacherApp from './TeacherApp.js'
function App() {
  return (
    <>
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<TeacherApp />} />
      </Routes>
    </div>
  </Router>

    
    </>
  );
}

export default App;
