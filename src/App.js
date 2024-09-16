import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import TeacherApp from './TeacherApp.js';
import AboutApp from './AboutApp.js';
import Login from './components/registerationComponent/Login';
import StudentRegister from './components/registerationComponent/studentRegister'
import TeacherRegister from './components/registerationComponent/teacherRegister';
import ContactApp from './ContactApp.js';
import 'leaflet/dist/leaflet.css';
import $ from 'jquery';
window.$ = $;
window.jQuery = $;
function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/TeacherApp" element={<TeacherApp />} />
      <Route path="/AboutApp" element={<AboutApp />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/StudentRegister" element={<StudentRegister />} />
      <Route path="/TeacherRegister" element={<TeacherRegister />} />
      <Route path="/ContactApp" element={<ContactApp />} />
      
    </Routes>
  </Router>
   
   

    
    </>
  );
}

export default App;
