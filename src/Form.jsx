import React, { useState } from "react";
import "./UserProfile.css";
import "./dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    aboutMe: "",
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to server)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="profile-user">
      {/* ... (existing code) */}
      <div className="seeds">
        <h1>Hello Dunnie!</h1>
        <p>
          This is your profile page. You can see the progress you've made with
          <br />
          your work and manage your projects or assigned tasks
        </p>
        <button>Edit Profile</button>
        <div className="square">
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />

            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />

            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />

            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />

            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />

            <label htmlFor="aboutMe">About Me:</label>
            <textarea
              id="aboutMe"
              name="aboutMe"
              value={formData.aboutMe}
              onChange={handleInputChange}
            ></textarea>

            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
