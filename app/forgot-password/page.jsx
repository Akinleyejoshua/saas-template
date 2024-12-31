// forgot-password.jsx
"use client";
import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import styles from './page.module.css';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateForm = () => {
        if (!email) {
            setError('Email is required');
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Email is invalid');
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (validateForm()) {
            // Handle password reset logic here
            setIsSubmitted(true);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <h1 className={styles.title}>Forgot Password</h1>
                <p className={styles.subtitle}>
                    Enter your email address and we'll send you instructions to reset your password.
                </p>

                {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <div className={styles.inputWrapper}>
                                <FaEnvelope className={styles.icon} />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            {error && <span className={styles.error}>{error}</span>}
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            Send Reset Link
                        </button>
                    </form>
                ) : (
                    <div className={styles.successMessage}>
                        <p>Password reset instructions have been sent to your email.</p>
                        <p>Please check your inbox and follow the instructions.</p>
                    </div>
                )}

                <p className={styles.backToLogin}>
                    Remember your password? <a href="/signin">Back to Login</a>
                </p>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;