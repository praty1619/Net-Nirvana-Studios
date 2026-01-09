const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
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
            </div>
        </section>
    );
};

export default Hero;