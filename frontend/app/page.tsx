import Navbar from "./navbar/page";
import Hero from "./hero/page";
import ProjectSection from "./project/page";
import SertifikatSection from "./sertifikat/page";
import ContactSection from "./project2/page";
import FooterSection from "./footer/page";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f4e2cb]">
        <Hero />
        <ProjectSection />
        <SertifikatSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
}
