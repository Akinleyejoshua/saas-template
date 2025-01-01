// page.jsx
"use client";
// pages/dashboard.jsx
import { useState } from "react";

import styles from "./page.module.css";
import Header from "@/components/header";
import AdminSidebar from "@/components/admin-sidebar";

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className={styles.dashboard}>
            <AdminSidebar
                isOpen={sidebarOpen}
                toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            />
            <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />{" "}
            <main
                className={`${styles.content} ${sidebarOpen ? "" : styles.expanded}`}
            >
                {/* Dashboard content goes here */}
                <h1>Emailer</h1>
            </main>
        </div>
    );
};

export default Dashboard;
