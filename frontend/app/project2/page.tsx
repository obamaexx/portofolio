import React from "react";

export default function ContactSection() {
  return (
    <section className="bg-[#f4e2cb] px-6 py-20 sm:px-10 lg:px-14" id="kontak">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-8 border-b border-[#d3c3ac]/70 pb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-[#c15a2d]">mari berbicara</p>
            <div className="flex flex-wrap items-end gap-4">
              <h2 className="text-5xl font-serif text-[#1e160f] sm:text-6xl">Ada cerita untuk</h2>
              <span className="text-5xl italic text-[#c45b2d] sm:text-6xl">dibangun?</span>
            </div>
          </div>
          <div className="text-sm text-[#4c4138]">§ kontak</div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <p className="max-w-xl text-base leading-8 text-[#53473f] sm:text-lg">
              Saya menerima proyek kolaborasi, komisi ilustrasi, dan konsultasi direksi seni. Ceritakan projekmu — sekecil apa pun.
            </p>
            <a
              href="#cv"
              className="inline-flex items-center text-base font-semibold text-[#b95728] underline-offset-4 transition hover:text-[#8b3810]"
            >
              Unduh CV lengkap ↗
            </a>
          </div>

          <div className="space-y-6 rounded-[1.25rem] border border-[#e6ddcd] bg-white/90 p-8 shadow-[0_24px_64px_-40px_rgba(38,24,15,0.18)]">
            <div className="grid gap-4 text-sm text-[#7d6b5a]">
              <div className="flex items-center justify-between border-b border-[#ddd1c1] pb-4">
                <span>Email</span>
                <span className="text-[#1e160f]">@arpobama09@gmail.com</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#ddd1c1] pb-4">
                <span>Telepon</span>
                <span className="text-[#1e160f]">+62 823 96687339</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Instagram</span>
                <span className="text-[#1e160f]">@ahmdrkyz_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
