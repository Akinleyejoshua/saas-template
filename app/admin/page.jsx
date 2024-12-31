// admin-login.jsx
"use client";
import { useState } from 'react';
import { MdOutlineEmail, MdOutlineLock, MdOutlineLogin } from 'react-icons/md';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

const AdminLogin = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.email == process.env.NEXT_PUBLIC_ADMIN_EMAIL
            &&
            formData.password == process.env.NEXT_PUBLIC_ADMIN_PASSWORD) { 
            router.push('/admin/dashboard');
        } else {
            newErrors.password = 'Invalid email or password';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <div className={styles.headerSection}>
                    <h1>Admin Login</h1>
                    <p>Enter your credentials to access the admin dashboard</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <div className={styles.inputWrapper}>
                            <MdOutlineEmail className={styles.icon} />
                            <input
                                type="email"
                                name="email"
                                placeholder="Admin Email"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={isLoading}
                            />
                        </div>
                        {errors.email && <span className={styles.error}>{errors.email}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                        <div className={styles.inputWrapper}>
                            <MdOutlineLock className={styles.icon} />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                disabled={isLoading}
                            />
                        </div>
                        {errors.password && <span className={styles.error}>{errors.password}</span>}
                    </div>

                    <button
                        type="submit"
                        className={`${styles.submitButton} ${isLoading ? styles.loading : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <span className={styles.loader}></span>
                        ) : (
                            <>
                                <MdOutlineLogin />
                                <span>Login to Dashboard</span>
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;