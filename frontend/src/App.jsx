import HomePage from "./landingPage/home/HomePage"
import Pricing from "./landingPage/home/Pricing";
import About from "./landingPage/about/AboutPage"
import Products from "./landingPage/Products/ProductsPage"
import Signup from "./landingPage/signup/Signup"
import Support from "./landingPage/support/SupportPage"

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <NavBar/>
    <HomePage/>
    <Signup/>
    <About/>
    <Pricing/>
    <Support/>
    <Footer/>
    </>
  )
}

export default App
