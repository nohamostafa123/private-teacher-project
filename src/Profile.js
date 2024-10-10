import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProfilePage.css';


const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userType, setUserType] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const iid = localStorage.getItem('userId');

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/users/profile/${iid}`);
      console.log(response.data);
      setUser(response.data.additionalData);
      setUserType(response.data.additionalData.userType);
      setUserEmail(response.data.user.email);
      setFormData(response.data.additionalData);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Failed to fetch user data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {

    fetchUserData();
  }, [iid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // const handleInterestsChange = (e) => {
  //   const interestsArray = e.target.value.split(',').map(item => item.trim());
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     interests: interestsArray,
  //   }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = userType === 'teacher'
      ? `http://localhost:5000/api/teachers/update/${id}`
      : `http://localhost:5000/api/students/update/${id}`;

    try {
      const response = await axios.put(endpoint, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log("Update response:", response.data);

      if (response.data.success) {

        setUser({ ...formData, onlineStatus: user.onlineStatus });
        setIsEditing(false);
        fetchUserData();
      }
    } catch (error) {
      console.error("Error updating user data:", error);
      setError(`Failed to update ${userType} data`);
    }
  };



  if (loading) {
    return <div>
      <h1>Loading...</h1>
      <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loading" />

    </div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="bg-profile">
      <div className="profile-page">
        {/* Profile Header Section */}
        <div className="profile-header">
          <div className="avatar-container">
            <img
              src={user.profilePicture || user.image}
              alt="Profile"
              className="profile-avatar"
            />
          </div>
          <h1>{user.first_name || user.firstName} {user.last_name || user.lastName}</h1>
          <p className={`online-status ${user.onlineStatus === 'online' ? 'online' : 'offline'}`}>
            Status: {user.onlineStatus}
          </p>
        </div>

        {/* Edit Form Section */}
        {isEditing ? (
          <form >
            {/* Common User Fields */}
            <div>
              <label>Country:</label>
              <input
                type="text"
                name="country"
                value={formData.country || ''}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Date of Birth:</label>
              <input
                type="date"
                name="date_of_birth"
                value={formData.date_of_birth ? formData.date_of_birth.split('T')[0] : ''}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Bio:</label>
              <textarea
                name="teacher_desc"
                value={formData.teacher_desc || ''}
                onChange={handleChange}
              />
            </div>
            {/* <div>
              <label>Interests:</label>
              <input
                type="text"
                name="interests"
                value={formData.interests ? formData.interests.join(', ') : ''}
                onChange={(e) => handleChange({ target: { name: 'interests', value: e.target.value.split(', ') } })}
              />
            </div> */}

            {/* Additional fields for Teachers */}
            {userType === 'teacher' && (
              <div>
                <h2>Teacher Details</h2>
                <div>
                  <label>Phone:</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label>Subject:</label>
                  <select
                    name="subject"
                    value={formData.subject || ''}
                    onChange={handleChange}
                  >
                    <option value="Math">Math</option>
                    <option value="English">English</option>
                    <option value="Science">Science</option>
                    <option value="History">History</option>
                    <option value="Geography">Geography</option>
                    <option value="Physics">Physics</option>
                    <option value="Biology">Biology</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Arabic">Arabic</option>
                    <option value="French">French</option>
                    <option value="Philosophy">Philosophy</option>
                    <option value="Psychology">Psychology</option>


                  </select>
                </div>
                <div>
                  <label>Years of Experience:</label>
                  <input
                    type="number"
                    name="years_of_experience"
                    value={formData.years_of_experience || ''}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Gender:</label>
                  <select
                    name="gender"
                    value={formData.gender || ''}
                    onChange={handleChange}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label>Level:</label>
                  <select
                    name="level"
                    value={formData.level || ''}
                    onChange={handleChange}
                  >
                    <option value="All levels">All levels</option>
                    <option value="Junior">Junior</option>
                    <option value="Middle">Middle</option>
                    <option value="Senior">Senior</option>

                  </select>
                </div>
                <div>
                  <label>Language:</label>
                  <select
                    name="language"
                    value={formData.language || ''}
                    onChange={handleChange}
                  >
                    <option value="All Languages">All Languages</option>
                    <option value="English">English</option>
                    <option value="Arabic">Arabic</option>

                  </select>
                </div>
              </div>

            )}

            <button type="submit" onClick={handleSubmit}>Save</button>
            <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
          </form>
        ) : (
          <div className="profile-details">
            {/* Displaying User Info */}
            <p className="inline-info">Email: <strong>{userEmail}</strong></p>

            <p className="inline-info">Country: <strong>{user.country}</strong></p>
            <p className="inline-info">Date of Birth: <strong>{user.date_of_birth? new Date(user.date_of_birth).toLocaleDateString() : 'Not provided'}</strong></p>
            <p className="inline-info">Bio: <strong>{user.teacher_desc || 'No bio provided'}</strong></p>
            {/* <p className="inline-info">Interests: <strong>{user.interests ? user.interests.join(', ') : 'No interests provided'}</strong></p> */}

            {/* Additional Info based on User Type */}
            {userType === 'teacher' && (
              <div>
                <h2>Teacher Details</h2>
                <p className="inline-info">Phone: <strong>{user.phone}</strong></p>
                <p className="inline-info">Subject: <strong>{user.subject}</strong></p>
                <p className="inline-info">Years of Experience: <strong>{user.years_of_experience}</strong></p>
                <p className="inline-info">Gender: <strong>{user.gender}</strong></p>
                <p className="inline-info">Level: <strong>{user.level}</strong></p>
                <p className="inline-info">Language: <strong>{user.language}</strong></p>
              </div>
            )}

            <button className='edit-profile-btn' onClick={() => setIsEditing(true)}>Edit Profile</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
