// page.jsx
"use client";
import { useState } from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MdOutlineAttachMoney, MdOutlinePerson, MdOutlinePeople, MdOutlineAccessTime } from 'react-icons/md';
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import styles from "./page.module.css";
import AdminSidebar from "@/components/admin-sidebar";

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const barData = [
        { name: 'January', revenue: 12000 },
        { name: 'February', revenue: 19000 },
        { name: 'March', revenue: 3000 },
        { name: 'April', revenue: 5000 },
        { name: 'May', revenue: 2000 },
        { name: 'June', revenue: 3000 },
    ];

    const lineData = [
        { name: 'January', users: 65 },
        { name: 'February', users: 59 },
        { name: 'March', users: 80 },
        { name: 'April', users: 81 },
        { name: 'May', users: 56 },
        { name: 'June', users: 55 },
    ];

    return (
        <div className={styles.dashboard}>
            <AdminSidebar
                isOpen={sidebarOpen}
                toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            />
            <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
            <main className={`${styles.content} ${sidebarOpen ? "" : styles.expanded}`}>
                <div className={styles.metrics}>
                    <div className={styles.metricCard}>
                        <MdOutlineAttachMoney className={styles.icon} />
                        <h3>Total Revenue</h3>
                        <p>$50,000</p>
                    </div>
                    <div className={styles.metricCard}>
                        <MdOutlinePerson className={styles.icon} />
                        <h3>New Users</h3>
                        <p>1,200</p>
                    </div>
                    <div className={styles.metricCard}>
                        <MdOutlinePeople className={styles.icon} />
                        <h3>Active Users</h3>
                        <p>3,400</p>
                    </div>
                    <div className={styles.metricCard}>
                        <MdOutlineAccessTime className={styles.icon} />
                        <h3>Server Uptime</h3>
                        <p>99.99%</p>
                    </div>
                </div>
                <div className={styles.charts}>
                    <div className={styles.chartCard}>
                        <h3>Revenue Over Time</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={barData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="revenue" stroke="rgba(75, 192, 192, 1)" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className={styles.chartCard}>
                        <h3>User Growth</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={lineData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="users" stroke="rgba(75, 192, 192, 1)" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className={styles.accountUsage}>
                    <h3>Account Usage</h3>
                    <div className={styles.usageDetails}>
                        <div className={styles.usageItem}>
                            <h4>Storage</h4>
                            <div className={styles.usageBar}>
                                <div className={styles.usageFill} style={{ width: '70%' }}></div>
                            </div>
                            <p>70% used of 100GB</p>
                        </div>
                        <div className={styles.usageItem}>
                            <h4>Bandwidth</h4>
                            <div className={styles.usageBar}>
                                <div className={styles.usageFill} style={{ width: '45%' }}></div>
                            </div>
                            <p>45% used of 1TB</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;