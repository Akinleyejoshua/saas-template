// contact.jsx
import styles from './contact.module.css';
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaLinkedin,
    FaTwitter,
    FaGithub
} from 'react-icons/fa';

const Contact = () => {
    return (
        <section className={styles.contact} id="contact">
            <div className={styles.container}>
                <h2 className={styles.title}>Get in Touch</h2>
                <p className={styles.subtitle}>We're here to help and answer any questions</p>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <FaEnvelope className={styles.icon} />
                        <h3>Email</h3>
                        <a href="mailto:contact@company.com">contact@company.com</a>
                    </div>

                    <div className={styles.card}>
                        <FaPhone className={styles.icon} />
                        <h3>Phone</h3>
                        <a href="tel:+1234567890">+1 (234) 567-890</a>
                    </div>

                    <div className={styles.card}>
                        <FaMapMarkerAlt className={styles.icon} />
                        <h3>Address</h3>
                        <p>123 Business Street<br />New York, NY 10001</p>
                    </div>
                </div>

                <div className={styles.social}>
                    <h3>Follow Us</h3>
                    <div className={styles.socialLinks}>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;