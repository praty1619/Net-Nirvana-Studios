import React from 'react';
import { motion } from "framer-motion";
import { Code2, Rocket, LayoutTemplate } from "lucide-react"; // Import icons
import "../css/Services.css";

const servicesData = [
    {
        icon: <LayoutTemplate size={32} />,
        title: "Web Application",
        desc: "Scalable, secure, and fast web applications tailored to your business needs using modern tech stacks."
    },
    {
        icon: <Rocket size={32} />,
        title: "Startup MVPs",
        desc: "From idea to launch - we help you validate fast without overengineering. Get to market in weeks."
    },
    {
        icon: <Code2 size={32} />,
        title: "Product Engineering",
        desc: "From backend architectures to deployment - we build complete, production-ready systems."
    }
];

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3 // Delay between each card appearing
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start lower
    visible: {
        opacity: 1,
        y: 0, // Float up
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const Services = () => {
    return (
        <section className="services">
            {/* Background blobs for the art vibe */}
            <div className="service-blob blob-1"></div>
            <div className="service-blob blob-2"></div>

            <div className="services-container">

                {/* Header Text Animation */}
                <motion.div
                    className="services-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="services-title">What we help you build</h2>
                    <p className="services-subtitle">
                        We transform complex requirements into seamless digital experiences.
                    </p>
                </motion.div>

                {/* Staggered Grid Animation */}
                <motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }} // Triggers when 20% visible
                >
                    {servicesData.map((service, index) => (
                        <motion.div
                            className="services-card"
                            key={index}
                            variants={cardVariants}
                        >
                            <div className="card-icon">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Services;