import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";

export default function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@dairymasala.com");
  const [password, setPassword] = useState("admin123");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate authentication request
    setTimeout(() => {
      console.log("Email:", email);
      console.log("Password:", password);
      localStorage.setItem("token", email);
      navigate("/dashboard");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="w-full max-w-md mx-auto md:mx-0">
      <div className="mb-8 text-center md:text-left">
        <h1
          className="text-2xl font-bold tracking-tight text-primary"
          onClick={() => navigate("/dashboard")}
        >
          Sign in to your account
        </h1>
        <p className="text-subText mt-2">
          Enter your credentials to access the admin dashboard
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-subText"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@dairymasala.com"
            required
            autoComplete="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-subText"
            >
              Password
            </label>
            <a href="#" className="text-sm text-subText hover:underline">
              Forgot password?
            </a>
          </div>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="admin123"
              required
              autoComplete="current-password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
            />
            <button
              type="button"
              className="absolute right-3 top-2 text-muted-foreground"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition disabled:opacity-50 cursor-pointer hover:bg-secondary"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}
