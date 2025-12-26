import { useEffect, useState } from "react";

function Category() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Fetch categories
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/categories");
      const data = await res.json();
      setCategories(data);
    } catch (err) {
      console.error("Error fetching categories", err);
    }
  };

  // Add category
  const handleAddCategory = async (e) => {
    e.preventDefault();

    if (!name) {
      alert("Category name required");
      return;
    }

    await fetch("http://localhost:5000/api/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description }),
    });

    setName("");
    setDescription("");
    fetchCategories();
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Category</h2>

      {/* Add Category Form */}
      <form onSubmit={handleAddCategory} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: "10px" }}
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ marginRight: "10px" }}
        />

        <button type="submit">Add</button>
      </form>

      {/* Category List */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id}>
              <td>{cat.id}</td>
              <td>{cat.name}</td>
              <td>{cat.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Category;
