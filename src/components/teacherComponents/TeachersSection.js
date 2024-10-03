import React, { useState, useEffect } from 'react';
import './component styles/TeachersSection.css';
import TeacherCard from './TeacherCard';
import { useSelector } from 'react-redux';
import TeacherListCard from './Teacher-list-card';

const TeachersSection = ({ currentPage, itemsPerPage }) => {
    const [teachers, setTeachers] = useState([]);
    const viewType = useSelector(state => state.layout.viewType); // Assuming you have a viewType in Redux store

    useEffect(() => {
        // Simulate fetching data (mock teachers data)
        const mockTeachers = [
            { id: 1, name: 'Chelsey Dietrich', experience: '5 years', rating: 4, location: 'USA', gender: 'Female', jobTitle: 'Math Teacher', subject: 'Mathematics', profilePicture: './images/1b7a93a6-05df-4d46-a287-beffc6824630.jpg' },
            { id: 2, name: 'Mrs. Dennis Schulist', experience: '10 years', rating: 5, location: 'Canada', gender: 'Female', jobTitle: 'Science Teacher', subject: 'Biology', profilePicture: './images/4bc0bdd4-e1e1-400b-bd4c-1a78d5de5ff3.jpg' },
            { id: 3, name: 'Kurtis Weissnat', experience: '3 years', rating: 3, location: 'Germany', gender: 'Male', jobTitle: 'History Teacher', subject: 'History', profilePicture: './images/5d9794e2-1b25-4024-9001-652d6ae5b3a8.jpg' },
            { id: 4, name: 'Nicholas Runolfsdottir', experience: '12 years', rating: 5, location: 'Norway', gender: 'Male', jobTitle: 'Physics Teacher', subject: 'Physics', profilePicture: './images/31 Cats With Auras So Powerful, You Can’t Look Away _ iHeartCats_com.jpg' },
            { id: 5, name: 'Leanne Graham', experience: '8 years', rating: 4, location: 'Australia', gender: 'Female', jobTitle: 'Chemistry Teacher', subject: 'Chemistry', profilePicture: './images/476f40f7-9106-49c8-831e-b312b47b7355.jpeg' },
        ];

        // Pagination logic
        const indexOfLastTeacher = currentPage * itemsPerPage;
        const indexOfFirstTeacher = indexOfLastTeacher - itemsPerPage;
        const currentTeachers = mockTeachers.slice(indexOfFirstTeacher, indexOfLastTeacher);

        setTeachers(currentTeachers);
    }, [currentPage, itemsPerPage]);

    return (
        <div className="teachers-section container">
            <div className="row">
                <div  className={viewType === 'grid' ? 'grid-layout' : 'list-layout'}>
                    {teachers.map((teacher) => (
                        <div key={teacher.id}>
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
