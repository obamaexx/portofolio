import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f4e2cb] px-6 py-20 sm:px-10 lg:px-14">
      <div className="absolute left-0 top-1/2 hidden h-10 w-52 -translate-y-1/2 rotate-[-90deg] items-center justify-center text-sm uppercase tracking-[0.5em] text-[#8b7d71] sm:flex">
        portofolio · 2025
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-2xl">
          <p className="mb-8 text-sm font-semibold uppercase tracking-[0.4em] text-[#c05c29]">
            halo, saya obama
          </p>
          <div className="space-y-3">
            <h1 className="text-[4.25rem] font-serif leading-[0.95] text-[#12100d] sm:text-[5rem]">
              rezky
            </h1>
            <h2 className="text-[4rem] italic leading-[0.9] text-[#c15029] sm:text-[5rem]">
              Obama
            </h2>
          </div>
          <p className="mt-10 max-w-xl text-base leading-8 text-[#3f352f] sm:text-lg">
            Desainer & Ilustrator Multidisiplin. Saya membangun bahasa visual untuk merek, buku, dan ruang.
            Bekerja di antara kertas, kode, dan cat air — mencari ritme di setiap komposisi.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#karya"
              className="inline-flex items-center justify-center rounded-full bg-[#15110d] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#2f251f]"
            >
              Lihat karya →
            </a>
            <a
              href="#cv"
              className="inline-flex items-center justify-center rounded-full border border-[#15110d] bg-white/90 px-8 py-4 text-sm font-semibold text-[#15110d] transition hover:bg-[#fcf6ee]"
            >
              Unduh CV
            </a>

            <span className="text-sm text-[#4f443d]">· makassar, Indonesia</span>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 m-auto h-[22rem] w-[22rem] rounded-full border border-dashed border-[#c46a45]/40" />
          <div className="relative h-40 w-40 rounded-full bg-[#c45f34] shadow-[0_0_0_1px_rgba(196,95,52,0.6)] sm:h-52 sm:w-52" />
        </div>
      </div>
    </section>
  );
}
