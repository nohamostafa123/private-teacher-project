
import './App.css';
import React, { useState } from 'react';
import AdminDashboard from './components/admindashComponent/AdminDashboard';

function AdminDashBoard() {

    const initialCategories = [
        { name: 'Arabic', teacherCount: 66, imgSrc: './images/عربي.jpeg', delay: '0.15s' },
        { name: 'Biology', teacherCount: 90, imgSrc: './images/احياء.jpeg', delay: '0.35s' },
        { name: 'Chemistry', teacherCount: 70, imgSrc: './images/كيمياء.jpeg', delay: '0.15s' },
        { name: 'English', teacherCount: 80, imgSrc: './images/انجليزي.png', delay: '0.75s' },
        { name: 'French', teacherCount: 50, imgSrc: './images/فرنساوى.jpeg', delay: '0.15s' },
        { name: 'Geography', teacherCount: 55, imgSrc: './images/جغرافيا.jpeg', delay: '0.15s' },
        { name: 'History', teacherCount: 40, imgSrc: './images/تاريخ.jpeg', delay: '0.15s' },
        { name: 'Math', teacherCount: 70, imgSrc: './images/رياضة.jpeg', delay: '0.15s' },
        { name: 'Philosophy', teacherCount: 60, imgSrc: './images/فلسفه.jpeg', delay: '0.15s' },
        { name: 'Physics', teacherCount: 90, imgSrc: './images/فزيا.jpeg', delay: '0.15s' },
        { name: 'Psychology', teacherCount: 15, imgSrc: './images/علم النفس.jpeg', delay: '0.15s' },
        { name: 'Science', teacherCount: 50, imgSrc: './images/علوم.jpeg', delay: '0.15s' },
      ];
    
      const [categories, setCategories] = useState(() => {
        // Load categories from local storage if available, else use initial categories
        const savedCategories = localStorage.getItem('categories');
        return savedCategories ? JSON.parse(savedCategories) : initialCategories;
      });

   
  return (
    <>


<AdminDashboard categories={categories} setCategories={setCategories} />

    </>
  );
}

export default AdminDashBoard;
