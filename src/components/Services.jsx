import { motion } from "framer-motion";
import "../css/Services.css";

const Services = () => {
    return (
        <section className="services">
            <motion.div
                className="services-container"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h2 className="services-title">
                    What we help you build
                </h2>
                <div className="services-grid">
                    <div className="services-card">
                        <h3>Web Application</h3>
                        <p>
                            Scalable, secure, and fast web applications tailored to your business needs.
                        </p>
                    </div>

                    <div className="services-card">
                        <h3>Startup MVPs</h3>
                        <p>
                            From idea to launch - we help you validate fast without overengineering.
                        </p>
                    </div>

                    <div className="services-card">
                        <h3>Product Engineering</h3>
                        <p>
                            From backend architectures to deployment - we build complete,production ready systems.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Services;