import { motion } from "framer-motion";
import "../css/Hero.css";
import networkImg from "../logo/Network.png"

const Hero = () => {
    return (
        <section className="hero">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut"
                    }}
                >
                    <img className="hero-network" alt="network" src={networkImg}></img>

                    <span className="hero-badge">Net-Nirvana-Studios</span>
                    <h1 className="hero-title">
                        Building clean and scalable applications.
                    </h1>

                    <p className="hero-text">
                        Net Nirvana Studios helps startups and creators turn ideas into fast,
                        reliable web products - without overengineering.
                    </p>

                    <div className="hero-actions">
                        <button className="nn-btn">
                            <span>View our work</span>
                        </button>
                        <button className="nn-btn">
                            <span>Contact Us</span>
                        </button>
                    </div>
                </motion.div>
        </section>
    );
};

export default Hero;