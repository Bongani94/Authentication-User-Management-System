'use client';

import { useModal } from "@/hooks/useModal";
import LoginModal from "../modals/LoginModal";
import RegisterModal from "../modals/RegisterModal";

export default function Navbar() {
  const login = useModal();
  const register = useModal();

  return (
    <div className="flex items-center justify-end p-4 gap-4">
      <button onClick={login.open} className="text-sm px-3 py-1 border rounded">Login</button>
      <button onClick={register.open} className="text-sm px-3 py-1 border rounded bg-blue-500 text-white">Register</button>

      <LoginModal isOpen={login.isOpen} onClose={login.close} />
      <RegisterModal isOpen={register.isOpen} onClose={register.close} />
    </div>
  );
}
