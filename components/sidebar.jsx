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
    MdChevronLeft,
    MdOutlineMonetizationOn
} from 'react-icons/md';
import styles from './sidebar.module.css';
import Logo from "@/src/logo.jpg";
import { useRouter, usePathname } from 'next/navigation';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const router = useRouter();
    const pathname = usePathname();

    const menuItems = [
        { title: 'Dashboard', icon: <MdOutlineDashboard />, path: `/dashboard` },
        { title: 'Subscription', icon: <MdOutlineMonetizationOn />, path: '/subscription' },
        // { title: 'Messages', icon: <MdOutlineMessage />, path: '/messages' },
        // { title: 'Analytics', icon: <MdOutlineAnalytics />, path: '/analytics' },
        // { title: 'Files', icon: <MdOutlineFolder />, path: '/files' },
        // { title: 'Settings', icon: <MdOutlineSettings />, path: '/settings' },
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
                    <div key={index} className={styles.menuWrapper}>
                        {item.submenu ? (
                            <>
                                <button
                                    className={`${styles.menuItem} ${openDropdown === item.title ? styles.active : ''}`}
                                    onClick={() => handleDropdown(item.title)}
                                >
                                    {item.icon}
                                    <span>{item.title}</span>
                                    <MdKeyboardArrowDown className={`${styles.arrow} ${openDropdown === item.title ? styles.rotate : ''}`} />
                                </button>
                                <div className={`${styles.submenu} ${openDropdown === item.title ? styles.show : ''}`}>
                                    {item.submenu.map((subItem, subIndex) => (
                                        <Link
                                            href={subItem.path}
                                            key={subIndex}
                                            className={`${styles.submenuItem} ${pathname === subItem.path ? styles.active : ''}`}
                                        >
                                            {subItem.title}
                                        </Link>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <Link
                                href={item.path}
                                className={`${styles.menuItem} ${pathname === item.path ? styles.active : ''}`}
                            >
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        )}
                    </div>
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