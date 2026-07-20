import React from "react";

export default function FooterSection() {
  return (
    <footer className="bg-[#f4e2cb] px-6 py-16 sm:px-10 lg:px-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-[#d3c3ac]/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-serif text-[#1e160f] sm:text-5xl">
            obamaexx<span className="text-[#c45b2d]">.</span>
          </h2>
          <p className="text-sm text-[#6f6358]">Dirancang & ditulis tangan · 2026</p>
        </div>

        <p className="text-sm uppercase tracking-[0.45em] text-[#6f6358] sm:text-right">
          dibuat dengan tinta, kopi, & kode.
        </p>
      </div>
    </footer>
  );
}
