function Hero() {
  return (
    <section className="container-fluid" id="support-hero">
      <div className="container">
        <div id="support-wrapper">
          <h4>Support Portal</h4>
          <a href="#">Track Tickets</a>
        </div>

        <div className="row py-5">
          <div className="col-lg-6">
            <h2 className="mb-4">
              Search for an answer or browse help topics to create a ticket
            </h2>

            <input
              type="text"
              className="form-control search-box"
              placeholder="Eg. how do I activate F&O, why is my order getting rejected..."
            />

            <div className="mt-4">
              <a href="#">Track account opening</a>
              <a href="#">Track segment activation</a>
              <a href="#">Intraday margins</a>
              <a href="#">Kite user manual</a>
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1">
            <h3>Featured</h3>

            <ol className="mt-3">
              <li>
                <a href="#">Current Takeovers and Delisting - January 2024</a>
              </li>

              <li className="mt-3">
                <a href="#">Latest Intraday leverages - MIS & CO</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
