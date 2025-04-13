"use client";

import LoginModel from "@/components/modals/LoginModal";
import RegisterModel from "@/components/modals/RegisterModal";
import React from "react";

export default function Home() {

  const [openLogin, setOpenLogin] = React.useState(false);
  const [openRegister, setOpenRegister] = React.useState(false);

  return (
    <div className="flex justify-end">

      <div className="flex gap-4 p-4">
        <button onClick={() => setOpenLogin(true)} className="bg-blue-500 text-white p-2 rounded-md">Login</button>
        <button onClick={() => setOpenRegister(true)} className="bg-blue-500 text-white p-2 rounded-md">Register</button>
      </div>
      <LoginModel isOpen={openLogin} onClose={() => (setOpenLogin(false))} />
      <RegisterModel isOpen={openRegister} onClose={() => (setOpenRegister(false))} />
    </div>
  );
}
