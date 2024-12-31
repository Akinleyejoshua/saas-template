// header.jsx
"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './header.module.css';
import { AiOutlineHome, AiOutlineInfoCircle } from 'react-icons/ai';
import { MdOutlineBusinessCenter } from 'react-icons/md';
import { RiContactsLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Link href="/">Logo</Link>
                </div>

                <button
                    className={styles.hamburger}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <HiOutlineMenu size={24} color="white" />
                </button>

                <ul className={`${styles.navItems} ${isOpen ? styles.active : ''}`}>
                    <li>
                        <Link href="/">
                            <AiOutlineHome className={styles.icon} />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#about">
                            <AiOutlineInfoCircle className={styles.icon} />
                            <span>About</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#services">
                            <MdOutlineBusinessCenter className={styles.icon} />
                            <span>Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact">
                            <RiContactsLine className={styles.icon} />
                            <span>Contact</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;