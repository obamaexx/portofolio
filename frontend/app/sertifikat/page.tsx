import React from "react";

export default function SertifikatSection() {
  return (
    <section className="bg-[#f4e2cb] px-6 py-20 sm:px-10 lg:px-14" id="sertifikat">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-8 border-b border-[#d3c3ac]/70 pb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-[#c15a2d]">rekam jejak</p>
            <div className="flex flex-wrap items-end gap-4">
              <h2 className="text-5xl font-serif text-[#1e160f] sm:text-6xl">Sertifikat</h2>
              <span className="text-5xl italic text-[#c45b2d] sm:text-6xl">&amp; pelatihan</span>
            </div>
          </div>
          <div className="text-sm text-[#4c4138]">§ sertifikat</div>
        </div>

        <div className="space-y-6 border-t border-[#d3c3ac]/60 pt-8 text-[#2f241d]">
          <div className="flex flex-col gap-6 border-b border-[#ddd1c1] pb-8 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs uppercase tracking-[0.35em] text-[#7d6b5a]">2024</span>
            <h3 className="text-2xl font-serif text-[#1e160f]">Type &amp; Lettering</h3>
            <span className="text-sm text-[#5d4d43]">Type@Cooper</span>
          </div>

          <div className="flex flex-col gap-6 border-b border-[#ddd1c1] pb-8 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs uppercase tracking-[0.35em] text-[#7d6b5a]">2023</span>
            <h3 className="text-2xl font-serif text-[#1e160f]">Art Direction Intensive</h3>
            <span className="text-sm text-[#5d4d43]">SVA NYC</span>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs uppercase tracking-[0.35em] text-[#7d6b5a]">2022</span>
            <h3 className="text-2xl font-serif text-[#1e160f]">UX Foundations</h3>
            <span className="text-sm text-[#5d4d43]">IDEO U</span>
          </div>
        </div>
      </div>
    </section>
  );
}
