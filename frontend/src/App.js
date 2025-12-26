import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Category from "./Category";
import Subcategory from "./Subcategory";
import Product from "./Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/subcategories" element={<Subcategory />} />
        <Route path="/products" element={<Product />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
