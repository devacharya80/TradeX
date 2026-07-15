import awardImg from "../../assets/largestBroker.svg";
import pressLogos from "../../assets/pressLogos.png";
import landingHero from "../../assets/landing.svg";

function Awards() {
  return (
    <div className="container">
      <div className="row p-5">

        <div className="col">
          <img src={awardImg} alt="" />
        </div>

        <div className="col p-5 ">
          <h1>Largest stock broker in India</h1>
          <p className="">
            2+ million Zerodha clients contribute to over 15% of all retail
            order valumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col">
              <ul className="lists">
                <li>Futures and Options</li>
                <li>Commodity derivates</li>
                <li>Currency derivates</li>
              </ul>
            </div>
            <div className="col">
              <ul className="lists">
                <li>Stock & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Growth</li>
              </ul>
            </div>
            <img src={pressLogos} alt="pressLogos" className="pressLogos mt-5"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
