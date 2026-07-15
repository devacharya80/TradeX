function RightSection({
  image,
  title,
  description,
  tryDemo,
  learnMore,
  googleStore,
  appStore,
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-5">
        {/* Content */}
        <div className="col-12 col-lg-5 order-2 order-lg-1">
          <h2 className="fw-semibold mb-4">{title}</h2>

          <p className="text-muted mb-4">{description}</p>

          {(tryDemo || learnMore) && (
            <div className="mb-4">
              {tryDemo && (
                <a href="#" className="text-decoration-none me-4">
                  {tryDemo} <i className="fa-solid fa-angle-right"></i>
                </a>
              )}

              {learnMore && (
                <a href="#" className="text-decoration-none">
                  {learnMore} <i className="fa-solid fa-angle-right"></i>
                </a>
              )}
            </div>
          )}

          {(googleStore || appStore) && (
            <div className="d-flex flex-wrap gap-3">
              {googleStore && (
                <img
                  src={googleStore}
                  alt="Google Play"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              )}

              {appStore && (
                <img
                  src={appStore}
                  alt="App Store"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              )}
            </div>
          )}
        </div>

        {/* Image */}
        <div className="col-12 col-lg-7 text-center order-1 order-lg-2">
          <img src={image} alt={title} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
