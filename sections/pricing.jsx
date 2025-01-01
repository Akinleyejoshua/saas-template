// pricing.jsx
import { MdOutlineCheck, MdOutlineClose } from 'react-icons/md';
import styles from './pricing.module.css';

const Pricing = () => {
    const plans = [
        {
            name: 'Basic',
            price: '29',
            period: '/month',
            description: 'Perfect for small businesses',
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

    return (
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
                            <div className={styles.price}>
                                <span className={styles.currency}>$</span>
                                <span className={styles.amount}>{plan.price}</span>
                                <span className={styles.period}>{plan.period}</span>
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
                            <button className={styles.button}>
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;