// src/ProfilePage.js
import React, { useEffect, useState } from 'react';
import { Camera } from 'lucide-react';
import axios from 'axios';
import './ProfilePage.css';

const Profile = () => {
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // To store the uploaded image preview

  useEffect(() => {
    axios.get('http://localhost:5000/api/teachers/list')
      .then(response => {
        const teacherData = response.data[0]; // Assuming the first teacher
        setTeacher(teacherData);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  // Handle file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL); // Update the preview image
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading profile: {error.message}</p>;

  return (
    teacher && (
      <div className="bg-profile"> 
        <div className="profile-page">
          <div className="profile-header">
            <div className="avatar-container">
              {/* Image (either selectedImage or default from teacher data) */}
              <img src={selectedImage || teacher.image} alt="Profile Avatar" className="profile-avatar" />
              
              {/* Camera icon in bottom right */}
              <label className="camera-icon">
                <Camera className="w-5 h-5" />
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageChange} 
                  style={{ display: 'none' }} 
                />
              </label>
            </div>
            
            <h1>{teacher.first_name} {teacher.last_name}</h1>
            <p>{teacher.country}</p>
            <p className={`online-status ${teacher.onlineStatus === 'online' ? 'online' : 'offline'}`}>
              {teacher.onlineStatus === 'online' ? '🟢 Online' : '⚪ Offline'}
            </p>
          </div>
          <div className="profile-details">
            <p className="inline-info"><strong>About Me: </strong>{teacher.teacher_desc}</p>
            <p className="inline-info"><strong>Contact: </strong>{teacher.phone}</p>
            <p className="inline-info"><strong>Subject: </strong>{teacher.subject_id}</p>
            <p className="inline-info"><strong>Experience: </strong>{teacher.years_of_experience} years</p>
            <p className="inline-info"><strong>Rating: </strong>{teacher.rating}</p>
            <p className="inline-info"><strong>Gender: </strong>{teacher.gender}</p>
          </div>
        </div>
      </div>   
    )
  );
};

export default Profile;
