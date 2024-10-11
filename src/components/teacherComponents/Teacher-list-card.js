import React, { useState, useEffect } from 'react';
import './component styles/card-list.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Link } from 'react-router-dom';
import {
    FaStar,
    FaRegStar,
    FaGraduationCap,
    FaUserAlt,
    FaHome,
    FaHeart,
    FaRegHeart,
    FaFlag,
    FaBriefcase,
    FaPhoneAlt
} from 'react-icons/fa';
import './component styles/TeacherCard.css';

    const TeacherListCard = ({ teacher }) => {
    const [isFavorited, setIsFavorited] = useState(false);
    const charLimit = 20;
    const navigate = useNavigate(); // Initialize useNavigate

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
        const fullStars = Math.floor(rating);
        const emptyStars = 5 - fullStars;

        return (
            <>
                {[...Array(fullStars)].map((_, i) => <FaStar key={i} className="star-icon filled" />)}
                {[...Array(emptyStars)].map((_, i) => <FaRegStar key={i} className="star-icon empty" />)}
            </>
        );
    };
 const handleNavigate = () => {
        navigate(`/teacher/${teacher._id}`); // Navigate to the teacher details page with the teacher's ID
    };
    return (
        <div className="teacher-card">
            <button className="position-absolute top-0 end-0 m-2 favorite-button p-2 rounded-circle" onClick={handleFavoriteClick}>
                {isFavorited ? <FaHeart className="heart-icon filled-heart-icon" /> : <FaRegHeart className="heart-icon" />}
            </button>

            <div className="teacher-image-container" onClick={handleNavigate} style={{ cursor: 'pointer' }}>
                <img
                       src={teacher.image || 'https://via.placeholder.com/150?text=No+Image' }
                    alt={`${teacher.first_name} ${teacher.last_name}`}
                    className="teacher-image"
                />
            </div>

            <div className="card-body">
                 <h5 className="teacher-title">
                    <>
                        <h5>{`${teacher.teacher_desc.substring(0, charLimit)}`}
                            <span className='text-muted'>...</span>
                            <Link
                                to={`/teacher/${teacher._id}`} // navigate to the teacher's profile
                                onClick={handleNavigate} style={{ cursor: 'pointer' }}
                                className="read-more-link text-muted ms-2 fw-4 fs-6 " 
                            >
                                Read More
                            </Link>
                        </h5>
                    </>
                </h5>
                <h6 className="text-muted teacher-account">
                    <FaUserAlt className="me-2 teacher-account" /> {`${teacher.first_name} ${teacher.last_name}`}
                </h6>

                <div className="teacher-rating">
                    {renderStars(teacher.rating || 0)}
                    <span className="rating-number">({teacher.rating || 0})</span>
                </div>

                <div className="teacher-meta">
                    <p className="mb-1"><FaGraduationCap className="me-2" /> Subject: {teacher.subject}</p>
                    <p className='pipe' >|</p>
                    <p className="mb-1"><FaUserAlt className="me-2" /> Gender: {teacher.gender}</p>
                    <p className='pipe' >|</p>
                    <p className="mb-1"><FaPhoneAlt className="me-2" /> Phone: {teacher.phone}</p>
                    <p className='pipe' >|</p>
                    <p className="mb-1"><FaFlag className="me-2" /> Country: {teacher.country || 'Egypt'}</p>
                    <p className='pipe' >|</p>
                    <p className="mb-1"><FaBriefcase className="me-2" /> Experience: {teacher.years_of_experience} years</p>
                    <p className='pipe' >|</p>
                    <p className="mb-1"><FaHome className="me-2" />Status: {teacher.onlineStatus} </p>

                </div>
                <div className='contact-button-container'>

                    <button className="contact-button "onClick={handleNavigate} style={{ cursor: 'pointer' }}>Contact</button>
                </div>
            </div>
        </div>
    );
};

export default TeacherListCard;
