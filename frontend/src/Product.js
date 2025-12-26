import { useEffect, useState } from "react";

function Product() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [subcategoryId, setSubcategoryId] = useState("");

  // fetch products
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/api/products");
    const data = await res.json();
    setProducts(data);
  };

  // add product
  const handleAddProduct = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        category_id: categoryId,
        subcategory_id: subcategoryId,
      }),
    });

    setName("");
    setPrice("");
    setCategoryId("");
    setSubcategoryId("");
    fetchProducts();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Products</h2>

      {/* Add Product Form */}
      <form onSubmit={handleAddProduct} style={{ marginBottom: "20px" }}>
        <input
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          placeholder="Category ID"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          required
        />
        <input
          placeholder="Subcategory ID"
          value={subcategoryId}
          onChange={(e) => setSubcategoryId(e.target.value)}
          required
        />
        <button type="submit">Add Product</button>
      </form>

      {/* Product Table */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Subcategory</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.categoryName}</td>
              <td>{p.subcategoryName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Product;
