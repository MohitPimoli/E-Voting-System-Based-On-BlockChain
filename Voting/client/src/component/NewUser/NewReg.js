import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import fs from 'fs';
import './NewRegStyle.css';
const path = require('D:/Project/Voting/client/src/component/LoginPage/users.json');
const RegistrationForm = () => {
    const [userData, setUserData] = useState({});
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (confirmPassword !== userData.newPassword) {
            alert('Passwords do not match');
            return;
        }
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(userData.newPassword, salt);
        const userDataToSave = { ...userData, newPassword: hashedPassword };
        const usersFilePath = path.resolve(__dirname, 'users.json');
        fs.writeFile(usersFilePath, JSON.stringify(userDataToSave), (err) => {
            if (err) {
                console.error(err);
                return;
            }
            alert('Registration successful');
            setUserData({});
            setConfirmPassword('');
        });
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <label>
                Official Email:
                <input type="email" name="officialEmail" onChange={handleInputChange} />
            </label>
            <label>
                Student ID:
                <input type="text" name="studentID" onChange={handleInputChange} />
            </label>
            <label>
                Name:
                <input type="text" name="name" onChange={handleInputChange} />
            </label>
            <label>
                Course:
                <input type="text" name="course" onChange={handleInputChange} />
            </label>
            <label>
                University Rollno:
                <input type="text" name="universityRollno" onChange={handleInputChange} />
            </label>
            <label>
                New Password:
                <input type="password" name="newPassword" onChange={handleInputChange} />
            </label>
            <label>
                Confirm new Password:
                <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                />
            </label>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;