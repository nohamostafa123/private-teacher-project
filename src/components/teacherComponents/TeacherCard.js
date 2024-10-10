import React, { useState, useEffect } from 'react';
import { FaUserAlt, FaStar, FaRegStar, FaGraduationCap, FaHeart, FaRegHeart, FaFlag, FaHome, FaBriefcase, FaPhoneAlt } from 'react-icons/fa';
import './component styles/TeacherCard.css';

const TeacherCard = ({ teacher }) => {
    const [isFavorited, setIsFavorited] = useState(false);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorited(savedFavorites.includes(teacher._id));
    }, [teacher._id]);

    const handleFavoriteClick = () => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

        if (isFavorited) {
            const updatedFavorites = savedFavorites.filter(id => id !== teacher._id);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } else {
            savedFavorites.push(teacher._id);
            localStorage.setItem('favorites', JSON.stringify(savedFavorites));
        }

        setIsFavorited(!isFavorited);
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating) || 0;
        const emptyStars = 5 - fullStars;

        return (
            <>
                {[...Array(fullStars)].map((_, i) => <FaStar key={i} className="text-warning" />)}
                {[...Array(emptyStars)].map((_, i) => <FaRegStar key={i} className="text-muted" />)}
            </>
        );
    };

    const teacherRating = teacher.rating || 0;

    return (
        <div className="card shadow-sm teacher-card d-flex justify-content-center align-items-center flex-column">
            <button className="position-absolute top-0 end-0 m-2 favorite-button p-2 rounded-circle" onClick={handleFavoriteClick}>
                {isFavorited ? <FaHeart className="heart-icon filled-heart-icon" /> : <FaRegHeart className="heart-icon" />}
            </button>

            <div className="row g-0">
                <div className="col-md-12 d-flex justify-content-center align-items-center teacher-image-container">
                    <img
                        src={teacher.profilePicture || 'https://via.placeholder.com/150?text=No+Image'}
                        alt={`${teacher.first_name} ${teacher.last_name}`}
                        className="teacher-image"
                    />
                </div>
            </div>

            <div className="row g-0">
                <div className="col-md-12">
                    <div className="card-body">
                        <h5 className="teacher-title">{teacher.teacher_desc}</h5>
                        <h6 className="text-muted teacher-account">
                            <FaUserAlt className="me-2 teacher-account" /> {`${teacher.first_name} ${teacher.last_name}`}   </h6>

                        <div className="teacher-rating mb-3">
                            {renderStars(teacherRating)}
                            <span className="rating-number">({teacherRating})</span>
                        </div>

                        <div className="teacher-meta mb-3">
                            <p className="mb-1"><FaGraduationCap className="me-2" /> Subject: {teacher.subject}</p>
                            <p className="mb-1"><FaPhoneAlt className="me-2" /> Phone: {teacher.phone}</p>
                            <p className="mb-1"><FaFlag className="me-2" /> Country: {teacher.country || 'Egypt'}</p>
                            <p className="mb-1"><FaUserAlt className="me-2" /> Gender: {teacher.gender}</p>
                            <p className="mb-1"><FaBriefcase className="me-2" /> Experience: {teacher.years_of_experience} years</p>
                            <p className="mb-1"><FaHome className="me-2" /> Status: {teacher.onlineStatus}</p>
                        </div>

                        <button className="mb-2 contact-button">Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherCard;
