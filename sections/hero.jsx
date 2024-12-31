// hero.jsx\
"use client";

import Image from 'next/image';
import styles from './hero.module.css';
import Logo from "@/src/logo.jpg"
import { useRouter } from 'next/navigation';

const Hero = () => {
    const router = useRouter();

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Transform Your Business with Our
                        <span className={styles.highlight}> SaaS Solution</span>
                    </h1>
                    <p className={styles.description}>
                        Streamline your workflow, boost productivity, and scale your business
                        with our cutting-edge platform.
                    </p>
                    <div className={styles.cta}>
                        <button className={styles.primaryBtn} onClick={() => router.push("/signin")}>Get Started Free</button>
                        <button className={styles.secondaryBtn} onClick={() => router.push("/signup")}>Signup</button>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>10k+</span>
                            <span className={styles.statLabel}>Active Users</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>98%</span>
                            <span className={styles.statLabel}>Satisfaction</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        src={Logo}
                        alt="Platform Dashboard"
                        width={400}
                        height={400}
                        priority
                        className={styles.heroImage}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;