import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RegisterForm.css';

export default function RegisterForm() {
    const navigate = useNavigate(); // This was missing in your original code
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Name validation
        if (!formData.userName.trim()) {
            newErrors.userName = 'Name is required';
        } else if (formData.userName.length < 2) {
            newErrors.userName = 'Name must be at least 2 characters';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
            newErrors.password = 'Password must contain uppercase, lowercase, and number';
        }

        // Confirm password validation
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        setMessage('');
        setMessageType('');

        try {
            const res = await axios.post('https://quiz-backend-5-s0b1.onrender.com/api/auth/register', {
                userName: formData.userName,
                email: formData.email,
                password: formData.password
            });

            if (res.data === 'User registered') {
                setMessage('Registration successful! Redirecting to login...');
                setMessageType('success');
                
                // Clear form data
                setFormData({
                    userName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                });
                
                // Redirect to login page after a short delay
                setTimeout(() => {
                    navigate('/login');
                }, 1500);
                
            } else {
                setMessage('Email already exists. Please use a different email.');
                setMessageType('error');
            }
        } catch (err) {
            // Better error handling
            const errorMessage = err.response?.data?.message || 
                               err.response?.data || 
                               'Error registering user. Please try again.';
            setMessage(errorMessage);
            setMessageType('error');
            console.error('Registration error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <div className="register-header">
                    <h2 className="register-title">Create Account</h2>
                    <p className="register-subtitle">Join Master Quiz and start your learning journey</p>
                </div>

                <form onSubmit={handleRegister} className="register-form">
                    {/* Name Field */}
                    <div className="form-group">
                        <label htmlFor="userName" className="form-label">Full Name</label>
                        <div className="input-wrapper">
                            <input
                                id="userName"
                                name="userName"
                                type="text"
                                placeholder="Enter your full name"
                                value={formData.userName}
                                onChange={handleInputChange}
                                className={`form-input ${errors.userName ? 'error' : ''}`}
                                required
                            />
                            <span className="input-icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z" fill="currentColor" />
                                    <path d="M10 12.5C5.02944 12.5 1 16.5294 1 21.5H19C19 16.5294 14.9706 12.5 10 12.5Z" fill="currentColor" />
                                </svg>
                            </span>
                        </div>
                        {errors.userName && <span className="error-message">{errors.userName}</span>}
                    </div>

                    {/* Email Field */}
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <div className="input-wrapper">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`form-input ${errors.email ? 'error' : ''}`}
                                required
                            />
                            <span className="input-icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 4H2C0.9 4 0 4.9 0 6V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V6C20 4.9 19.1 4 18 4ZM18 8L10 12L2 8V6L10 10L18 6V8Z" fill="currentColor" />
                                </svg>
                            </span>
                        </div>
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    {/* Password Field */}
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="input-wrapper">
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Create a strong password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className={`form-input ${errors.password ? 'error' : ''}`}
                                required
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={togglePasswordVisibility}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? (
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.79 12.79L16.09 16.09L17.5 14.68L3.91 1.09L2.5 2.5L5.91 5.91C3.53 7.4 2 9.8 2 12.5C2 17.19 6.81 22 12.5 22C15.2 22 17.6 20.47 19.09 18.09L15.59 14.59C14.5 15.41 13.12 15.85 11.62 15.85C8.24 15.85 5.5 13.11 5.5 9.73C5.5 8.23 5.94 6.85 6.76 5.75L12.79 12.79Z" fill="currentColor" />
                                    </svg>
                                ) : (
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 4C4.48 4 0 8.48 0 14C0 19.52 4.48 24 10 24C15.52 24 20 19.52 20 14C20 8.48 15.52 4 10 4ZM10 18C6.69 18 4 15.31 4 12C4 8.69 6.69 6 10 6C13.31 6 16 8.69 16 12C16 15.31 13.31 18 10 18ZM10 8C7.79 8 6 9.79 6 12C6 14.21 7.79 16 10 16C12.21 16 14 14.21 14 12C14 9.79 12.21 8 10 8Z" fill="currentColor" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {errors.password && <span className="error-message">{errors.password}</span>}
                    </div>

                    {/* Confirm Password Field */}
                    <div className="form-group">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <div className="input-wrapper">
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm your password"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                                required
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={toggleConfirmPasswordVisibility}
                                aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                            >
                                {showConfirmPassword ? (
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.79 12.79L16.09 16.09L17.5 14.68L3.91 1.09L2.5 2.5L5.91 5.91C3.53 7.4 2 9.8 2 12.5C2 17.19 6.81 22 12.5 22C15.2 22 17.6 20.47 19.09 18.09L15.59 14.59C14.5 15.41 13.12 15.85 11.62 15.85C8.24 15.85 5.5 13.11 5.5 9.73C5.5 8.23 5.94 6.85 6.76 5.75L12.79 12.79Z" fill="currentColor" />
                                    </svg>
                                ) : (
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 4C4.48 4 0 8.48 0 14C0 19.52 4.48 24 10 24C15.52 24 20 19.52 20 14C20 8.48 15.52 4 10 4ZM10 18C6.69 18 4 15.31 4 12C4 8.69 6.69 6 10 6C13.31 6 16 8.69 16 12C16 15.31 13.31 18 10 18ZM10 8C7.79 8 6 9.79 6 12C6 14.21 7.79 16 10 16C12.21 16 14 14.21 14 12C14 9.79 12.21 8 10 8Z" fill="currentColor" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className={`submit-btn ${isLoading ? 'loading' : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <span className="spinner"></span>
                                Creating Account...
                            </>
                        ) : (
                            'Create Account'
                        )}
                    </button>

                    {/* Message Display */}
                    {message && (
                        <div className={`message ${messageType}`}>
                            <span className="message-icon">
                                {messageType === 'success' ? '✅' : '❌'}
                            </span>
                            {message}
                        </div>
                    )}
                </form>

                <div className="register-footer">
                    <p>Already have an account? <a href="/login" className="login-link">Sign in</a></p>
                </div>
            </div>
        </div>
    );
}