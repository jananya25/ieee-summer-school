"use client";
import React, { useState } from "react";
// import { Input, Button } from "@/components/ui"; // Uncomment if using shadcn/ui

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: Login logic
    setTimeout(() => {
      setLoading(false);
      alert("Logged in!");
    }, 1000);
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow p-8 mt-16">
      <h1 className="text-2xl font-bold text-primary mb-6 text-center">
        Login
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full px-4 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="hoverable w-full px-4 py-2 rounded bg-primary text-white font-semibold"
          disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
