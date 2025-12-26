const db = require("../config/db");

const getProducts = (req, res) => {
  const sql = `
    SELECT 
      p.id,
      p.name,
      p.price,
      c.name AS category,
      s.name AS subcategory
    FROM products p
    JOIN categories c ON p.category_id = c.id
    JOIN subcategories s ON p.subcategory_id = s.id
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.error("DB Error:", err);
      return res.status(500).json({ message: "DB error" });
    }
    res.json(result);
  });
};

const addProduct = (req, res) => {
  const { name, price, category_id, subcategory_id } = req.body;

  if (!name || !price || !category_id || !subcategory_id) {
    return res.status(400).json({ message: "All fields required" });
  }

  const sql =
    "INSERT INTO products (name, price, category_id, subcategory_id) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, price, category_id, subcategory_id], (err) => {
    if (err) {
      console.error("DB Error:", err);
      return res.status(500).json({ message: "DB error" });
    }
    res.json({ message: "Product added successfully" });
  });
};

module.exports = {
  getProducts,
  addProduct,
};
