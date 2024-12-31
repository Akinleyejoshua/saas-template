// page.jsx
"use client";
// pages/dashboard.jsx
import { useState } from 'react';
import { MdOutlineEmail, MdOutlineBlock, MdOutlineEdit, MdOutlineDelete, MdOutlineCheckCircle } from 'react-icons/md';
import styles from './page.module.css';
import AdminSidebar from '@/components/admin-sidebar';
import Header from '@/components/header';

export default function Users (){
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active', role: 'User', lastLogin: '2024-03-15' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Active', role: 'Admin', lastLogin: '2024-03-14' },
        { id: 3, name: 'Mike Johnson', email: 'mike@example.com', status: 'Banned', role: 'User', lastLogin: '2024-03-10' },
        // Add more users as needed
    ];

    return (
        <div className={styles.dashboard}>
            <AdminSidebar
                isOpen={sidebarOpen}
                toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            />
            <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
            <main className={`${styles.content} ${sidebarOpen ? "" : styles.expanded}`}>
                <div className={styles.tableContainer}>
                    <div className={styles.tableHeader}>
                        <h1>Users</h1>
                        <button className={styles.addButton}>+ Add User</button>
                    </div>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th>Last Login</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td>
                                            <span className={`${styles.status} ${styles[user.status.toLowerCase()]}`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td>{user.lastLogin}</td>
                                        <td>
                                            <div className={styles.actions}>
                                                <button className={styles.actionButton} title="Email">
                                                    <MdOutlineEmail />
                                                </button>
                                                <button className={styles.actionButton} title="Edit">
                                                    <MdOutlineEdit />
                                                </button>
                                                <button
                                                    className={`${styles.actionButton} ${user.status === 'Banned' ? styles.unban : ''}`}
                                                    title={user.status === 'Banned' ? 'Unban' : 'Ban'}
                                                >
                                                    {user.status === 'Banned' ? <MdOutlineCheckCircle /> : <MdOutlineBlock />}
                                                </button>
                                                <button className={`${styles.actionButton} ${styles.delete}`} title="Delete">
                                                    <MdOutlineDelete />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};