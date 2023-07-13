import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Shop } from "./pages/shop/shop";
import { ShopContextProvider } from "./context/shop-context";

import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
