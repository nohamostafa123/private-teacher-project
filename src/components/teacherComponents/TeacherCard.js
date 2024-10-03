import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaTransgenderAlt, FaStar, FaRegStar, FaGraduationCap, FaUserAlt, FaHome, FaHeart, FaRegHeart } from 'react-icons/fa';
import './component styles/TeacherCard.css';

const TeacherCard = ({ teacher }) => {
    const [isFavorited, setIsFavorited] = useState(false);


    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorited(savedFavorites.includes(teacher.id));
    }, [teacher.id]);

    const handleFavoriteClick = () => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

        if (isFavorited) {
           
            const updatedFavorites = savedFavorites.filter(id => id !== teacher.id);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } else {
          
            savedFavorites.push(teacher.id);
            localStorage.setItem('favorites', JSON.stringify(savedFavorites));
        }

        setIsFavorited(!isFavorited);
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const emptyStars = 5 - fullStars;

        return (
            <>
                {[...Array(fullStars)].map((_, i) => <FaStar key={i} className="text-warning " />)}
                {[...Array(emptyStars)].map((_, i) => <FaRegStar key={i} className="text-muted" />)}
            </>
        );
    };

    return (
        <div className="card shadow-sm teacher-card d-flex justify-content-center align-items-center flex-column">

            <button className="position-absolute top-0 end-0 m-2 favorite-button p-2 rounded-circle" onClick={handleFavoriteClick}>
                {isFavorited ? <FaHeart className="heart-icon filled-heart-icon" /> : <FaRegHeart className="heart-icon" />}
            </button>

            <div className="row g-0">
                <div className="col-md-12 d-flex justify-content-center align-items-center teacher-image-container">
                    <img
                        src={teacher.profilePicture || '/default-avatar.png'}
                        alt={teacher.name}
                        className="teacher-image"
                    />
                </div>
            </div>
            <div className="row g-0">
                <div div className="col-md-12">
                    <div className="card-body">
                        <h5 className="teacher-title">{teacher.jobTitle}</h5>
                        <h6 className="text-muted teacher-account"><FaUserAlt className="me-2 teacher-account" /> {teacher.name}</h6>

                        <div className="teacher-rating mb-2 teacher-rating star-icon">
                            {renderStars(teacher.rating)}
                            <span className="ms-2 rating-number">({teacher.rating})</span>
                        </div>

                        <div className="teacher-meta mb-3 ">
                            <p className="mb-1"><FaGraduationCap className="me-2" /> {teacher.subject}</p>
                            <p className="mb-1"><FaUserAlt className="me-2" /> {teacher.gender}</p>
                            <p className="mb-1"><FaMapMarkerAlt className="me-2" /> {teacher.location}</p>
                            <p className="mb-1"><FaHome className="me-2" /> {teacher.teachingMethod}</p>
                            <p className="mb-1"><FaTransgenderAlt className="me-2" /> {teacher.experience} experience</p>
                        </div>

                        <button className="mb-2 contact-button">Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherCard;
