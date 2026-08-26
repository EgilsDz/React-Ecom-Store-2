import Home from "./pages/Home/Home"
import Contact from "./pages/Contact/Contact"
import Products from "./pages/Products/Products"
import Cart from "./pages/Cart/Cart"
import Details from "./pages/Details/Details"
import { BrowserRouter, Routes, Route } from "react-router-dom"




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
