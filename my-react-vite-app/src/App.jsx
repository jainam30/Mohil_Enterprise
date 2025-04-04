import React, { useState } from "react";
import './App.css';

function App() {
  const [role, setRole] = useState("admin");
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
    setCredentials(
      selectedRole === "admin"
        ? { username: "admin", password: "admin123" }
        : { username: "supervisor", password: "supervisor123" }
    );
  };

  const handleLogin = () => {
    alert(`Logging in as ${role}\nUsername: ${credentials.username}\nPassword: ${credentials.password}`);
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen w-full bg-cover bg-center bg-no-repeat px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1740&q=80')",
      }}
    >
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-6 bg-white shadow-2xl rounded-2xl bg-opacity-90 backdrop-blur-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">Login</h2>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between bg-gray-200 p-2 rounded-lg">
            <button
              className={`flex-1 py-2 rounded-md font-semibold ${role === "admin" ? "bg-blue-500 text-white" : "bg-gray-100 text-black"}`}
              onClick={() => handleRoleChange("admin")}
            >
              Admin
            </button>
            <button
              className={`flex-1 py-2 rounded-md font-semibold ${role === "supervisor" ? "bg-purple-500 text-white" : "bg-gray-100 text-black"}`}
              onClick={() => handleRoleChange("supervisor")}
            >
              Supervisor
            </button>
          </div>
          <input
            type="text"
            value={credentials.username}
            disabled
            className="mt-4 bg-gray-100 text-gray-700 p-2 rounded-md"
          />
          <input
            type="password"
            value={credentials.password}
            disabled
            className="bg-gray-100 text-gray-700 p-2 rounded-md"
          />
          <button
            onClick={handleLogin}
            className="mt-4 w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition-all"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
