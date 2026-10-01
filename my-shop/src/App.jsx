import Home from "./pages/Home/Home"
import Contact from "./pages/Contact/Contact"
import Products from "./pages/Products/Products"
import Cart from "./pages/Cart/Cart"
import Category from "./pages/Category/Category"
import Details from "./pages/Details/Details"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Checkout from "./pages/Checkout/Checkout"
import Confirmation from "./pages/Confirmation/Confirmation"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "./pages/Profile/Profile"
import ProtectedRoute from "./components/ProtectedRoute"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/category" element={<Category />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
