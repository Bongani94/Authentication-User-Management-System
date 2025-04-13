'use client';

import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-blue/10 bg-opacity-40 flex items-center justify-center z-50 backdrop-blur">
      <div className="bg-white/10 p-6 rounded-xl w-full max-w-md shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-gray-500">
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
