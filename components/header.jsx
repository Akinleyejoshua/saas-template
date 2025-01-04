// components/Header.jsx
import { useState } from 'react';
import {
    MdOutlineSearch,
    MdOutlineNotifications,
    MdOutlineMessage,
    MdKeyboardArrowDown,
    MdOutlineMenu,
    MdOutlineArrowBackIosNew,

} from 'react-icons/md';
import Image from 'next/image';
import styles from './header.module.css';
import Logo from "@/src/logo.jpg";
import { useRouter } from 'next/navigation';

const Header = ({ toggleSidebar }) => {
    const [showProfile, setShowProfile] = useState(false);
    const router = useRouter();

    return (
        <header className={styles.header}>
            <div className="flex items-center">
                <MdOutlineArrowBackIosNew className='btn' onClick={() => router.back()} />

                <div className={styles.mobileMenu}>
                    <button
                        className={styles.menuButton}
                        onClick={toggleSidebar}
                        aria-label="Toggle Menu"
                    >
                        <MdOutlineMenu />
                    </button>
                </div>
            </div>
            

            {/* <div className={styles.search}>
                <MdOutlineSearch className={styles.searchIcon} />
                <input type="text" placeholder="Search..." />
            </div> */
            }


            <div className={styles.actions}>
                <button className={styles.iconButton} onClick={() => router.push("/notifications")}>
                    <MdOutlineNotifications />
                    <span className={styles.badge}>3</span>
                </button>
                {/* <button className={styles.iconButton}>
                    <MdOutlineMessage />
                    <span className={styles.badge}>5</span>
                </button> */}

                <div className={styles.profile}>
                    <button
                        className={styles.profileButton}
                        onClick={() => setShowProfile(!showProfile)}
                    >
                        <Image
                            src={Logo}
                            alt="Profile"
                            width={32}
                            height={32}
                            className={styles.avatar}
                        />
                        <span>John Doe</span>
                        <MdKeyboardArrowDown />
                    </button>

                    {showProfile && (
                        <div className={styles.profileMenu}>
                            <a href="/admin">Admin</a>
                            <a href="/profile">My Profile</a>
                            <a href="/settings">Settings</a>
                            <a href="/logout">Logout</a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;