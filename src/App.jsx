// import Navbar from "./layouts/Navbar";
// import Container from './Components/Container/Container'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop/Shop";
import Home from "./pages/Home/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product details" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <Container/> */}
    </>
  );
}

export default App;
