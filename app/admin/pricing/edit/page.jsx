// page.jsx
"use client";
import { useState } from "react";
import { MdOutlineAdd, MdOutlineDelete, MdOutlineSave } from "react-icons/md";
import styles from "./page.module.css";
import Header from "@/components/header";
import AdminSidebar from "@/components/admin-sidebar";

const Page = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [formData, setFormData] = useState({
        planName: '',
        price: '',
        currency: 'USD',
        billingPeriod: 'monthly',
        description: '',
        benefits: [''],
        isPopular: false,
        maxUsers: '',
        storageLimit: ''
    });

    const currencies = [
        { code: 'USD', symbol: '$' },
        { code: 'EUR', symbol: '€' },
        { code: 'GBP', symbol: '£' }
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleBenefitChange = (index, value) => {
        const newBenefits = [...formData.benefits];
        newBenefits[index] = value;
        setFormData(prev => ({ ...prev, benefits: newBenefits }));
    };

    const addBenefit = () => {
        setFormData(prev => ({
            ...prev,
            benefits: [...prev.benefits, '']
        }));
    };

    const removeBenefit = (index) => {
        setFormData(prev => ({
            ...prev,
            benefits: prev.benefits.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission
    };

    return (
        <div className={styles.dashboard}>
            <AdminSidebar
                isOpen={sidebarOpen}
                toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            />
            <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
            <main className={`${styles.content} ${sidebarOpen ? "" : styles.expanded}`}>
                <div className={styles.formContainer}>
                    <h1>Create Pricing Plan</h1>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formGroup}>
                            <label>Plan Name</label>
                            <input
                                type="text"
                                name="planName"
                                value={formData.planName}
                                onChange={handleChange}
                                placeholder="e.g. Professional"
                            />
                        </div>

                        <div className={styles.priceGroup}>
                            <div className={styles.formGroup}>
                                <label>Currency</label>
                                <select
                                    name="currency"
                                    value={formData.currency}
                                    onChange={handleChange}
                                >
                                    {currencies.map(currency => (
                                        <option key={currency.code} value={currency.code}>
                                            {currency.code} ({currency.symbol})
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label>Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    placeholder="0.00"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label>Billing Period</label>
                                <select
                                    name="billingPeriod"
                                    value={formData.billingPeriod}
                                    onChange={handleChange}
                                >
                                    <option value="weekly">Weekly</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="yearly">Yearly</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label>Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Plan description..."
                            />
                        </div>

                        <div className={styles.benefitsSection}>
                            <label>Benefits</label>
                            {formData.benefits.map((benefit, index) => (
                                <div key={index} className={styles.benefitInput}>
                                    <input
                                        type="text"
                                        value={benefit}
                                        onChange={(e) => handleBenefitChange(index, e.target.value)}
                                        placeholder="Add a benefit"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeBenefit(index)}
                                        className={styles.removeButton}
                                    >
                                        <MdOutlineDelete />
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={addBenefit}
                                className={styles.addButton}
                            >
                                <MdOutlineAdd /> Add Benefit
                            </button>
                        </div>

                        <div className={styles.checkboxGroup}>
                            <input
                                type="checkbox"
                                name="isPopular"
                                checked={formData.isPopular}
                                onChange={handleChange}
                                id="isPopular"
                            />
                            <label htmlFor="isPopular">Mark as Popular Plan</label>
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            <MdOutlineSave /> Save Plan
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Page;