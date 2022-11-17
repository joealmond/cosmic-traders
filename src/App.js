import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useState } from "react";
import Outpost from "./outpost/Outpost";
import Checkout from "./checkout/Checkout";
import ProductDetails from "./products/ProductDetails";
import Header from "./header/Header";
import styles from "./App.module.scss";

function App() {
  const [cart, setCart] = useState([]);
  const PublicUrl = {};
  const publicUrl = new PublicUrl(process.env.PUBLIC_URL);
  return (
    <BrowserRouter basename={publicUrl}>
      <Header />
      <div className={styles.content}>
        <Routes>
          <Route
            basename={publicUrl}
            path="/outpost"
            element={<Outpost cart={cart} setCart={setCart} />}
          />
          <Route
            basename={publicUrl}
            path="/checkout"
            element={<Checkout cart={cart} />}
          />
          <Route
            basename={publicUrl}
            path="/product-details/:slug"
            element={<ProductDetails />}
          />
          <Route
            basename={publicUrl}
            path="/"
            element={<Navigate to="/outpost" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
