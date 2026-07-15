import ecosystem from "../../assets/ecosystem.png";
import "./homeStyle.css"

function Stats() {
  return (
    <div className="container">
      <div className="row p-5 align-items-center">
        {/* Left Section */}
        <div className="col-lg-6 col-md-12 Trust">
          <h3 className="mb-4">Trust with confidence</h3>

          <h4>Customer-first always</h4>
          <p>
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India's largest broker,
            contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h4>No spam or gimmicks</h4>
          <p>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High-quality apps that you use at your pace, the way you like.
          </p>

          <h4>The Zerodha universe</h4>
          <p>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your
            needs.
          </p>

          <h4>Do better with money</h4>
          <p>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        {/* Right Section */}
        <div className="col-lg-6 col-md-12 text-center">
          <img
            src={ecosystem}
            alt="Zerodha Ecosystem"
            className="ecosystem img-fluid"
          />

          <div className="opt mt-4">
            <a href="#" className="text-decoration-none">
              Explore our products{" "}
              <i className="fa-solid fa-angle-right"></i>
            </a>

            <a href="#" className="text-decoration-none">
              Try Kite demo{" "}
              <i className="fa-solid fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;