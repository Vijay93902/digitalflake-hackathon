const db = require("../config/db");

exports.getCategories = (req, res) => {
  const sql = "SELECT * FROM categories";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }
    res.json(results);
  });
};

exports.addCategory = (req, res) => {
  const { name, description } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  const sql = "INSERT INTO categories (name, description) VALUES (?, ?)";

  db.query(sql, [name, description], (err) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }
    res.json({ message: "Category added successfully" });
  });
};
