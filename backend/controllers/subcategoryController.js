const db = require("../config/db");


exports.getSubcategories = (req, res) => {
  const sql = "SELECT * FROM subcategories";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }
    res.json(result);
  });
};


exports.addSubcategory = (req, res) => {
  const { name, category_id } = req.body;

  if (!name || !category_id) {
    return res.status(400).json({ message: "All fields required" });
  }

  const sql =
    "INSERT INTO subcategories (name, category_id) VALUES (?, ?)";

  db.query(sql, [name, category_id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }
    res.json({ message: "Subcategory added successfully" });
  });
};
