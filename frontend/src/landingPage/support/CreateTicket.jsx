import "./supportStyle.css";

function CreateTicket() {
  return (
    <div className="container my-5">
      <h2 className="mb-5">To create a ticket, select a relevant topic</h2>

      <div className="row gy-5">
        {/* Account Opening */}
        <div className="col-lg-4 col-md-6">
          <h5>
            <i className="fa fa-plus-circle me-2"></i>
            Account Opening
          </h5>

          <a href="#">Online Account Opening</a>
          <br />
          <a href="#">Offline Account Opening</a>
          <br />
          <a href="#">Company, Partnership and HUF Account Opening</a>
          <br />
          <a href="#">NRI Account Opening</a>
          <br />
          <a href="#">Charges at Zerodha</a>
          <br />
          <a href="#">Zerodha IDFC FIRST Bank 3-in-1 Account</a>
          <br />
          <a href="#">Getting Started</a>
        </div>

        {/* Your Zerodha Account */}
        <div className="col-lg-4 col-md-6">
          <h5>
            <i className="fa fa-user me-2"></i>
            Your Zerodha Account
          </h5>

          <a href="#">Login Credentials</a>
          <br />
          <a href="#">Account Modification and Segment Addition</a>
          <br />
          <a href="#">DP ID and Bank Details</a>
          <br />
          <a href="#">Your Profile</a>
          <br />
          <a href="#">Transfer and Conversion of Shares</a>
        </div>

        {/* Kite */}
        <div className="col-lg-4 col-md-6">
          <h5>
            <i className="fa fa-bar-chart me-2"></i>
            Kite
          </h5>

          <a href="#">Margin/Leverage, Product and Order Types</a>
          <br />
          <a href="#">Kite Web and Mobile</a>
          <br />
          <a href="#">Trading FAQs</a>
          <br />
          <a href="#">Corporate Actions</a>
          <br />
          <a href="#">Sentinel</a>
          <br />
          <a href="#">Kite API</a>
          <br />
          <a href="#">Pi and other platforms</a>
          <br />
          <a href="#">StockReports+</a>
          <br />
          <a href="#">GTT</a>
        </div>

        {/* Funds */}
        <div className="col-lg-4 col-md-6">
          <h5>
            <i className="fa fa-credit-card me-2"></i>
            Funds
          </h5>

          <a href="#">Adding Funds</a>
          <br />
          <a href="#">Fund Withdrawal</a>
          <br />
          <a href="#">eMandates</a>
          <br />
          <a href="#">Adding Bank Accounts</a>
        </div>

        {/* Console */}
        <div className="col-lg-4 col-md-6">
          <h5>
            <i className="fa fa-circle-o me-2"></i>
            Console
          </h5>

          <a href="#">Reports</a>
          <br />
          <a href="#">Ledger</a>
          <br />
          <a href="#">Portfolio</a>
          <br />
          <a href="#">60 Day Challenge</a>
          <br />
          <a href="#">IPO</a>
          <br />
          <a href="#">Referral Program</a>
        </div>

        {/* Coin */}
        <div className="col-lg-4 col-md-6">
          <h5>
            <i className="fa fa-circle-o me-2"></i>
            Coin
          </h5>

          <a href="#">Understanding Mutual Funds</a>
          <br />
          <a href="#">About Coin</a>
          <br />
          <a href="#">Buying and Selling through Coin</a>
          <br />
          <a href="#">Starting an SIP</a>
          <br />
          <a href="#">Managing your Portfolio</a>
          <br />
          <a href="#">Coin App</a>
          <br />
          <a href="#">Moving to Coin</a>
          <br />
          <a href="#">Government Securities</a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
