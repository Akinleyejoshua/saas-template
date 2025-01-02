// page.jsx
"use client";
// pages/dashboard.jsx
import { useState } from "react";

import styles from "./page.module.css";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import { MdOutlineCheckCircle, MdOutlineTimer, MdOutlinePayment } from 'react-icons/md';
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();

    const [sidebarOpen, setSidebarOpen] = useState(true);
    const subscription = {
        is_subscribed: true,
        status: 'Active',
        plan: 'Professional',
        startDate: '2025-01-01',
        endDate: '2025-01-03',
        price: 79,
        features: [
            'Unlimited Projects',
            '50GB Storage',
            'Priority Support',
            'API Access'
        ]
    };

    const daysRemaining = Math.ceil((new Date(subscription.endDate) - new Date()) / (1000 * 60 * 60 * 24));

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
                <div className={styles.container}>
                    <div className={styles.subscriptionCard}>
                        <div className={styles.statusSection}>
                            <div className={styles.header}>
                                <h1>Subscription Status</h1>
                                <span className={`${styles.badge} ${styles[subscription.status.toLowerCase()]}`}>
                                    {subscription.status}
                                </span>
                            </div>

                            <div className={styles.timeline}>
                                <div className={styles.timelineInfo}>
                                    <MdOutlineTimer className={styles.icon} />
                                    <div>
                                        <p>Time Remaining</p>
                                        <h3>{daysRemaining} days</h3>
                                    </div>
                                </div>
                                <div className={styles.progressBar}>
                                    <div
                                        className={styles.progress}
                                        style={{ width: `${100 - (daysRemaining / 90) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.planDetails}>
                            <div className={styles.planHeader}>
                                <h2>{subscription.plan} Plan</h2>
                                <span className={styles.price}>${subscription.price}/month</span>
                            </div>

                            <ul className={styles.features}>
                                {subscription.features.map((feature, index) => (
                                    <li key={index}>
                                        <MdOutlineCheckCircle className={styles.checkIcon} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className={styles.dates}>
                                <div>
                                    <span>Start Date</span>
                                    <p>{subscription.startDate}</p>
                                </div>
                                <div>
                                    <span>End Date</span>
                                    <p>{subscription.endDate}</p>
                                </div>
                            </div>

                            {daysRemaining <= 0 &&
                                <button onClick={() => router.push("/renew-sub")} className={styles.renewButton}>
                                    <MdOutlinePayment />
                                    Renew Subscription
                                </button>
                            }

                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Page;
