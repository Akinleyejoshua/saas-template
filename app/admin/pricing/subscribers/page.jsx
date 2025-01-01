// page.jsx
"use client";
import { useState } from "react";
import { MdOutlineSearch, MdOutlineFilterList } from "react-icons/md";
import styles from "./page.module.css";
import Header from "@/components/header";
import AdminSidebar from "@/components/admin-sidebar";

const Page = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");

    // Mock data - replace with API call
    const subscribers = [
        {
            id: 1,
            name: "John Doe",
            email: "john@example.com",
            plan: "Professional",
            startDate: "2024-01-15",
            endDate: "2024-04-15",
            status: "active",
            amount: 79
        },
        // Add more subscribers...
    ];

    const filteredSubscribers = subscribers.filter(sub => {
        const matchesSearch = sub.name.toLowerCase().includes(search.toLowerCase()) ||
            sub.email.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = statusFilter === "all" || sub.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className={styles.dashboard}>
            <AdminSidebar
                isOpen={sidebarOpen}
                toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            />
            <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
            <main className={`${styles.content} ${sidebarOpen ? "" : styles.expanded}`}>
                <div className={styles.pageHeader}>
                    <h1>Subscribers</h1>
                    <div className={styles.filters}>
                        <div className={styles.searchBox}>
                            <MdOutlineSearch className={styles.searchIcon} />
                            <input
                                type="text"
                                placeholder="Search subscribers..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <div className={styles.filterBox}>
                            <MdOutlineFilterList className={styles.filterIcon} />
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                            >
                                <option value="all">All Status</option>
                                <option value="active">Active</option>
                                <option value="expired">Expired</option>
                                <option value="cancelled">Cancelled</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Plan</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredSubscribers.map((subscriber) => (
                                <tr key={subscriber.id}>
                                    <td>{subscriber.name}</td>
                                    <td>{subscriber.email}</td>
                                    <td>{subscriber.plan}</td>
                                    <td>{subscriber.startDate}</td>
                                    <td>{subscriber.endDate}</td>
                                    <td>${subscriber.amount}</td>
                                    <td>
                                        <span className={`${styles.status} ${styles[subscriber.status]}`}>
                                            {subscriber.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default Page;