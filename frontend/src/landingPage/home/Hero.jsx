import landingHero from "../../assets/landing.svg";
import "./homeStyle.css";

function Hero() {
  return (
    <div className="container p-5 hero mb-5">
      <div className="row text-center">
        <img src={landingHero} alt="hero-img" className="mb-5"/>
        <h1 className="mt-5">Invest in everything</h1>
        <p className="fw-light">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className="btn-primary home-signup-btn">Sign up for free</button>
      </div>
    </div>
  );
}

export default Hero;