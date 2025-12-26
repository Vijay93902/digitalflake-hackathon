import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log("Login clicked");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Response:", data);

      if (res.ok) {
      
        localStorage.setItem("token", data.token);

        
        window.location.href = "/dashboard";
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Backend not reachable");
    }
  };

  return (
    <div style={{ width: "300px", margin: "100px auto" }}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <button onClick={handleLogin} style={{ width: "100%" }}>
        Login
      </button>
    </div>
  );
}

export default Login;
