import Hero from "./Hero";
import Brokerage from "./Brokerage";
import openAccount from "../../components/OpenAccount.jsx";

function PricingPage() {
  return (
    <>
      <Hero />
      <openAccount />
      <Brokerage />
    </>
  );
}

export default PricingPage;
