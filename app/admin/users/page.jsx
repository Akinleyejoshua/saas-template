// page.jsx
"use client";
import { useState } from 'react';
import { MdOutlineEmail, MdOutlineBlock, MdOutlineEdit, MdOutlineDelete, MdOutlineCheckCircle, MdOutlineSearch } from 'react-icons/md';
import styles from './page.module.css';
import AdminSidebar from '@/components/admin-sidebar';
import Header from '@/components/header';

export default function Users() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [search, setSearch] = useState('');

    // Mock data - replace with API call
    const users = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            role: 'User',
            status: 'Active',
            joinDate: '2024-01-15',
            lastLogin: '2024-03-20'
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            role: 'Admin',
            status: 'Banned',
            joinDate: '2024-02-01',
            lastLogin: '2024-03-19'
        },
        // Add more users...
    ];

    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className={styles.dashboard}>
            <AdminSidebar
                isOpen={sidebarOpen}
                toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            />
            <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
            <main className={`${styles.content} ${sidebarOpen ? "" : styles.expanded}`}>
                <div className={styles.pageHeader}>
                    <h1>Users Management</h1>
                    <div className={styles.searchBox}>
                        <MdOutlineSearch className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Search users..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Join Date</th>
                                <th>Last Login</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <span className={`${styles.status} ${styles[user.status.toLowerCase()]}`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td>{user.joinDate}</td>
                                    <td>{user.lastLogin}</td>
                                    <td>
                                        <div className={styles.actions}>
                                            <button className={styles.actionButton} title="Email User">
                                                <MdOutlineEmail />
                                            </button>
                                            <button className={styles.actionButton} title="Edit User">
                                                <MdOutlineEdit />
                                            </button>
                                            <button 
                                                className={`${styles.actionButton} ${user.status === 'Banned' ? styles.unban : ''}`}
                                                title={user.status === 'Banned' ? 'Unban User' : 'Ban User'}
                                            >
                                                {user.status === 'Banned' ? 
                                                    <MdOutlineCheckCircle /> : 
                                                    <MdOutlineBlock />
                                                }
                                            </button>
                                            <button className={`${styles.actionButton} ${styles.delete}`} title="Delete User">
                                                <MdOutlineDelete />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}