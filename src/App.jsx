import { Footer } from "./components/layouts/footer/Footer";
import { Navbar } from "./components/layouts/navbar/Navbar";
import Cart from "./components/pages/cart/Cart";
import Checkout from "./components/pages/checkout/Checkout";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router";
import { CartContextProvider } from "./context/CartContext";
import { Toaster } from "sonner";

function App() {
  return (
    <BrowserRouter>
      <Toaster richColors duration={3000} />
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/itemDetail/:id" element={<ItemDetail />} />
        </Routes>
      </CartContextProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
