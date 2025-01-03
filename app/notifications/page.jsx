// page.jsx
"use client";
// pages/dashboard.jsx
import { useState } from "react";

import styles from "./page.module.css";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

const Page = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className={styles.dashboard}>
            <Sidebar
                isOpen={sidebarOpen}
                toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            />
            <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />{" "}
            <main
                className={`${styles.content} ${sidebarOpen ? "" : styles.expanded}`}
            >
                {/* Dashboard content goes here */}
                <h1>Notifications</h1>
            </main>
        </div>
    );
};

export default Page;
