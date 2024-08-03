import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/Product/ProductDetails";
import Contact from "./pages/Contact/Contact";
import Shop from "./pages/Shop/Shop";
import Home from "./pages/Home/Home";
function App() {
    let custom_scroll = document.querySelector("*");
    let scroll_timeout = undefined;
    let ratio = 1.5; 
    custom_scroll.addEventListener("wheel", (event) => {
      clearTimeout(scroll_timeout);
      let target = custom_scroll.scrollTop + event.deltaY * ratio;
      let step = target > custom_scroll.scrollTop ? 1 : -1;
      let frame = () => {
        custom_scroll.scrollTop += step;
        if (
          (target < custom_scroll.scrollTop && step < 0) ||
          (target > custom_scroll.scrollTop && step > 0)
        ) {
          scroll_timeout = setTimeout(frame, 5);
        }
      };
      frame();
    });

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
