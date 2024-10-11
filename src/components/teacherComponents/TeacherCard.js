import React, { useState, useEffect } from 'react';
import { FaUserAlt, FaStar, FaRegStar, FaGraduationCap, FaHeart, FaRegHeart, FaFlag, FaHome, FaBriefcase, FaPhoneAlt, FaCamera } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import './component styles/TeacherCard.css';

const TeacherCard = ({ teacher }) => {
    const [isFavorited, setIsFavorited] = useState(false);
    const [image, setImage] = useState(teacher.image || 'https://via.placeholder.com/150?text=No+Image');
    const charLimit = 10;
    const navigate = useNavigate();

    useEffect(() => {
        // Load saved favorites from localStorage
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorited(savedFavorites.includes(teacher._id));

        // Load saved image from localStorage if available
        const savedImage = localStorage.getItem(`teacherImage_${teacher._id}`);
        if (savedImage) {
            setImage(savedImage);
        }

        // Save essential teacher data in localStorage (only if different)
        const selectedTeacherData = {
            id: teacher._id,
            firstName: teacher.first_name,
            lastName: teacher.last_name,
            subject: teacher.subject,
        };

        const existingSelection = localStorage.getItem('selectedTeacher');
        if (!existingSelection || JSON.parse(existingSelection).id !== selectedTeacherData.id) {
            localStorage.setItem('selectedTeacher', JSON.stringify(selectedTeacherData));
        }
    }, [teacher]);

    const handleFavoriteClick = () => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const updatedFavorites = isFavorited
            ? savedFavorites.filter(id => id !== teacher._id)
            : [...savedFavorites, teacher._id];

        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setIsFavorited(!isFavorited); // Toggle favorite state
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

    const handleNavigate = () => {
        navigate(`/teacher/${teacher._id}`); // Navigate to the teacher details page
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
                // Save the image in localStorage for persistence
                localStorage.setItem(`teacherImage_${teacher._id}`, reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="card shadow-sm teacher-card d-flex justify-content-center align-items-center flex-column">
            <button className="position-absolute top-0 end-0 m-2 favorite-button p-2 rounded-circle" onClick={handleFavoriteClick}>
                {isFavorited ? <FaHeart className="heart-icon filled-heart-icon" /> : <FaRegHeart className="heart-icon" />}
            </button>

            <div className="row g-0">
                <div className="col-md-12 d-flex justify-content-center align-items-center teacher-image-container" style={{ cursor: 'pointer' }}>
                    <img
                        src={image}
                        alt={`${teacher.first_name} ${teacher.last_name}`}
                        className="teacher-image"
                        onClick={handleNavigate}
                    />
                    <label className="camera-icon-container">
                        <FaCamera className="camera-icon" />
                        <input type="file" style={{ display: 'none' }} onChange={handleImageUpload} />
                    </label>
                </div>
            </div>

            <div className="row g-0">
                <div className="col-md-12">
                    <div className="card-body">
                        <h5 className="teacher-title">
                            <h5>{`${teacher.teacher_desc.substring(0, charLimit)}`}
                                <span className='text-muted'>...</span>
                                <Link
                                    to={`/teacher/${teacher._id}`}
                                    onClick={handleNavigate} style={{ cursor: 'pointer' }}
                                    className="read-more-link text-muted ms-2 fw-4 fs-6"
                                >
                                    Read More
                                </Link>
                            </h5>
                        </h5>
                        <h6 className="text-muted teacher-account">
                            <FaUserAlt className="me-2 teacher-account" /> {`${teacher.first_name} ${teacher.last_name}`}
                        </h6>

                        <div className="teacher-rating mb-3">
                            {renderStars(teacher.rating || 0)}
                            <span className="rating-number">({teacher.rating || 0})</span>
                        </div>

                        <div className="teacher-meta mb-3">
                            <p className="mb-1"><FaGraduationCap className="me-2" /> Subject: {teacher.subject}</p>
                            <p className="mb-1"><FaPhoneAlt className="me-2" /> Phone: {teacher.phone}</p>
                            <p className="mb-1"><FaFlag className="me-2" /> Country: {teacher.country || 'Egypt'}</p>
                            <p className="mb-1"><FaUserAlt className="me-2" /> Gender: {teacher.gender}</p>
                            <p className="mb-1"><FaBriefcase className="me-2" /> Experience: {teacher.years_of_experience} years</p>
                            <p className="mb-1"><FaHome className="me-2" /> Status: {teacher.onlineStatus}</p>
                        </div>

                        <button className="mb-2 contact-button" onClick={handleNavigate} style={{ cursor: 'pointer' }}>Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherCard;
