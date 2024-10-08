import React, { useState, useEffect } from 'react';
import './component styles/TeachersSection.css';
import TeacherCard from './TeacherCard';
import { useSelector } from 'react-redux';
import TeacherListCard from './Teacher-list-card';


const TeachersSection = ({ currentPage, itemsPerPage }) => {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const viewType = useSelector(state => state.layout.viewType);
    const searchTerm = useSelector((state) => state.filters.search);

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/teachers/list');
                const data = await response.json();

                if (Array.isArray(data)) {
                    setTeachers(data);
                } else if (data.teachers && Array.isArray(data.teachers)) {
                    setTeachers(data.teachers);
                } else {
                    console.error("Unexpected response format:", data);
                    setError('Unexpected response format');
                }
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch teacher data');
                setLoading(false);
            }
        };

        fetchTeachers();
    }, [currentPage, itemsPerPage]);

    const { level = [], rating, specialization = [], language } = useSelector((state) => state.filters);

    const filteredTeachers = teachers.filter((teacher) => {
        return (
            (level.length === 0 || level.includes(teacher.level)) &&
            (rating ? teacher.rating >= rating : true) &&
            (specialization.length > 0 ? specialization.includes(teacher.subject) : true) &&
            (language ? teacher.language.includes(language) : true) &&
            (searchTerm ?
                teacher.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                teacher.last_name.toLowerCase().includes(searchTerm.toLowerCase()) :
                true
            )
        );
    });

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    const indexOfLastTeacher = currentPage * itemsPerPage;
    const indexOfFirstTeacher = indexOfLastTeacher - itemsPerPage;

    const currentTeachers = filteredTeachers.slice(indexOfFirstTeacher, indexOfLastTeacher);

    return (
        <div className="teachers-section container">
            <div className="row">
                <div className={viewType === 'grid' ? 'grid-layout' : 'list-layout'}>
                    {currentTeachers.map((teacher) => (
                        <div key={teacher._id}>
                            {viewType === 'grid' ? (
                                <TeacherCard teacher={teacher} />
                            ) : (
                                <TeacherListCard teacher={teacher} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeachersSection;
