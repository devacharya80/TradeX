import education from "../../assets/education.svg";

function Education() {
  return (
    <div className="container mt-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={education} alt="education" />
          </div>
          <div className="col mt-5">
            <h2>Free and open market education</h2>
            <br />
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <p>
              
            </p>
            <a href="#" className="text-decoration-none">
              Varsity <i className="fa-solid fa-angle-right"></i>
            </a>
                <br />
                <br />
            <p>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="#" className="text-decoration-none">
              Trading Q&A <i className="fa-solid fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
