import zero from "../../assets/pricingMF.svg";
import other from "../../assets/other-trades.svg";

import "./pricingStyle.css";

function Hero() {
  return (
    <section className="container py-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-semibold">Pricing</h1>

        <p className="text-muted fs-5 mt-3">
          Free equity investments and flat ₹20 intraday and F&O trades
        </p>
      </div>

      {/* Cards */}
      <div className="row text-center g-5">
        {/* Card 1 */}
        <div className="col-12 col-md-6 col-lg-4">
          <img
            src={zero}
            alt="Free equity delivery"
            className="img-fluid pricing-img mb-4"
          />

          <h2 className="pricing-title mb-3">Free equity delivery</h2>

          <p className="pricing-desc">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0
            brokerage.
          </p>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-md-6 col-lg-4">
          <img
            src={other}
            alt="Intraday"
            className="img-fluid pricing-img mb-4"
          />

          <h2 className="pricing-title mb-3">Intraday and F&amp;O trades</h2>

          <p className="pricing-desc">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-md-6 col-lg-4 mx-auto">
          <img
            src={zero}
            alt="Free direct MF"
            className="img-fluid pricing-img mb-4"
          />

          <h2 className="pricing-title mb-3">Free direct MF</h2>

          <p className="pricing-desc">
            All direct mutual fund investments are absolutely free — ₹0
            commissions &amp; DP charges.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
