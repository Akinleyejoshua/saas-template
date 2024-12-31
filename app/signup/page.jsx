// page.jsx
"use client";
import { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaGithub } from 'react-icons/fa';
import styles from './page.module.css';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = 'Name is required';
        if (!formData.email) tempErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid';
        if (!formData.password) tempErrors.password = 'Password is required';
        else if (formData.password.length < 6) tempErrors.password = 'Password must be at least 6 characters';
        if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = 'Passwords do not match';

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <h1 className={styles.title}>Create Account</h1>
                <p className={styles.subtitle}>Join our community today</p>

                <div className={styles.socialButtons}>
                    <button className={styles.socialButton}>
                        <FaGoogle /> Sign up with Google
                    </button>
                    <button className={styles.socialButton}>
                        <FaGithub /> Sign up with GitHub
                    </button>
                </div>

                <div className={styles.divider}>
                    <span>or</span>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <div className={styles.inputWrapper}>
                            <FaUser className={styles.icon} />
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.name && <span className={styles.error}>{errors.name}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                        <div className={styles.inputWrapper}>
                            <FaEnvelope className={styles.icon} />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.email && <span className={styles.error}>{errors.email}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                        <div className={styles.inputWrapper}>
                            <FaLock className={styles.icon} />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.password && <span className={styles.error}>{errors.password}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                        <div className={styles.inputWrapper}>
                            <FaLock className={styles.icon} />
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
                    </div>

                    <button type="submit" className={styles.submitButton}>
                        Create Account
                    </button>
                </form>

                <p className={styles.login}>
                    Already have an account? <a href="/signin">Log in</a>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;