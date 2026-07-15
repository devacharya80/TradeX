import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

import productKite from "../../assets/kite.png";
import googleStore from "../../assets/googlePlayBadge.svg";
import appStore from "../../assets/appstoreBadge.svg";

import coin from "../../assets/coin.png";
import varsity from "../../assets/varsity.png";

import console from "../../assets/console.png";
import kiteconnect from "../../assets/kiteconnect.png";

function ProductsPage() {
  return (
    <>
      <Hero />

      <LeftSection
        image={productKite}
        title="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        googleStore={googleStore}
        appStore={appStore}
        tryDemo="Try Demo"
        learnMore="Learn More"
      />

      <RightSection
        title={"Console"}
        description={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        googleStore={googleStore}
        appStore={appStore}
        image={console}
      />

      <LeftSection
        image={coin}
        title="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        googleStore={googleStore}
        appStore={appStore}
      />

      <RightSection
        image={kiteconnect}
        title={"Kite Connect API"}
        description={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
      />

      <LeftSection
        image={varsity}
        title="Varsity Mobile"
        description="An easy-to-grasp collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googleStore={googleStore}
        appStore={appStore}
      />

      <h3 className="text-muted fs-5 text-center">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </h3>

      <Universe />
    </>
  );
}

export default ProductsPage;
