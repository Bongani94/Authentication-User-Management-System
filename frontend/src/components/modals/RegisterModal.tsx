'use client';

import { useState } from "react";
import Modal from "../ui/Modal";
import api from "@/lib/api";

type FormType = {
  first_name: string;
  last_name: string;
  phone_number: string;
  country: string;
  profile_picture?: string;
  role: string;
  email: string;
  password: string;
  confirm_password: string;
  terms_and_conditions: string;
  created_at?: string;
  updated_at?: string;
};

export default function RegisterModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState<FormType>({
    first_name: "",
    last_name: "",
    phone_number: "",
    country: "",
    role: "",
    email: "",
    password: "",
    confirm_password: "",
    terms_and_conditions: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirm_password) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await api.post("/auth/register", form);
      console.log("✅ Registered:", res.data);
      onClose();
    } catch (err: unknown) {
      console.error("❌ Registration failed:", (err as Error).message);
    }
  };

  const update = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="first_name"
          type="text"
          placeholder="First Name"
          value={form.first_name}
          onChange={update}
          required
          className="w-full p-2 border backdrop-blur border-blue-300 shadow-md rounded hover:bg-blue-100/10 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-opacity-50"
        />
        <input
          name="last_name"
          type="text"
          placeholder="Last Name"
          value={form.last_name}
          onChange={update}
          required
          className="w-full p-2 border backdrop-blur border-blue-300 shadow-md rounded hover:bg-blue-100/10 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-opacity-50"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={update}
          required
          className="w-full p-2 border backdrop-blur border-blue-300 shadow-md rounded hover:bg-blue-100/10 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-opacity-50"
        />
        <input
          name="phone_number"
          type="tel"
          placeholder="Phone Number"
          value={form.phone_number}
          onChange={update}
          required
          className="w-full p-2 border backdrop-blur border-blue-300 shadow-md rounded hover:bg-blue-100/10 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-opacity-50"
        />
        <input
          name="country"
          type="text"
          placeholder="Country"
          value={form.country}
          onChange={update}
          required
          className="w-full p-2 border backdrop-blur border-blue-300 shadow-md rounded hover:bg-blue-100/10 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-opacity-50"
        />
        <input
            name="profile_picture"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setForm({ ...form, profile_picture: URL.createObjectURL(file) });
              }
            }}
            className="w-full p-2 border backdrop-blur border-blue-300 shadow-md rounded hover:bg-blue-100/10 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-opacity-50"
            />
        <input
          name="role"
          type="text"
          placeholder="Role"
          value={form.role}
          onChange={update}
          required
          className="w-full p-2 border backdrop-blur border-blue-300 shadow-md rounded hover:bg-blue-100/10 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-opacity-50"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={update}
          required
          className="w-full p-2 border backdrop-blur border-blue-300 shadow-md rounded hover:bg-blue-100/10 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-opacity-50"
        />
        <input
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          value={form.confirm_password}
          onChange={update}
          required
          className="w-full p-2 border backdrop-blur border-blue-300 shadow-md rounded hover:bg-blue-100/10 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-opacity-50"
        />
        
         <input
          name="terms_and_conditions"
          type="checkbox"
          required
          className="mr-2 accent-blue-300/10 bg-blue-100"/>
          <label htmlFor="terms_and_conditions" className="text-sm">
          I agree to the terms and conditions
        </label>
        <button
          type="submit"
          className="w-full bg-blue-600/30 text-white py-2 rounded hover:bg-blue-700/10 transition"
        >
          Register
        </button>
      </form>
    </Modal>
  );
}
