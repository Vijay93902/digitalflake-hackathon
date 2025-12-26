require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const subcategoryRoutes = require("./routes/subcategoryRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/subcategories", subcategoryRoutes);
app.use("/api/products", productRoutes);


app.get("/api/test", (req, res) => {
  res.send("SERVER OK");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
