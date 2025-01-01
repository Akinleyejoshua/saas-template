// reviews.jsx
"use client"

import { useState, useRef } from 'react';
import { MdOutlineArrowForward, MdOutlineArrowBack, MdOutlineStar } from 'react-icons/md';
import Image from 'next/image';
import styles from './reviews.module.css';

const Reviews = () => {
    const scrollRef = useRef(null);

    const reviews = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Marketing Director',
            image: '/sarah.jpg',
            rating: 5,
            comment: 'Absolutely amazing platform! It has transformed how we manage our projects and collaborate with our team.'
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Tech Lead',
            image: '/michael.jpg',
            rating: 5,
            comment: 'The best solution we"ve found for our team.The interface is intuitive and the features are exactly what we needed.'
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            role: 'Product Manager',
            image: '/emily.jpg',
            rating: 4,
            comment: 'Great platform with excellent customer support. Has significantly improved our workflow.'
        },
        {
            id: 4,
            name: 'David Kim',
            role: 'CEO',
            image: '/david.jpg',
            rating: 5,
            comment: 'Outstanding service! The automation features have saved us countless hours.'
        },
        // Add more reviews as needed
    ];

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className={styles.reviews} id='reviews'>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>What Our Clients Say</h2>
                    <p>Trusted by thousands of businesses worldwide</p>
                </div>

                <div className={styles.carouselContainer}>
                    <button
                        className={`${styles.navButton} ${styles.prevButton}`}
                        onClick={() => scroll('left')}
                    >
                        <MdOutlineArrowBack />
                    </button>

                    <div className={styles.carousel} ref={scrollRef}>
                        {reviews.map((review) => (
                            <div key={review.id} className={styles.reviewCard}>
                                <div className={styles.rating}>
                                    {[...Array(review.rating)].map((_, index) => (
                                        <MdOutlineStar key={index} className={styles.star} />
                                    ))}
                                </div>
                                <p className={styles.comment}>{review.comment}</p>
                                <div className={styles.reviewer}>
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src={review.image}
                                            alt={review.name}
                                            width={50}
                                            height={50}
                                            className={styles.image}
                                        />
                                    </div>
                                    <div className={styles.reviewerInfo}>
                                        <h4>{review.name}</h4>
                                        <p>{review.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className={`${styles.navButton} ${styles.nextButton}`}
                        onClick={() => scroll('right')}
                    >
                        <MdOutlineArrowForward />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Reviews;