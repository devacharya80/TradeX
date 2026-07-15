import zerodhaFundhouse from "../../assets/zerodhaFundhouse.png";
import sensibull from "../../assets/sensibullLogo.svg";
import tijori from "../../assets/tijori.svg";
import streak from "../../assets/streak-logo.png";
import smallcase from "../../assets/smallcaseLogo.png";
import ditto from "../../assets/dittoLogo.png";

import "./productStyle.css";

function Universe() {
  const partners = [
    {
      img: zerodhaFundhouse,
      desc: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      img: sensibull,
      desc: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
    },
    {
      img: tijori,
      desc: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
    },
    {
      img: streak,
      desc: "Systematic trading platform that allows you to create and backtest strategies without coding.",
    },
    {
      img: smallcase,
      desc: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
    },
    {
      img: ditto,
      desc: "Personalized advice on life and health insurance. No spam and no mis-selling.",
    },
  ];

  return (
    <section className="container universe-section py-5">
      <div className="text-center mb-5">
        <h2>The Zerodha Universe</h2>

        <p className="text-muted fs-5 mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row g-5">
        {partners.map((partner, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 text-center">
            <img
              src={partner.img}
              alt=""
              className="img-fluid partner-logo mb-4"
            />

            <p className="text-muted partner-desc">{partner.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <button className="btn btn-primary px-5 py-2 fs-5">
          Sign up for free
        </button>
      </div>
    </section>
  );
}

export default Universe;
