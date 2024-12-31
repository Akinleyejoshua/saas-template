// services.jsx
import styles from './services.module.css';
import { FaCloud, FaLock, FaChartLine, FaCog, FaMobile, FaHeadset } from 'react-icons/fa';

const services = [
    {
        icon: <FaCloud />,
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure for your growing business needs"
    },
    {
        icon: <FaLock />,
        title: "Security First",
        description: "Enterprise-grade security to protect your valuable data"
    },
    {
        icon: <FaChartLine />,
        title: "Analytics",
        description: "Deep insights and metrics to drive better decisions"
    },
    {
        icon: <FaCog />,
        title: "Automation",
        description: "Streamline your workflow with smart automation"
    },
    {
        icon: <FaMobile />,
        title: "Mobile Support",
        description: "Full mobile integration for on-the-go access"
    },
    {
        icon: <FaHeadset />,
        title: "24/7 Support",
        description: "Round-the-clock technical support and assistance"
    }
];

const Services = () => {
    return (
        <section className={styles.services} id='services'>
            <div className={styles.container}>
                <h2 className={styles.title}>Our Services</h2>
                <p className={styles.subtitle}>Comprehensive solutions for your business needs</p>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {service.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.description}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;