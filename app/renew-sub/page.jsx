// page.jsx
"use client";
// pages/dashboard.jsx
import { useEffect, useState } from "react";

// import { PaystackButton } from 'react-paystack';
import styles from "./page.module.css";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import { useRouter } from "next/navigation";
import { MdOutlineCheck, MdOutlineClose } from 'react-icons/md';
import dynamic from "next/dynamic"

const Page = () => {
    const router = useRouter();

    const PaystackButton = dynamic(() => import('react-paystack').then(mode => mode.PaystackButton), {ssr:false})

    const [sidebarOpen, setSidebarOpen] = useState(true);
    const plans = [
        {
            name: 'Basic',
            price: '29',
            period: '/month',
            discountedPrice: '24',
            period: '/month',
            description: 'Perfect for small businesses',
            discountPercentage: '17',
            features: [
                '5 Team Members',
                '10GB Storage',
                'Basic Analytics',
                'Email Support',
                'API Access',
            ],
            notIncluded: [
                'Custom Domain',
                'Advanced Security',
                'Priority Support',
            ]
        },
        {
            name: 'Professional',
            price: '79',
            period: '/month',
            discountedPrice: '59',
            period: '/month',
            description: 'Ideal for growing teams',
            popular: true,
            features: [
                '10 Team Members',
                '50GB Storage',
                'Advanced Analytics',
                'Priority Email Support',
                'API Access',
                'Custom Domain',
                'Advanced Security',
            ],
            notIncluded: ['24/7 Phone Support']
        },
        {
            name: 'Enterprise',
            price: '149',
            period: '/month',
            discountedPrice: '119',
            period: '/month',
            description: 'For large organizations',
            features: [
                'Unlimited Team Members',
                '500GB Storage',
                'Custom Analytics',
                '24/7 Phone Support',
                'API Access',
                'Custom Domain',
                'Advanced Security',
                'Custom Integration'
            ]
        }
    ];

    const [newPlans, setNewPlans] = useState([])
    const [rate, setRate] = useState(0);

    useEffect(() => {
        try {
            fetch(`https://api.exchangerate-api.com/v4/latest/USD`).then(res => res.json())
                .then(res => {
                    const new_rate = res.rates["NGN"]
                    const new_plans = plans.map(plan => {
                        return {
                            ...plan,
                            price: (plan.price * new_rate).toFixed(2),
                            discountedPrice: (plan.discountedPrice * new_rate).toFixed(2)
                        }
                    })

                    setNewPlans(new_plans)
                    setRate(new_rate);
                }).catch(err => { })
        } catch (err) {

        }

    }, [])

    // Add checkout button component
    const CheckoutButton = ({ plan }) => {
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(false);

        const config = {
            reference: new Date().getTime().toString(),
            email: "akinleyejoshua.dev@gmail.com",
            amount: plan.discountedPrice * 100 * rate,
            publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
            metadata: {
                plan_name: plan.name,
            }
        };

        // Add payment handlers
        const onSuccess = (reference) => {
            setLoading(false);
            console.log("Payment successful!", reference);
            // Handle successful payment (e.g. update subscription status)
        };

        const onClose = () => {
            setLoading(false);
            console.log("Payment window closed");
        };

        const componentProps = {
            ...config,
            text: `Subscribe to ${plan.name}`,
            onSuccess: (reference) => onSuccess(reference),
            onClose: onClose,
        };

        return (
            <div className={styles.checkoutSection}>
                {error && <div className={styles.error}>{error}</div>}
                <PaystackButton
                    disabled={loading}
                    className={`${styles.checkoutButton} ${loading ? styles.loading : ''}`}
                    {...componentProps} />

            </div>
        );
    };

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
                <section className={styles.pricing} id='pricing'>
                    <div className={styles.container}>
                        <div className={styles.header}>
                            <h2>Simple, transparent pricing</h2>
                            <p>Choose the perfect plan for your needs</p>
                        </div>

                        <div className={styles.plans}>
                            {plans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`${styles.plan} ${plan.popular ? styles.popular : ''}`}
                                >
                                    {plan.popular && <span className={styles.popularBadge}>Most Popular</span>}
                                    <h3>{plan.name}</h3>
                                    <div className={styles.priceContainer}>
                                        <div className={styles.prices}>
                                            <span className={styles.originalPrice}>${plan.price}</span>
                                            <span className={styles.discountedPrice}>${plan.discountedPrice}</span>
                                            <span className={styles.period}>{plan.period}</span>
                                        </div>
                                        <div className={styles.savings}>
                                            Save {plan.discountPercentage}%
                                        </div>
                                    </div>
                                    <p className={styles.description}>{plan.description}</p>
                                    <ul className={styles.features}>
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <MdOutlineCheck className={styles.checkIcon} />
                                                {feature}
                                            </li>
                                        ))}
                                        {plan.notIncluded?.map((feature, idx) => (
                                            <li key={idx} className={styles.notIncluded}>
                                                <MdOutlineClose className={styles.closeIcon} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <CheckoutButton plan={plan} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Page;
