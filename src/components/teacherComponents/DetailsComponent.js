import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaUserAlt, FaPhoneAlt,FaEye, FaFlag, FaGenderless, FaCalendarAlt, FaBriefcase, FaUsers, FaStar, FaClock } from 'react-icons/fa';
import './component styles/TeacherDetails.css';

const TeacherDetails = () => {
    const { id } = useParams();
    const [teacher, setTeacher] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('info'); // To control tab switching
    const [views, setViews] = useState(0); // State for storing views
    const [activeProfileTab, setActiveProfileTab] = useState('about'); // New tab control


    // Fetch teacher details
    useEffect(() => {
        fetch(`http://localhost:5000/api/teachers/list/${id}`)
            .then(response => response.json())
            .then(data => {
                setTeacher(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching teacher details:', error);
                setLoading(false);
            });
    }, [id]);
//handle views
    useEffect(() => {
        const viewsKey = `teacher_${id}_views`;
        let storedViews = localStorage.getItem(viewsKey);
        storedViews = storedViews ? parseInt(storedViews) : 0;
    
        // Use a slight delay to ensure the effect runs only once
        setTimeout(() => {
            const newViews = storedViews + 1;
            setViews(newViews);
            localStorage.setItem(viewsKey, newViews);
        }, 0);
    }, [id]);
    
    if (loading) {
        return <p>Loading teacher details...</p>;
    }

    if (!teacher) {
        return <p>No teacher details found</p>;
    }

    return (
        <>
        <div className="big">
        <div className="myTeacherHeader">
        <div className="teacher-details-container">
           
            {/* Tabs for Teacher Info */}
            <div className="teacher-info">
                <div className="tabs-container">
                    <span className={`tab-item ${activeTab === 'info' ? 'active' : ''}`} onClick={() => setActiveTab('info')}>
                        المعلومات
                    </span>
                    <span className={`tab-item ${activeTab === 'country' ? 'active' : ''}`} onClick={() => setActiveTab('country')}>
                        الدولة والمدينه
                    </span>
                    <span className={`tab-item ${activeTab === 'experience' ? 'active' : ''}`} onClick={() => setActiveTab('experience')}>
                        مجالات الخبره
                    </span>
                    <span className={`tab-item ${activeTab === 'certifications' ? 'active' : ''}`} onClick={() => setActiveTab('certifications')}>
                        الشهادات
                    </span>
                    <span className={`tab-item ${activeTab === 'sub' ? 'active' : ''}`} onClick={() => setActiveTab('sub')}>
                        التخصص
                    </span>
                    <span className={`tab-item ${activeTab === 'links' ? 'active' : ''}`} onClick={() => setActiveTab('links')}>
                        الروابط
                    </span>
                </div>

                {/* Information Tab */}
                {activeTab === 'info' && (
                    <div className="teacher-metaa two-columns">
                        <div className="teacher-meta-item">
                            <FaUserAlt className="icon" /> الاسم: {`${teacher.first_name} ${teacher.last_name}`}
                        </div>
                        <div className="teacher-meta-item">
                            <FaPhoneAlt className="icon" /> {teacher.phone} :الهاتف 
                        </div>
                        <div className="teacher-meta-item">
                            <FaFlag className="icon" /> بلد الإقامة: {teacher.country || 'Egypt'}
                        </div>
                        <div className="teacher-meta-item">
                            <FaCalendarAlt className="icon" />تاريخ الميلاد :  {teacher.date_of_birth || 'N/A'}
                        </div>
                        <div className="teacher-meta-item">
                            <FaBriefcase className="icon" /> سنوات الخبرة: {teacher.years_of_experience || 'N/A'}
                        </div>
                        <div className="teacher-meta-item">
                            <FaGenderless className="icon" /> النوع : {teacher.gender || 'N/A'}
                        </div>
                    </div>
                )}

                {/* Other Tabs */}
                {activeTab === 'country' && (
                    <div className="teacher-meta">
                        <h2>الدولة والمدينه</h2>
                        <p>{teacher.country || 'No details available'}</p>
                    </div>
                )}
                {activeTab === 'sub' && (
                    <div className="teacher-meta">
                        <h3>التخصص</h3>
                        <p>{teacher.subject || 'No details available'}</p>
                    </div>
                )}
                {activeTab === 'experience' && (
                    <div className="teacher-meta">
                    <h3> مجالات الخبرة</h3>
                        <p>  {teacher.experience || 'No details available'}</p>
                    </div>
                )}
                {activeTab === 'certifications' && (
                    <div className="teacher-meta">
                    <h3>الشهادات</h3>
                        <p> {teacher.certifications || 'No details available'}</p>
                    </div>
                )}
                {activeTab === 'links' && (
                    <div className="teacher-meta">
                        <h3>الروابط</h3>
                        <div className="teacher-meta-item">
                            <FaPhoneAlt className="icon" /> الهاتف: {teacher.phone}
                        </div>
                    </div>
                )}
            </div>

            <div className="teacher-image-container">
                <img
                    src={teacher.image || 'https://via.placeholder.com/250?text=No+Image'}
                    alt={`${teacher.first_name} ${teacher.last_name}`}
                    className="teacher-imagee"
                />
            </div>
        </div>{/* Stats Section */}
        <div className="teacher-stats">
            <div className="stat-item">
                <FaUserAlt className="icon" />
                <span>التقييم</span>
                <span className="stat-value">{teacher.rating || 'N/A'}</span>
            </div>
            <div className="stat-item">
                <FaBriefcase className="icon" />
                <span>سنوات الخبرة</span>
                <span className="stat-value">{teacher.years_of_experience || 'N/A'}</span>
            </div>
            <div className="stat-item">
                <FaEye className="icon" />
                <span>المشاهدات</span>
                <span className="stat-value">{views}</span> {/* Display dynamic views */}
            </div>
        </div>


         {/* New Profile Tab Section */}
         <div className="profile-tab-container ">
         <span className={`profile-tab-item ${activeProfileTab === 'about' ? 'active' : ''}`} onClick={() => setActiveProfileTab('about')}>
             نبذة عني
         </span>
         <span className={`profile-tab-item ${activeProfileTab === 'options' ? 'active' : ''}`} onClick={() => setActiveProfileTab('options')}>
             الخيارات
         </span>
     </div>

     {/* Content for the new Profile Tabs */}
     {activeProfileTab === 'about' && (
         <div className="profile-content">
             <p>{teacher.teacher_desc || 'no description'}</p>
         </div>
     )}
     {activeProfileTab === 'options' && (
         <div className="profile-content">
         <p>{teacher.teacher_desc || 'مهندس يوسف امجد مدرس رياضة إبتدائي و اعدادي'}</p>
         </div>
     )}
     </div>
     </div>
        </>
    );
};

export default TeacherDetails;
