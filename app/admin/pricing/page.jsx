// page.jsx
"use client";
import { useState } from "react";
import { MdOutlineAdd, MdOutlineDelete, MdOutlineSave, MdOutlineEdit } from "react-icons/md";
import styles from "./page.module.css";
import Header from "@/components/header";
import AdminSidebar from "@/components/admin-sidebar";
import { useRouter } from 'next/navigation';

const Page = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const router = useRouter();

    // Mock data - replace with actual data fetch
    const pricingPlans = [
        {
            id: 1,
            name: 'Basic',
            price: 29,
            currency: 'USD',
            period: 'monthly',
            isPopular: false,
            status: 'active',
            subscribers: 124
        },
        {
            id: 2,
            name: 'Professional',
            price: 79,
            currency: 'USD',
            period: 'monthly',
            isPopular: true,
            status: 'active',
            subscribers: 856
        },
        {
            id: 3,
            name: 'Enterprise',
            price: 149,
            currency: 'USD',
            period: 'monthly',
            isPopular: false,
            status: 'active',
            subscribers: 291
        },
    ];

    return (
        <div className={styles.dashboard}>
            <AdminSidebar
                isOpen={sidebarOpen}
                toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            />
            <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
            <main className={`${styles.content} ${sidebarOpen ? "" : styles.expanded}`}>
                <div className={styles.pageHeader}>
                    <div>
                        <h1>Pricing Plans</h1>
                        <p>Manage your subscription plans</p>
                    </div>
                    <button
                        className={styles.addButton}
                        onClick={() => router.push('/admin/pricing/create')}
                    >
                        <MdOutlineAdd /> New Plan
                    </button>
                </div>

                <div className={styles.plansGrid}>
                    {pricingPlans.map((plan) => (
                        <div key={plan.id} className={styles.planCard}>
                            <div className={styles.planHeader}>
                                <h3>{plan.name}</h3>
                                {plan.isPopular && (
                                    <span className={styles.popularBadge}>Popular</span>
                                )}
                            </div>

                            <div className={styles.price}>
                                <span className={styles.currency}>$</span>
                                <span className={styles.amount}>{plan.price}</span>
                                <span className={styles.period}>/{plan.period}</span>
                            </div>

                            <div className={styles.stats}>
                                <div className={styles.stat}>
                                    <label>Status</label>
                                    <span className={`${styles.status} ${styles[plan.status]}`}>
                                        {plan.status}
                                    </span>
                                </div>
                                <div className={styles.stat}>
                                    <label>Subscribers</label>
                                    <span>{plan.subscribers}</span>
                                </div>
                            </div>

                            <div className={styles.actions}>
                                <button
                                    className={`${styles.actionButton} ${styles.edit}`}
                                    onClick={() => router.push(`/admin/pricing/edit/${plan.id}`)}
                                >
                                    <MdOutlineEdit /> Edit
                                </button>
                                <button className={`${styles.actionButton} ${styles.delete}`}>
                                    <MdOutlineDelete /> Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Page;