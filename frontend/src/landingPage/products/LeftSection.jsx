function LeftSection({
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
        {/* Image */}
        <div className="col-12 col-lg-7 text-center">
          <img src={image} alt={title} className="img-fluid" />
        </div>

        {/* Content */}
        <div className="col-12 col-lg-5">
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
      </div>
    </div>
  );
}

export default LeftSection;
