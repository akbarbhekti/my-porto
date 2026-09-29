import React from 'react';
import { Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#030014] text-white flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-bold text-indigo-500 mb-4 animate-bounce">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Halaman Tidak Ditemukan</h2>
      <p className="text-gray-400 max-w-sm mb-6">Halaman yang Anda tuju mungkin sudah dihapus atau tidak pernah ada.</p>
      <a href="/" className="px-6 py-2.5 bg-indigo-600 rounded-xl text-white flex items-center gap-2 hover:bg-indigo-700">
        <Home className="w-4 h-4" /> Kembali ke Beranda
      </a>
    </div>
  );
}