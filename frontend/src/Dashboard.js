import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Dashboard</h1>
      <p>You are logged in successfully 🎉</p>

      <div style={{ marginTop: "20px" }}>
        <Link to="/categories">
          <button style={{ marginRight: "10px" }}>Categories</button>
        </Link>

        <Link to="/subcategories">
          <button style={{ marginRight: "10px" }}>Subcategories</button>
        </Link>

        {/* ✅ ADD THIS */}
        <Link to="/products">
          <button>Products</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
