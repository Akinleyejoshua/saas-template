// about.jsx
import Image from 'next/image';
import styles from './about.module.css';
import Logo from "@/src/logo.jpg"

const About = () => {
    return (
        <section className={styles.about} id='about'>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>About Our Platform</h2>
                    <div className={styles.gridContainer}>
                        <div className={styles.textContent}>
                            <h3 className={styles.subtitle}>Who We Are</h3>
                            <p className={styles.description}>
                                We're a team of innovators passionate about creating solutions
                                that help businesses grow. Our platform combines cutting-edge
                                technology with user-friendly design to deliver exceptional results.
                            </p>
                            <div className={styles.highlights}>
                                <div className={styles.highlight}>
                                    <span className={styles.number}>5+</span>
                                    <span className={styles.label}>Years Experience</span>
                                </div>
                                <div className={styles.highlight}>
                                    <span className={styles.number}>200+</span>
                                    <span className={styles.label}>Projects Completed</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={Logo}
                                alt="Our Team"
                                width={400}
                                height={400}
                                className={styles.image}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;