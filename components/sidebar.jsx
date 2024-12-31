// components/Sidebar.jsx
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    MdOutlineDashboard,
    MdOutlinePersonSearch,
    MdOutlineSettings,
    MdOutlineMessage,
    MdOutlineAnalytics,
    MdOutlineFolder,
    MdOutlineLogout,
    MdChevronLeft
} from 'react-icons/md';
import styles from './sidebar.module.css';
import Logo from "@/src/logo.jpg";
import { useRouter } from 'next/navigation';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const router = useRouter();

    const menuItems = [
        { title: 'Dashboard', icon: <MdOutlineDashboard />, path: `/dashboard` },
        { title: 'Interviews', icon: <MdOutlinePersonSearch />, path: '/interviews' },
        { title: 'Messages', icon: <MdOutlineMessage />, path: '/messages' },
        { title: 'Analytics', icon: <MdOutlineAnalytics />, path: '/analytics' },
        { title: 'Files', icon: <MdOutlineFolder />, path: '/files' },
        { title: 'Settings', icon: <MdOutlineSettings />, path: '/settings' },
    ];

    return (
        <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
            <div className={styles.logo}>
                <Image src={Logo} alt="Logo" width={40} height={40} />
                <span>Company</span>
            </div>

            <button className={styles.toggle} onClick={toggleSidebar}>
                <MdChevronLeft />
            </button>

            <nav className={styles.menu}>
                {menuItems.map((item, index) => (
                    <Link href={item.path} key={index} className={styles.menuItem}>
                        {item.icon}
                        <span>{item.title}</span>
                    </Link>
                ))}
            </nav>

            <div className={styles.logout}>
                <button onClick={() => router.push('/signin')}>
                    <MdOutlineLogout />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;