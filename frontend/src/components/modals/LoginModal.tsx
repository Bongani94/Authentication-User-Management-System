'use client';

import { useState } from "react";
import Modal from "../ui/Modal";
import api from "@/lib/api";

export default function LoginModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      console.log(res.data);
      onClose();
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-2 border backdrop-blur border-blue-300 shadow-md rounded hover:bg-blue-100/10 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-opacity-50"
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full p-2 border backdrop-blur border-blue-300 shadow-md rounded hover:bg-blue-100/10 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-opacity-50"
        />
        <button type="submit" className="w-full bg-blue-600/30 text-white py-2 rounded hover:bg-blue-700/10 transition">
          Sign In
        </button>
      </form>
    </Modal>
  );
}
