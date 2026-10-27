import React, { useState } from "react";
import CardProject from "../components/CardProject";
import Certificate from "../components/Certificate";
import { useLanguage } from "../context/LanguageContext";

// DAFTAR PROYEK RESMI KAMU
const myProjects = [
  {
    id: 1,
    Title: "Tosalign",
    Description: "Website resmi penyedia perawatan gigi modern 'Gigi Rapi Tanpa Behel Dengan Clear Aligner', menghadirkan informasi layanan, testimoni pasien bergaransi, dan konsultasi interaktif.",
    Link: "https://www.tosalign.com/",
    Img: "/tosalign.png",
  },
  {
    id: 2,
    Title: "Depo Bangunan Corporate",
    Description: "Portal resmi korporasi PT Caturkarda Depo Bangunan Tbk yang menyajikan profil perusahaan, informasi hubungan investor (Investor Relations), tata kelola perusahaan, dan berita terkini secara terstruktur dan profesional.",
    Link: "https://corporate.depobangunan.co.id/",
    Img: "/depobangunan.png",
  },
];

// DAFTAR SKILL
const skills = [
  { name: "HTML5 & CSS3", category: "Frontend Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "JavaScript", category: "Programming Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", category: "Frontend Library", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind CSS", category: "CSS Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", category: "Backend Runtime", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", category: "Relational Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Supabase", category: "Backend as a Service", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "Git & GitHub", category: "Version Control", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

export default function Portofolio() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("projects");
  const [certificates, setCertificates] = useState([]);

  return (
    <div className="py-24 px-6 lg:px-16 bg-[#0A0D10] text-white" id="Portofolio">
      
      {/* Header Skills */}
      <div className="text-center space-y-3 mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          {t.portfolio.skillsTitle1} <span className="text-[#2dd4bf]">{t.portfolio.skillsTitle2}</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#2dd4bf] to-transparent rounded-full mx-auto" />
      </div>

      {/* Grid Skills */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
        {skills.map((skill) => (
          <div 
            key={skill.name}
            className="flex items-center gap-4 p-4 rounded-xl bg-[#12161D] border border-white/5 hover:border-[#2dd4bf]/40 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="w-12 h-12 rounded-lg bg-black/30 p-2 flex items-center justify-center shrink-0">
              <img src={skill.icon} alt={skill.name} className="w-8 h-8 object-contain" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">{skill.name}</h4>
              <p className="text-xs text-gray-400 mt-0.5">{skill.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Showcase Proyek & Sertifikat */}
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === "projects" 
                ? "bg-[#2dd4bf] text-[#0A0D10]" 
                : "bg-[#12161D] text-gray-400 hover:text-white"
            }`}
          >
            {t.portfolio.tabProjects} ({myProjects.length})
          </button>
          <button
            onClick={() => setActiveTab("certificates")}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === "certificates" 
                ? "bg-[#2dd4bf] text-[#0A0D10]" 
                : "bg-[#12161D] text-gray-400 hover:text-white"
            }`}
          >
            {t.portfolio.tabCertificates} ({certificates.length})
          </button>
        </div>

        {/* Daftar Proyek */}
        {activeTab === "projects" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {myProjects.map((p) => (
              <CardProject key={p.id} {...p} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.length > 0 ? (
              certificates.map((c) => (
                <Certificate key={c.id} ImgSertif={c.Img} />
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-3 py-8">
                Belum ada sertifikat yang ditampilkan.
              </p>
            )}
          </div>
        )}
      </div>

    </div>
  );
}