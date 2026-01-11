import { motion, useScroll, useTransform } from 'framer-motion';
import "../css/Hero.css";

const Hero = () => {
    // 1. TRACK SCROLL POSITION
    const { scrollY } = useScroll();

    // 2. CREATE ANIMATIONS
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 300], [1, 0.9]);
    const y = useTransform(scrollY, [0, 300], [0, 100]);

    return (
        <section className="hero">
            <div className="hero-blob blob-1"></div>
            <div className="hero-blob blob-2"></div>
            <div className="hero-blob blob-3"></div>

            {/* --- MAIN CONTENT --- */}
            <motion.div
                className="hero-content"
                style={{ opacity, scale, y }}
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="hero-badge"
                >
                    <span className="pulse-dot"></span>
                    <span>Net Nirvana Studios</span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Building <span className="gradient-text">clean & scalable</span> <br />
                    applications.
                </motion.h1>

                {/* Text */}
                <motion.p
                    className="hero-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Net Nirvana Studios helps startups and creators turn ideas into fast,
                    reliable web products — without overengineering.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <button className="nn-btn btn-primary">
                        View our work
                    </button>
                    <button className="nn-btn btn-secondary">
                        Contact Us
                    </button>
                </motion.div>

            </motion.div>

            {/* --- SCROLL LINE --- */}
            <motion.div
                className="scroll-connector"
                style={{ opacity }}
                initial={{ height: 0 }}
                animate={{ height: 60 }}
                transition={{ delay: 1, duration: 1 }}
            ></motion.div>

        </section>
    );
};

export default Hero;