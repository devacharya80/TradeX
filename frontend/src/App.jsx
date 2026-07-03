import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./landingPage/home/HomePage";
import Pricing from "./landingPage/home/Pricing";
import About from "./landingPage/about/AboutPage";
import Products from "./landingPage/Products/ProductsPage";
import Signup from "./landingPage/signup/Signup";
import Support from "./landingPage/support/SupportPage";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound"

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;