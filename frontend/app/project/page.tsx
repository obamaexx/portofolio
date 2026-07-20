import React from "react";

export default function ProjectSection() {
  return (
    <section className="bg-[#f4e2cb] px-6 py-20 sm:px-10 lg:px-14" id="karya">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-8 border-b border-[#d3c3ac]/70 pb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-[#c15a2d]">karya terpilih</p>
            <div className="flex flex-wrap items-end gap-4">
              <h2 className="text-5xl font-serif text-[#1e160f] sm:text-6xl">Kumpulan</h2>
              <span className="text-5xl italic text-[#c45b2d] sm:text-6xl">karya</span>
            </div>
          </div>
          <div className="text-sm text-[#4c4138]">karya</div>
        </div>

        <div className="space-y-8">
          <article className="rounded-[1.25rem] border border-[#e6ddcd] bg-white/90 p-6 shadow-[0_24px_64px_-40px_rgba(38,24,15,0.18)] sm:p-8">
            <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-[#7d6b5a]">
              <span>branding</span>
              <span>2025</span>
            </div>

            <div className="rounded-[1rem] bg-[#f4dbca] px-6 py-20 text-center text-6xl font-semibold text-[#c25c36] sm:px-10 sm:py-28">
              01
            </div>

            <div className="mt-8 max-w-3xl">
              <h3 className="text-3xl font-serif text-[#1e160f]"></h3>
              <p className="mt-4 text-sm leading-7 text-[#6c6057]">
                Identitas visual untuk penerbit independen — sistem tipografi berbasis pena kaligrafi.
              </p>
            </div>
          </article>

          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-[1.25rem] border border-[#e6ddcd] bg-white/90 p-6 shadow-[0_24px_64px_-40px_rgba(38,24,15,0.18)] sm:p-8">
              <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-[#7d6b5a]">
                <span></span>
                <span>2024</span>
              </div>

              <div className="rounded-[1rem] bg-[#f4dbca] px-6 py-20 text-center text-6xl font-semibold text-[#c25c36] sm:px-10 sm:py-28">
                02
              </div>

              <div className="mt-8 max-w-3xl">
                <h3 className="text-2xl font-serif text-[#1e160f]"></h3>
                <p className="mt-4 text-sm leading-7 text-[#6c6057]">
                  Direksi kreatif pameran seni cetak biru, 12 karya dan katalog risograf.
                </p>
              </div>
            </article>

            <article className="rounded-[1.25rem] border border-[#e6ddcd] bg-white/90 p-6 shadow-[0_24px_64px_-40px_rgba(38,24,15,0.18)] sm:p-8">
              <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-[#7d6b5a]">
                <span>illustration</span>
                <span>2024</span>
              </div>

              <div className="rounded-[1rem] bg-[#f4dbca] px-6 py-20 text-center text-6xl font-semibold text-[#c25c36] sm:px-10 sm:py-28">
                03
              </div>

              <div className="mt-8 max-w-3xl">
                <h3 className="text-2xl font-serif text-[#1e160f]"></h3>
                <p className="mt-4 text-sm leading-7 text-[#6c6057]">
                  Serial ilustrasi editorial untuk majalah budaya bulanan.
                </p>
              </div>
            </article>
          </div>

          <article className="rounded-[1.25rem] border border-[#e6ddcd] bg-white/90 p-6 shadow-[0_24px_64px_-40px_rgba(38,24,15,0.18)] sm:p-8">
            <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-[#7d6b5a]">
              <span>web design</span>
              <span>2023</span>
            </div>

            <div className="rounded-[1rem] bg-[#f4dbca] px-6 py-20 text-center text-6xl font-semibold text-[#c25c36] sm:px-10 sm:py-28">
              04
            </div>

            <div className="mt-8 max-w-3xl">
              <h3 className="text-3xl font-serif text-[#1e160f]"></h3>
              <p className="mt-4 text-sm leading-7 text-[#6c6057]">
                Situs portofolio arsitek dengan interaksi lembut dan grid asimetris.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
