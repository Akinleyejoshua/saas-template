// page.jsx
"use client";
import { useState } from 'react';
import { FaEnvelope, FaLock, FaGoogle, FaGithub } from 'react-icons/fa';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

const SigninPage = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
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
        if (!formData.email) tempErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid';
        if (!formData.password) tempErrors.password = 'Password is required';

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
            router.push('/dashboard');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <h1 className={styles.title}>Welcome Back</h1>
                <p className={styles.subtitle}>Sign in to continue</p>

                <div className={styles.socialButtons}>
                    <button className={styles.socialButton}>
                        <FaGoogle /> Sign in with Google
                    </button>
                    <button className={styles.socialButton}>
                        <FaGithub /> Sign in with GitHub
                    </button>
                </div>

                <div className={styles.divider}>
                    <span>or</span>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
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

                    <div className={styles.forgotPassword}>
                        <a href="/forgot-password">Forgot password?</a>
                    </div>

                    <button type="submit" className={styles.submitButton}>
                        Sign In
                    </button>
                </form>

                <p className={styles.signup}>
                    Don't have an account? <a href="/signup">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default SigninPage;