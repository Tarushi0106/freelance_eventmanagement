import React, { useState } from "react";
import axios from "axios";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [qrCode, setQrCode] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/users/register", formData);
            console.log(res.data);
            setQrCode(res.data.user.qrCode); // display QR code
        } catch (err) {
            console.error(err.response.data.message);
            alert(err.response.data.message);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                />
                <button type="submit">Register</button>
            </form>

            {qrCode && (
                <div>
                    <h3>Your QR Code:</h3>
                    <img src={qrCode} alt="User QR Code" />
                </div>
            )}
        </div>
    );
};

export default Register;
