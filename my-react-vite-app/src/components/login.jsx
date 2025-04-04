import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginPage = () => {
  const [role, setRole] = useState("admin");
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
    setCredentials(selectedRole === "admin" ? { username: "admin", password: "admin123" } : { username: "supervisor", password: "supervisor123" });
  };

  const handleLogin = () => {
    alert(`Logging in as ${role}\nUsername: ${credentials.username}\nPassword: ${credentials.password}`);
  };

  return (
    <div 
      className="flex justify-center items-center min-h-screen w-full bg-cover bg-center bg-no-repeat px-4" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7')" }}
    >
      <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-6 bg-white shadow-2xl rounded-2xl bg-opacity-90 backdrop-blur-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">Login</h2>
        <CardContent className="flex flex-col gap-4">
          <div className="flex justify-between bg-gray-200 p-2 rounded-lg">
            <Button
              className={`flex-1 text-black ${role === "admin" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
              onClick={() => handleRoleChange("admin")}
            >
              Admin
            </Button>
            <Button
              className={`flex-1 text-black ${role === "supervisor" ? "bg-purple-500 text-white" : "bg-gray-100"}`}
              onClick={() => handleRoleChange("supervisor")}
            >
              Supervisor
            </Button>
          </div>
          <Input type="text" value={credentials.username} disabled className="mt-4 bg-gray-100 text-gray-700 p-2 rounded-md" />
          <Input type="password" value={credentials.password} disabled className="bg-gray-100 text-gray-700 p-2 rounded-md" />
          <Button onClick={handleLogin} className="mt-4 w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition-all">Login</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;