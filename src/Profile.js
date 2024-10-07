import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('localhost:5000/api/teacher');
                setUser(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, []);

    return (
        <div className="container">
            <h1>Profile</h1>
            <div>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.phone}</p>
            </div>
        </div>
    );
};

export default Profile;
