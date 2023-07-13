import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Cart } from "./pages/cart/cart";
import { Shop } from "./pages/shop/shop";
import Home from "./pages/home/Home";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
