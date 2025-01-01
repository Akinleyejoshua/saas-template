// footer.jsx
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.company}>
                        <h3 className={styles.logo}>Company Logo</h3>
                        <p className={styles.description}>
                            Transforming businesses through innovative SaaS solutions.
                            Making technology accessible for everyone.
                        </p>
                        <div className={styles.social}>
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaLinkedin /></a>
                        </div>
                    </div>

                    <div className={styles.links}>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link href="#about">About Us</Link></li>
                            <li><Link href="#services">Services</Link></li>
                            <li><Link href="#pricing">Pricing</Link></li>
                            <li><Link href="#reviews">Reviews</Link></li>
                            <li><Link href="#contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className={styles.links}>
                        <h4>Support</h4>
                        <ul>
                            <li><Link href="/faq">FAQ</Link></li>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                            <li><Link href="/terms">Terms of Service</Link></li>
                            <li><Link href="/documentation">Documentation</Link></li>
                        </ul>
                    </div>

                    <div className={styles.newsletter}>
                        <h4>Stay Updated</h4>
                        <p>Subscribe to our newsletter for the latest updates.</p>
                        <div className={styles.inputGroup}>
                            <input type="email" placeholder="Enter your email" />
                            <button type="button">Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;