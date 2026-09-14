import React from "react";

export default function Navbar() {
  return (
    <header className="bg-[#f4e2cb] border-b border-[#d6beaa]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3 text-[#2f251f]">
          <span className="text-lg font-semibold tracking-[0.08em]">my portofolio</span>
          <span className="h-2.5 w-2.5 rounded-full bg-[#b25c32]" />
        </div>

        <nav className="flex flex-1 justify-center gap-8 text-sm font-medium text-[#3f332b]">
          <a href="#perkenalan" className="transition hover:text-[#1f1610]">Perkenalan</a>
          <a href="#karya" className="transition hover:text-[#1f1610]">Karya</a>
          <a href="#sertifikat" className="transition hover:text-[#1f1610]">Sertifikat</a>
          <a href="#kontak" className="transition hover:text-[#1f1610]">Kontak</a>
        </nav>

        <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[#3f332b]">
         <a href="admin">admin</a>
        </div>
      </div>
    </header>
  );
}
