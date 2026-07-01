import logo from "../assets/logo.svg";
import "./componentsStyle.css";

function Footer() {
  return (
    <footer className="border-top mt-5 footer">
      <div className="container py-5">
        <div className="row">

          {/* Logo */}
          <div className="col-lg-3 col-md-6 mb-4">
            <img src={logo} alt="Zerodha Logo" className="footer-logo mb-3" />

            <p className="text-muted small">
              © 2010 - 2026, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

            <div className="social-icons">
              <i className="fa-brands fa-x-twitter me-3"></i>
              <i className="fa-brands fa-facebook me-3"></i>
              <i className="fa-brands fa-instagram me-3"></i>
              <i className="fa-brands fa-linkedin me-3"></i>
            </div>

            <hr />

            <div className="social-icons">
              <i className="fa-brands fa-youtube me-3"></i>
              <i className="fa-brands fa-whatsapp me-3"></i>
              <i className="fa-brands fa-telegram"></i>
            </div>
          </div>

          {/* Account */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Account</h5>

            <a href="#">Open demat account</a>
            <a href="#">Minor demat account</a>
            <a href="#">NRI demat account</a>
            <a href="#">Commodity</a>
            <a href="#">Dematerialisation</a>
            <a href="#">Fund transfer</a>
          </div>

          {/* Support */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Support</h5>

            <a href="#">Contact us</a>
            <a href="#">Support portal</a>
            <a href="#">Complaints</a>
            <a href="#">Bulletin</a>
            <a href="#">Downloads</a>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Company</h5>

            <a href="#">About</a>
            <a href="#">Philosophy</a>
            <a href="#">Careers</a>
            <a href="#">Press & Media</a>
            <a href="#">Referral program</a>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Quick Links</h5>

            <a href="#">Upcoming IPOs</a>
            <a href="#">Brokerage charges</a>
            <a href="#">Market holidays</a>
            <a href="#">Calculators</a>
            <a href="#">Markets</a>
          </div>

        </div>

        <hr />

        <p className="footer-text">
          Zerodha Broking Ltd.: Member of NSE, BSE & MCX. Investments in
          securities market are subject to market risks. Read all related
          documents carefully before investing.
        </p>

        <p className="footer-text">
          Prevent unauthorized transactions in your account. Update your mobile
          number and email ID with your stock broker.
        </p>

        <div className="text-center mt-4">
          <a href="#">NSE</a>
          <a href="#">BSE</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Disclosure</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;