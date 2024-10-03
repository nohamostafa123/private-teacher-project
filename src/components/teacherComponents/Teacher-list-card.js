import React, { useState, useEffect } from 'react';
import './component styles/card-list.css'
import {
    FaMapMarkerAlt,
    FaTransgenderAlt,
    FaStar,
    FaRegStar,
    FaGraduationCap,
    FaUserAlt,
    FaHome,
    FaHeart,
    FaRegHeart
} from 'react-icons/fa';
import './component styles/TeacherCard.css';

const TeacherListCard = ({ teacher }) => {
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
                {[...Array(fullStars)].map((_, i) => <FaStar key={i} className="star-icon filled" />)}
                {[...Array(emptyStars)].map((_, i) => <FaRegStar key={i} className="star-icon empty" />)}
            </>
        );
    };

    return (
        <div className="teacher-card">
            <button className="favorite-button" onClick={handleFavoriteClick}>
                {isFavorited ? <FaHeart className="heart-icon filled-heart-icon" /> : <FaRegHeart className="heart-icon" />}
            </button>

            <div className="teacher-image-container">
                <img
                    src={teacher.profilePicture || '/default-avatar.png'}
                    alt={teacher.name}
                    className="teacher-image"
                />
            </div>

            <div className="card-body">
                <h5 className="teacher-title">{teacher.jobTitle}</h5>
                <h6 className=" text-muted teacher-account"><FaUserAlt className="me-2 teacher-account" /> {teacher.name}</h6>
                <div className="teacher-rating">
                    {renderStars(teacher.rating)}
                    <span className="rating-number">({teacher.rating})</span>
                </div>

                <div className="teacher-meta">
                    <p><FaGraduationCap /> {teacher.subject}</p>
                    <p><FaUserAlt /> {teacher.gender}</p>
                    <p><FaMapMarkerAlt /> {teacher.location}</p>
                    <p><FaHome /> {teacher.teachingMethod}</p>
                    <p><FaTransgenderAlt /> {teacher.experience} exp</p>
                </div>

                <button className="contact-button">Contact</button>
            </div>
        </div>
    );
};

export default TeacherListCard;
