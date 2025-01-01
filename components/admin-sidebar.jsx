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
    MdOutlineMonetizationOn,
    MdKeyboardArrowDown,
    MdOutlineEmail
} from 'react-icons/md';
import styles from './sidebar.module.css';
import Logo from "@/src/logo.jpg";
import { useRouter, usePathname } from 'next/navigation';

const AdminSidebar = ({ isOpen, toggleSidebar }) => {
    const router = useRouter();
    const pathname = usePathname();
    const [openDropdown, setOpenDropdown] = useState('');

    const menuItems = [
        {
            title: 'Dashboard',
            icon: <MdOutlineDashboard />,
            path: `/admin/dashboard`
        },
        {
            title: 'Users',
            icon: <MdOutlinePersonSearch />,
            path: '/admin/users'
        },
        {
            title: 'Mailer',
            icon: <MdOutlineEmail />,
            path: '/admin/emailer'
        },
        {
            title: 'Pricing',
            icon: <MdOutlineMonetizationOn />,
            path: '/admin/pricing',
            submenu: [
                { title: 'List Plans', path: '/admin/pricing' },
                { title: 'Create Plan', path: '/admin/pricing/create' },
                { title: 'Subscribers', path: '/admin/pricing/subscribers' },
            ]
        },
    ];

    const handleDropdown = (title) => {
        setOpenDropdown(openDropdown === title ? '' : title);
    };

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
                <button onClick={() => router.push('/admin')}>
                    <MdOutlineLogout />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default AdminSidebar;