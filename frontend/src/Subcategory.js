import { useEffect, useState } from "react";

function Subcategory() {
  const [subcategories, setSubcategories] = useState([]);
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    fetchSubcategories();
  }, []);

  const fetchSubcategories = async () => {
    const res = await fetch("http://localhost:5000/api/subcategories");
    const data = await res.json();
    setSubcategories(data);
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/subcategories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        category_id: categoryId,
      }),
    });

    setName("");
    setCategoryId("");
    fetchSubcategories();
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Subcategory</h2>

      <form onSubmit={handleAdd}>
        <input
          placeholder="Subcategory Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Category ID"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        />
        <button>Add</button>
      </form>

      <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category ID</th>
          </tr>
        </thead>
        <tbody>
          {subcategories.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.category_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Subcategory;
